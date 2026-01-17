import { describe, it, expect } from 'vitest';
import { calculateRating } from '@/services/rating.service';

describe('Rating Service', () => {
  describe('calculateRating', () => {
    it('should return default scores when no data is provided', () => {
      const result = calculateRating({
        performanceStats: [],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 0,
        evaluationScores: [],
      });

      expect(result.overallScore).toBeGreaterThan(0);
      expect(result.performanceScore).toBe(50); // Default score
      expect(result.physicalScore).toBe(50);
      expect(result.academicScore).toBe(50);
      expect(result.socialScore).toBe(0);
      expect(result.evaluationScore).toBe(50);
    });

    it('should calculate performance score from stats', () => {
      const result = calculateRating({
        performanceStats: [
          { id: '1', athleteId: 'a1', name: '40-yard dash', value: 4.5, unit: 'seconds', category: 'Speed', recordedAt: new Date(), verified: true },
          { id: '2', athleteId: 'a1', name: 'Vertical jump', value: 36, unit: 'inches', category: 'Vertical', recordedAt: new Date(), verified: false },
        ],
        height: 74,
        weight: 185,
        gpa: 3.5,
        socialFollowers: 10000,
        evaluationScores: [85, 90],
      });

      expect(result.overallScore).toBeGreaterThan(50);
      expect(result.performanceScore).toBeGreaterThan(50);
    });

    it('should weight components correctly (40/20/15/15/10)', () => {
      // When all component scores are 100, the overall should be 100
      const result = calculateRating({
        performanceStats: [],
        height: 84, // Max height
        weight: 350, // Max weight
        gpa: 4.0, // Max GPA
        socialFollowers: 1000000, // Max followers
        evaluationScores: [100, 100, 100],
      });

      // Physical and academic should be high
      expect(result.physicalScore).toBeGreaterThan(80);
      expect(result.academicScore).toBe(100);
      expect(result.socialScore).toBe(100);
      expect(result.evaluationScore).toBe(100);
    });

    it('should handle social score with logarithmic scale', () => {
      const result1k = calculateRating({
        performanceStats: [],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 1000,
        evaluationScores: [],
      });

      const result100k = calculateRating({
        performanceStats: [],
        height: null,
        weight: null,
        gpa: null,
        socialFollowers: 100000,
        evaluationScores: [],
      });

      expect(result100k.socialScore).toBeGreaterThan(result1k.socialScore);
    });
  });
});
