import { cache } from 'react';
import { prisma } from '@/lib/prisma';
import { athleteCache, withCache } from '@/lib/cache';
import type { AthleteSummary, AthleteFilters, PaginatedResponse } from '@/types';

// Get athlete by ID with React.cache for per-request deduplication
export const getAthleteById = cache(async (id: string) => {
  const athlete = await prisma.athlete.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      performanceStats: {
        orderBy: { recordedAt: 'desc' },
      },
      videos: {
        orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
      },
      socialLinks: true,
      ratings: {
        orderBy: { calculatedAt: 'desc' },
        take: 1,
      },
    },
  });

  return athlete;
});

// Get athlete by user ID
export const getAthleteByUserId = cache(async (userId: string) => {
  const athlete = await prisma.athlete.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      performanceStats: true,
      videos: true,
      socialLinks: true,
      ratings: {
        orderBy: { calculatedAt: 'desc' },
        take: 1,
      },
    },
  });

  return athlete;
});

// Get athletes list with filtering and pagination (LRU cached)
export const getAthletes = withCache(
  athleteCache,
  (filters: AthleteFilters, page: number, pageSize: number) =>
    `athletes:${JSON.stringify(filters)}:${page}:${pageSize}`,
  async (
    filters: AthleteFilters,
    page: number = 1,
    pageSize: number = 20
  ): Promise<PaginatedResponse<AthleteSummary>> => {
    const where: Record<string, unknown> = {};

    if (filters.sport) {
      where.sport = filters.sport;
    }
    if (filters.position) {
      where.position = filters.position;
    }
    if (filters.state) {
      where.state = filters.state;
    }
    if (filters.classYear) {
      where.classYear = filters.classYear;
    }
    if (filters.search) {
      where.OR = [
        { user: { name: { contains: filters.search, mode: 'insensitive' } } },
        { school: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    // Start both queries in parallel
    const [athletes, total] = await Promise.all([
      prisma.athlete.findMany({
        where,
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
          ratings: {
            orderBy: { calculatedAt: 'desc' },
            take: 1,
            select: {
              overallScore: true,
              percentile: true,
            },
          },
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: [
          { ratings: { _count: 'desc' } },
          { createdAt: 'desc' },
        ],
      }),
      prisma.athlete.count({ where }),
    ]);

    const summaries: AthleteSummary[] = athletes.map((athlete) => ({
      id: athlete.id,
      userId: athlete.userId,
      name: athlete.user.name || 'Unknown',
      image: athlete.user.image,
      sport: athlete.sport,
      position: athlete.position,
      school: athlete.school,
      state: athlete.state,
      classYear: athlete.classYear,
      overallRating: athlete.ratings[0]?.overallScore || null,
      percentile: athlete.ratings[0]?.percentile || null,
    }));

    return {
      data: summaries,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }
);

// Get top athletes for rankings (LRU cached)
export const getTopAthletes = withCache(
  athleteCache,
  (sport: string | null, limit: number) => `top-athletes:${sport || 'all'}:${limit}`,
  async (sport: string | null = null, limit: number = 100) => {
    const where: Record<string, unknown> = {};
    if (sport) {
      where.sport = sport;
    }

    const athletes = await prisma.athlete.findMany({
      where,
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
        ratings: {
          orderBy: { calculatedAt: 'desc' },
          take: 1,
        },
      },
      orderBy: {
        ratings: {
          _count: 'desc',
        },
      },
      take: limit,
    });

    // Sort by rating score
    return athletes
      .filter((a) => a.ratings.length > 0)
      .sort((a, b) => (b.ratings[0]?.overallScore || 0) - (a.ratings[0]?.overallScore || 0))
      .map((athlete, index) => ({
        rank: index + 1,
        id: athlete.id,
        userId: athlete.userId,
        name: athlete.user.name || 'Unknown',
        image: athlete.user.image,
        sport: athlete.sport,
        position: athlete.position,
        school: athlete.school,
        state: athlete.state,
        classYear: athlete.classYear,
        overallRating: athlete.ratings[0]?.overallScore || 0,
        percentile: athlete.ratings[0]?.percentile || 0,
      }));
  }
);

// Get sports list for filtering
export const getSports = cache(async () => {
  const sports = await prisma.athlete.findMany({
    select: { sport: true },
    distinct: ['sport'],
    orderBy: { sport: 'asc' },
  });
  return sports.map((s) => s.sport);
});

// Get states list for filtering
export const getStates = cache(async () => {
  const states = await prisma.athlete.findMany({
    where: { state: { not: null } },
    select: { state: true },
    distinct: ['state'],
    orderBy: { state: 'asc' },
  });
  return states.map((s) => s.state).filter(Boolean) as string[];
});

// Create new athlete profile
export async function createAthlete(
  userId: string,
  data: {
    sport: string;
    position?: string;
    bio?: string;
    school?: string;
    classYear?: number;
    city?: string;
    state?: string;
    height?: number;
    weight?: number;
    gpa?: number;
  }
) {
  const athlete = await prisma.athlete.create({
    data: {
      userId,
      sport: data.sport,
      position: data.position,
      bio: data.bio,
      school: data.school,
      classYear: data.classYear,
      city: data.city,
      state: data.state,
      height: data.height,
      weight: data.weight,
      gpa: data.gpa,
    },
  });

  // Invalidate cache
  athleteCache.clear();

  return athlete;
}

// Update athlete profile
export async function updateAthlete(
  id: string,
  data: Partial<{
    sport: string;
    position: string | null;
    bio: string | null;
    school: string | null;
    classYear: number | null;
    city: string | null;
    state: string | null;
    height: number | null;
    weight: number | null;
    gpa: number | null;
    satScore: number | null;
    actScore: number | null;
    dateOfBirth: Date | null;
  }>
) {
  const athlete = await prisma.athlete.update({
    where: { id },
    data,
  });

  // Invalidate cache
  athleteCache.delete(`athlete:${id}`);

  return athlete;
}

// Add performance stat
export async function addPerformanceStat(
  athleteId: string,
  data: {
    name: string;
    value: number;
    unit: string;
    category: string;
  }
) {
  const stat = await prisma.performanceStat.create({
    data: {
      athleteId,
      ...data,
    },
  });

  // Invalidate athlete cache
  athleteCache.delete(`athlete:${athleteId}`);

  return stat;
}

// Add video
export async function addVideo(
  athleteId: string,
  data: {
    title: string;
    url: string;
    thumbnailUrl?: string;
    duration?: number;
    category: string;
    description?: string;
    featured?: boolean;
  }
) {
  const video = await prisma.video.create({
    data: {
      athleteId,
      ...data,
    },
  });

  return video;
}

// Add social link
export async function addSocialLink(
  athleteId: string,
  data: {
    platform: string;
    url: string;
    followers?: number;
  }
) {
  const link = await prisma.socialLink.upsert({
    where: {
      athleteId_platform: {
        athleteId,
        platform: data.platform,
      },
    },
    update: {
      url: data.url,
      followers: data.followers,
    },
    create: {
      athleteId,
      ...data,
    },
  });

  return link;
}
