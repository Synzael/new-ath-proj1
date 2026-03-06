import { cache } from 'react';
import { prisma } from '@/lib/prisma';
import { athleteCache, withCache } from '@/lib/cache';
import type { AthleteSummary, AthleteFilters, PaginatedResponse } from '@/types';

type RankedAthleteRow = {
  rank: number;
  id: string;
  userId: string;
  name: string;
  image: string | null;
  sport: string;
  position: string | null;
  school: string | null;
  state: string | null;
  classYear: number | null;
  overallRating: number;
  percentile: number;
};

const sampleRankingsSeed: Omit<RankedAthleteRow, 'rank'>[] = [
  {
    id: 'demo-athlete-1',
    userId: 'demo-user-1',
    name: 'Mason Carter',
    image: null,
    sport: 'Football',
    position: 'Quarterback',
    school: 'Westlake High',
    state: 'TX',
    classYear: 2027,
    overallRating: 98.2,
    percentile: 99,
  },
  {
    id: 'demo-athlete-2',
    userId: 'demo-user-2',
    name: 'Jalen Brooks',
    image: null,
    sport: 'Football',
    position: 'Wide Receiver',
    school: 'Bishop Gorman',
    state: 'NV',
    classYear: 2026,
    overallRating: 96.7,
    percentile: 98,
  },
  {
    id: 'demo-athlete-3',
    userId: 'demo-user-3',
    name: 'Avery Thompson',
    image: null,
    sport: 'Basketball',
    position: 'Point Guard',
    school: 'Sierra Canyon',
    state: 'CA',
    classYear: 2026,
    overallRating: 95.9,
    percentile: 97,
  },
  {
    id: 'demo-athlete-4',
    userId: 'demo-user-4',
    name: 'Jordan Lewis',
    image: null,
    sport: 'Basketball',
    position: 'Forward',
    school: 'Oak Hill Academy',
    state: 'VA',
    classYear: 2027,
    overallRating: 94.8,
    percentile: 96,
  },
  {
    id: 'demo-athlete-5',
    userId: 'demo-user-5',
    name: 'Diego Ramirez',
    image: null,
    sport: 'Soccer',
    position: 'Midfielder',
    school: 'IMG Academy',
    state: 'FL',
    classYear: 2026,
    overallRating: 93.6,
    percentile: 95,
  },
  {
    id: 'demo-athlete-6',
    userId: 'demo-user-6',
    name: 'Liam Foster',
    image: null,
    sport: 'Baseball',
    position: 'Pitcher',
    school: 'Orange Lutheran',
    state: 'CA',
    classYear: 2027,
    overallRating: 92.9,
    percentile: 94,
  },
  {
    id: 'demo-athlete-7',
    userId: 'demo-user-7',
    name: 'Noah Bennett',
    image: null,
    sport: 'Track & Field',
    position: 'Sprinter',
    school: 'St. Thomas Aquinas',
    state: 'FL',
    classYear: 2026,
    overallRating: 91.8,
    percentile: 93,
  },
  {
    id: 'demo-athlete-8',
    userId: 'demo-user-8',
    name: 'Ethan Wallace',
    image: null,
    sport: 'Football',
    position: 'Linebacker',
    school: 'Mater Dei',
    state: 'CA',
    classYear: 2027,
    overallRating: 90.7,
    percentile: 91,
  },
  {
    id: 'demo-athlete-9',
    userId: 'demo-user-9',
    name: 'Olivia Reed',
    image: null,
    sport: 'Volleyball',
    position: 'Outside Hitter',
    school: 'Punahou School',
    state: 'HI',
    classYear: 2026,
    overallRating: 89.9,
    percentile: 90,
  },
  {
    id: 'demo-athlete-10',
    userId: 'demo-user-10',
    name: 'Kennedy Price',
    image: null,
    sport: 'Softball',
    position: 'Shortstop',
    school: 'Lakewood Ranch',
    state: 'FL',
    classYear: 2027,
    overallRating: 88.9,
    percentile: 88,
  },
  {
    id: 'demo-athlete-11',
    userId: 'demo-user-11',
    name: 'Ryan Patel',
    image: null,
    sport: 'Wrestling',
    position: '157 lbs',
    school: 'Wyoming Seminary',
    state: 'PA',
    classYear: 2026,
    overallRating: 88.1,
    percentile: 87,
  },
  {
    id: 'demo-athlete-12',
    userId: 'demo-user-12',
    name: 'Caleb Rivers',
    image: null,
    sport: 'Football',
    position: 'Running Back',
    school: 'De La Salle',
    state: 'CA',
    classYear: 2027,
    overallRating: 87.5,
    percentile: 86,
  },
];

function getSampleTopAthletes(sport: string | null, limit: number): RankedAthleteRow[] {
  const normalizedSport = sport?.trim().toLowerCase();
  const filtered = normalizedSport
    ? sampleRankingsSeed.filter((athlete) => athlete.sport.toLowerCase() === normalizedSport)
    : sampleRankingsSeed;

  return filtered.slice(0, limit).map((athlete, index) => ({
    ...athlete,
    rank: index + 1,
  }));
}

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
    try {
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

      const ranked = athletes
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

      if (ranked.length > 0) {
        return ranked;
      }

      return getSampleTopAthletes(sport, limit);
    } catch (error) {
      console.error('Failed to load rankings from database, using sample rankings:', error);
      return getSampleTopAthletes(sport, limit);
    }
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
