import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    athlete: {
      findUnique: vi.fn(),
    },
    rating: {
      create: vi.fn(),
      findFirst: vi.fn(),
      updateMany: vi.fn(),
    },
    $queryRaw: vi.fn(),
    $transaction: vi.fn(),
  },
}));

vi.mock('@/lib/cache', () => ({
  ratingCache: {
    get: vi.fn(),
    set: vi.fn(),
    delete: vi.fn(),
    clear: vi.fn(),
  },
  withCache: vi.fn((_cache, _keyFn, fn) => fn),
}));

import { prisma } from '@/lib/prisma';
import { ratingCache } from '@/lib/cache';
import {
  calculateRating,
  calculateAndStoreRating,
  getAthleteRating,
  recalculateAllPercentiles,
} from '@/services/rating.service';

const mockPrisma = prisma as unknown as {
  athlete: { findUnique: ReturnType<typeof vi.fn> };
  rating: {
    create: ReturnType<typeof vi.fn>;
    findFirst: ReturnType<typeof vi.fn>;
    updateMany: ReturnType<typeof vi.fn>;
  };
  $queryRaw: ReturnType<typeof vi.fn>;
  $transaction: ReturnType<typeof vi.fn>;
};

const mockRatingCache = ratingCache as unknown as {
  delete: ReturnType<typeof vi.fn>;
  clear: ReturnType<typeof vi.fn>;
};

