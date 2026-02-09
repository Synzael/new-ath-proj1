import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock prisma before importing service
vi.mock('@/lib/prisma', () => ({
  prisma: {
    athlete: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    performanceStat: {
      create: vi.fn(),
    },
    video: {
      create: vi.fn(),
    },
    socialLink: {
      upsert: vi.fn(),
    },
  },
}));

// Mock cache
vi.mock('@/lib/cache', () => ({
  athleteCache: {
    get: vi.fn(),
    set: vi.fn(),
    delete: vi.fn(),
    clear: vi.fn(),
  },
  withCache: vi.fn((cache, keyFn, fn) => fn),
}));

// Mock React cache — returns the function as-is so cached service functions
// execute directly. This bypasses deduplication/memoization behavior;
// cache-specific logic should be tested separately if needed.
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    cache: (fn: unknown) => fn,
  };
});

import { prisma } from '@/lib/prisma';
import { athleteCache } from '@/lib/cache';
import {
  getAthleteById,
  getAthleteByUserId,
  createAthlete,
  updateAthlete,
  addPerformanceStat,
  addVideo,
  addSocialLink,
  getSports,
  getStates,
} from '@/services/athlete.service';

const mockPrisma = prisma as unknown as {
  athlete: {
    findUnique: ReturnType<typeof vi.fn>;
    findMany: ReturnType<typeof vi.fn>;
    count: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  performanceStat: {
    create: ReturnType<typeof vi.fn>;
  };
  video: {
    create: ReturnType<typeof vi.fn>;
  };
  socialLink: {
    upsert: ReturnType<typeof vi.fn>;
  };
};

const mockAthleteCache = athleteCache as unknown as {
  delete: ReturnType<typeof vi.fn>;
  clear: ReturnType<typeof vi.fn>;
};

const mockAthlete = {
  id: 'athlete-123',
  userId: 'user-123',
  sport: 'Basketball',
  position: 'Point Guard',
  bio: 'Test bio',
  school: 'Test University',
  state: 'CA',
  classYear: 2025,
  user: {
    id: 'user-123',
    name: 'John Doe',
    email: 'john@example.com',
    image: null,
  },
  performanceStats: [],
  videos: [],
  socialLinks: [],
  ratings: [],
};

describe('Athlete Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAthleteById', () => {
    it('returns athlete when found', async () => {
      mockPrisma.athlete.findUnique.mockResolvedValue(mockAthlete);

      const result = await getAthleteById('athlete-123');

      expect(result).toEqual(mockAthlete);
      expect(mockPrisma.athlete.findUnique).toHaveBeenCalledWith({
        where: { id: 'athlete-123' },
        include: expect.objectContaining({
          user: expect.any(Object),
          performanceStats: expect.any(Object),
          videos: expect.any(Object),
          socialLinks: true,
          ratings: expect.any(Object),
        }),
      });
    });

    it('returns null when athlete not found', async () => {
      mockPrisma.athlete.findUnique.mockResolvedValue(null);

      const result = await getAthleteById('nonexistent');

      expect(result).toBeNull();
    });
  });

  describe('getAthleteByUserId', () => {
    it('returns athlete for user ID', async () => {
      mockPrisma.athlete.findUnique.mockResolvedValue(mockAthlete);

      const result = await getAthleteByUserId('user-123');

      expect(result).toEqual(mockAthlete);
      expect(mockPrisma.athlete.findUnique).toHaveBeenCalledWith({
        where: { userId: 'user-123' },
        include: expect.any(Object),
      });
    });

    it('returns null when no athlete for user', async () => {
      mockPrisma.athlete.findUnique.mockResolvedValue(null);

      const result = await getAthleteByUserId('user-456');

      expect(result).toBeNull();
    });
  });

  describe('createAthlete', () => {
    it('creates athlete and clears cache', async () => {
      const newAthlete = { ...mockAthlete, id: 'new-athlete-123' };
      mockPrisma.athlete.create.mockResolvedValue(newAthlete);

      const result = await createAthlete('user-456', {
        sport: 'Football',
        position: 'Quarterback',
        school: 'Test High',
      });

      expect(result).toEqual(newAthlete);
      expect(mockPrisma.athlete.create).toHaveBeenCalledWith({
        data: {
          userId: 'user-456',
          sport: 'Football',
          position: 'Quarterback',
          school: 'Test High',
          bio: undefined,
          classYear: undefined,
          city: undefined,
          state: undefined,
          height: undefined,
          weight: undefined,
          gpa: undefined,
        },
      });
      expect(mockAthleteCache.clear).toHaveBeenCalled();
    });

    it('creates athlete with all fields', async () => {
      mockPrisma.athlete.create.mockResolvedValue(mockAthlete);

      await createAthlete('user-456', {
        sport: 'Basketball',
        position: 'Center',
        bio: 'Great player',
        school: 'University',
        classYear: 2025,
        city: 'Los Angeles',
        state: 'CA',
        height: 78,
        weight: 220,
        gpa: 3.8,
      });

      expect(mockPrisma.athlete.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          sport: 'Basketball',
          position: 'Center',
          bio: 'Great player',
          gpa: 3.8,
        }),
      });
    });
  });

  describe('updateAthlete', () => {
    it('updates athlete and invalidates cache', async () => {
      const updatedAthlete = { ...mockAthlete, bio: 'Updated bio' };
      mockPrisma.athlete.update.mockResolvedValue(updatedAthlete);

      const result = await updateAthlete('athlete-123', { bio: 'Updated bio' });

      expect(result).toEqual(updatedAthlete);
      expect(mockPrisma.athlete.update).toHaveBeenCalledWith({
        where: { id: 'athlete-123' },
        data: { bio: 'Updated bio' },
      });
      expect(mockAthleteCache.delete).toHaveBeenCalledWith('athlete:athlete-123');
    });

    it('updates multiple fields', async () => {
      mockPrisma.athlete.update.mockResolvedValue(mockAthlete);

      await updateAthlete('athlete-123', {
        sport: 'Soccer',
        position: 'Forward',
        gpa: 4.0,
      });

      expect(mockPrisma.athlete.update).toHaveBeenCalledWith({
        where: { id: 'athlete-123' },
        data: {
          sport: 'Soccer',
          position: 'Forward',
          gpa: 4.0,
        },
      });
    });
  });

  describe('addPerformanceStat', () => {
    it('creates stat and invalidates athlete cache', async () => {
      const newStat = {
        id: 'stat-123',
        athleteId: 'athlete-123',
        name: '40-yard dash',
        value: 4.5,
        unit: 'seconds',
        category: 'Speed',
      };
      mockPrisma.performanceStat.create.mockResolvedValue(newStat);

      const result = await addPerformanceStat('athlete-123', {
        name: '40-yard dash',
        value: 4.5,
        unit: 'seconds',
        category: 'Speed',
      });

      expect(result).toEqual(newStat);
      expect(mockAthleteCache.delete).toHaveBeenCalledWith('athlete:athlete-123');
    });
  });

  describe('addVideo', () => {
    it('creates video for athlete', async () => {
      const newVideo = {
        id: 'video-123',
        athleteId: 'athlete-123',
        title: 'Highlights 2024',
        url: 'https://youtube.com/watch?v=123',
        category: 'Highlights',
      };
      mockPrisma.video.create.mockResolvedValue(newVideo);

      const result = await addVideo('athlete-123', {
        title: 'Highlights 2024',
        url: 'https://youtube.com/watch?v=123',
        category: 'Highlights',
      });

      expect(result).toEqual(newVideo);
      expect(mockPrisma.video.create).toHaveBeenCalledWith({
        data: {
          athleteId: 'athlete-123',
          title: 'Highlights 2024',
          url: 'https://youtube.com/watch?v=123',
          category: 'Highlights',
        },
      });
    });

    it('creates video with all fields', async () => {
      mockPrisma.video.create.mockResolvedValue({
        id: 'video-456',
        athleteId: 'athlete-123',
        title: 'Full Game',
        url: 'https://youtube.com/watch?v=456',
        thumbnailUrl: 'https://img.youtube.com/thumb.jpg',
        duration: 3600,
        category: 'Full Game',
        description: 'Championship game',
        featured: true,
      });

      await addVideo('athlete-123', {
        title: 'Full Game',
        url: 'https://youtube.com/watch?v=456',
        thumbnailUrl: 'https://img.youtube.com/thumb.jpg',
        duration: 3600,
        category: 'Full Game',
        description: 'Championship game',
        featured: true,
      });

      expect(mockPrisma.video.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          title: 'Full Game',
          thumbnailUrl: 'https://img.youtube.com/thumb.jpg',
          duration: 3600,
          featured: true,
        }),
      });
    });
  });

  describe('addSocialLink', () => {
    it('upserts social link', async () => {
      const link = {
        id: 'link-123',
        athleteId: 'athlete-123',
        platform: 'Instagram',
        url: 'https://instagram.com/athlete',
        followers: 10000,
      };
      mockPrisma.socialLink.upsert.mockResolvedValue(link);

      const result = await addSocialLink('athlete-123', {
        platform: 'Instagram',
        url: 'https://instagram.com/athlete',
        followers: 10000,
      });

      expect(result).toEqual(link);
      expect(mockPrisma.socialLink.upsert).toHaveBeenCalledWith({
        where: {
          athleteId_platform: {
            athleteId: 'athlete-123',
            platform: 'Instagram',
          },
        },
        update: {
          url: 'https://instagram.com/athlete',
          followers: 10000,
        },
        create: {
          athleteId: 'athlete-123',
          platform: 'Instagram',
          url: 'https://instagram.com/athlete',
          followers: 10000,
        },
      });
    });
  });

  describe('getSports', () => {
    it('returns distinct sports list', async () => {
      mockPrisma.athlete.findMany.mockResolvedValue([
        { sport: 'Basketball' },
        { sport: 'Football' },
        { sport: 'Soccer' },
      ]);

      const result = await getSports();

      expect(result).toEqual(['Basketball', 'Football', 'Soccer']);
      expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith({
        select: { sport: true },
        distinct: ['sport'],
        orderBy: { sport: 'asc' },
      });
    });
  });

  describe('getStates', () => {
    it('returns distinct states list', async () => {
      mockPrisma.athlete.findMany.mockResolvedValue([
        { state: 'CA' },
        { state: 'TX' },
        { state: 'FL' },
      ]);

      const result = await getStates();

      expect(result).toEqual(['CA', 'TX', 'FL']);
    });

    it('filters out null states', async () => {
      mockPrisma.athlete.findMany.mockResolvedValue([
        { state: 'CA' },
        { state: null },
        { state: 'TX' },
      ]);

      const result = await getStates();

      expect(result).toEqual(['CA', 'TX']);
    });
  });
});