describe('Rating Service - Extended', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('calculateRating - edge cases', () => {
    it('calculates speed stats (lower is better)', () => {
      const result = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: '40-yard', value: 4.4, unit: 's', category: 'Speed', recordedAt: new Date(), verified: false },
        ],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.performanceScore).toBeGreaterThan(50);
    });

    it('calculates agility stats (lower is better)', () => {
      const result = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: 'Shuttle', value: 4.0, unit: 's', category: 'Agility', recordedAt: new Date(), verified: false },
        ],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.performanceScore).toBeGreaterThan(50);
    });

    it('calculates strength stats (higher is better)', () => {
      const result = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: 'Bench', value: 300, unit: 'lbs', category: 'Strength', recordedAt: new Date(), verified: false },
        ],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.performanceScore).toBeGreaterThan(50);
    });

    it('gives bonus for verified stats', () => {
      const unverified = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: 'Bench', value: 250, unit: 'lbs', category: 'Strength', recordedAt: new Date(), verified: false },
        ],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      const verified = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: 'Bench', value: 250, unit: 'lbs', category: 'Strength', recordedAt: new Date(), verified: true },
        ],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(verified.performanceScore).toBeGreaterThan(unverified.performanceScore);
    });

    it('skips unknown performance categories', () => {
      const result = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: 'Custom', value: 50, unit: 'pts', category: 'Unknown', recordedAt: new Date(), verified: false },
        ],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.performanceScore).toBe(50);
    });

    it('calculates physical score with only height', () => {
      const result = calculateRating({
        performanceStats: [],
        height: 74,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.physicalScore).not.toBe(50);
    });

    it('calculates physical score with only weight', () => {
      const result = calculateRating({
        performanceStats: [],
        height: null,
        weight: 200,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.physicalScore).not.toBe(50);
    });

    it('calculates academic score with GPA only', () => {
      const result = calculateRating({
        performanceStats: [],
        height: null,
        weight: null,
        gpa: 3.5,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.academicScore).toBeGreaterThan(50);
    });

    it('returns 0 social score for 0 followers', () => {
      const result = calculateRating({
        performanceStats: [],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.socialScore).toBe(0);
    });

    it('returns 0 social score for negative followers', () => {
      const result = calculateRating({
        performanceStats: [],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: -100,
        evaluationScores: [],
      });

      expect(result.socialScore).toBe(0);
    });

    it('clamps evaluation scores to 0-100', () => {
      const result = calculateRating({
        performanceStats: [],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [150, 200],
      });

      expect(result.evaluationScore).toBeLessThanOrEqual(100);
    });

    it('rounds all scores to 1 decimal', () => {
      const result = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: 'Bench', value: 333, unit: 'lbs', category: 'Strength', recordedAt: new Date(), verified: true },
        ],
        height: 73,
        weight: 191,
        gpa: 3.33,
        socialFollowers: 7777,
        evaluationScores: [77],
      });

      const checkDecimal = (val: number) => {
        const str = val.toString();
        const parts = str.split('.');
        return parts.length === 1 || parts[1].length <= 1;
      };

      expect(checkDecimal(result.overallScore)).toBe(true);
      expect(checkDecimal(result.performanceScore)).toBe(true);
      expect(checkDecimal(result.physicalScore)).toBe(true);
    });
  });

  describe('calculateAndStoreRating', () => {
    it('calculates and stores rating for an athlete', async () => {
      mockPrisma.athlete.findUnique.mockResolvedValue({
        id: 'athlete-123',
        height: 74,
        weight: 200,
        gpa: 3.5,
        performanceStats: [],
        socialLinks: [{ followers: 5000 }, { followers: 3000 }],
        evaluations: [{ score: 85 }],
      });
      mockPrisma.rating.create.mockResolvedValue({});

      const result = await calculateAndStoreRating('athlete-123');

      expect(result.overallScore).toBeGreaterThan(0);
      expect(mockPrisma.rating.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          athleteId: 'athlete-123',
          overallScore: expect.any(Number),
        }),
      });
      expect(mockRatingCache.delete).toHaveBeenCalledWith('rating:athlete-123');
    });

    it('throws error when athlete not found', async () => {
      mockPrisma.athlete.findUnique.mockResolvedValue(null);

      await expect(calculateAndStoreRating('nonexistent')).rejects.toThrow('Athlete not found');
    });

    it('sums social followers from all links', async () => {
      mockPrisma.athlete.findUnique.mockResolvedValue({
        id: 'a1',
        height: null,
        weight: null,
        gpa: null,
        performanceStats: [],
        socialLinks: [
          { followers: 1000 },
          { followers: null },
          { followers: 2000 },
        ],
        evaluations: [],
      });
      mockPrisma.rating.create.mockResolvedValue({});

      const result = await calculateAndStoreRating('a1');

      expect(result.socialScore).toBeGreaterThan(0);
    });
  });

  describe('getAthleteRating', () => {
    it('returns the latest rating', async () => {
      const mockRating = {
        id: 'rating-1',
        athleteId: 'a1',
        overallScore: 85,
        calculatedAt: new Date(),
      };
      mockPrisma.rating.findFirst.mockResolvedValue(mockRating);

      const result = await getAthleteRating('a1');

      expect(result).toEqual(mockRating);
      expect(mockPrisma.rating.findFirst).toHaveBeenCalledWith({
        where: { athleteId: 'a1' },
        orderBy: { calculatedAt: 'desc' },
      });
    });

    it('returns null when no rating exists', async () => {
      mockPrisma.rating.findFirst.mockResolvedValue(null);

      const result = await getAthleteRating('nonexistent');

      expect(result).toBeNull();
    });
  });

  describe('recalculateAllPercentiles', () => {
    it('recalculates percentiles for all athletes', async () => {
      mockPrisma.$queryRaw.mockResolvedValue([
        { athleteId: 'a1', overallScore: 90 },
        { athleteId: 'a2', overallScore: 70 },
        { athleteId: 'a3', overallScore: 80 },
      ]);
      mockPrisma.$transaction.mockResolvedValue([]);

      await recalculateAllPercentiles();

      expect(mockPrisma.$transaction).toHaveBeenCalled();
      expect(mockRatingCache.clear).toHaveBeenCalled();
    });

    it('does nothing when no ratings exist', async () => {
      mockPrisma.$queryRaw.mockResolvedValue([]);

      await recalculateAllPercentiles();

      expect(mockPrisma.$transaction).not.toHaveBeenCalled();
    });
  });
});
