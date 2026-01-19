import { prisma } from '@/lib/prisma';
import { ratingCache, withCache } from '@/lib/cache';
import type { RatingInput, RatingResult, PerformanceStat } from '@/types';

// Weight constants for the rating algorithm
const WEIGHTS = {
  performance: 0.4,  // 40%
  physical: 0.2,     // 20%
  academic: 0.15,    // 15%
  social: 0.15,      // 15%
  evaluation: 0.1,   // 10%
} as const;

// Normalization constants (based on typical athlete ranges)
const NORMALIZATION = {
  // Performance benchmarks by category
  performance: {
    speed: { min: 4.2, max: 6.0 }, // 40-yard dash in seconds (lower is better)
    strength: { min: 0, max: 500 }, // Bench press in lbs
    agility: { min: 3.5, max: 6.0 }, // Shuttle time in seconds (lower is better)
    vertical: { min: 20, max: 45 }, // Vertical jump in inches
    endurance: { min: 5, max: 15 }, // Mile time in minutes (lower is better)
  },
  // Physical benchmarks
  physical: {
    heightMin: 60, // 5'0"
    heightMax: 84, // 7'0"
    weightMin: 120,
    weightMax: 350,
  },
  // Academic benchmarks
  academic: {
    gpaMin: 0,
    gpaMax: 4.0,
    satMin: 400,
    satMax: 1600,
    actMin: 1,
    actMax: 36,
  },
  // Social media follower benchmarks
  social: {
    followersMin: 0,
    followersMax: 1000000, // 1M followers = max score
  },
  // Evaluation score benchmarks
  evaluation: {
    min: 0,
    max: 100,
  },
};

// Calculate performance score from stats
function calculatePerformanceScore(stats: PerformanceStat[]): number {
  if (stats.length === 0) return 50; // Default to middle if no stats

  const categoryScores: { [key: string]: number[] } = {};

  for (const stat of stats) {
    const category = stat.category.toLowerCase();
    const benchmark = NORMALIZATION.performance[category as keyof typeof NORMALIZATION.performance];

    if (!benchmark) continue;

    let normalizedValue: number;

    // For speed/agility/endurance, lower is better
    if (['speed', 'agility', 'endurance'].includes(category)) {
      normalizedValue = ((benchmark.max - stat.value) / (benchmark.max - benchmark.min)) * 100;
    } else {
      normalizedValue = ((stat.value - benchmark.min) / (benchmark.max - benchmark.min)) * 100;
    }

    // Clamp to 0-100 range
    normalizedValue = Math.max(0, Math.min(100, normalizedValue));

    if (!categoryScores[category]) {
      categoryScores[category] = [];
    }
    categoryScores[category].push(normalizedValue);

    // Bonus for verified stats
    if (stat.verified) {
      categoryScores[category].push(normalizedValue * 1.1); // 10% bonus
    }
  }

  // Average scores across all categories
  const allScores = Object.values(categoryScores).flatMap((scores) => scores);
  if (allScores.length === 0) return 50;

  return allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
}

// Calculate physical score from height/weight
function calculatePhysicalScore(height: number | null, weight: number | null): number {
  if (height === null && weight === null) return 50;

  let score = 50;
  let count = 0;

  if (height !== null) {
    const { heightMin, heightMax } = NORMALIZATION.physical;
    const normalizedHeight = ((height - heightMin) / (heightMax - heightMin)) * 100;
    score += Math.max(0, Math.min(100, normalizedHeight));
    count++;
  }

  if (weight !== null) {
    // Weight scoring is more nuanced - we use a bell curve centered on "ideal" weight
    // For simplicity, we just normalize linearly
    const { weightMin, weightMax } = NORMALIZATION.physical;
    const normalizedWeight = ((weight - weightMin) / (weightMax - weightMin)) * 100;
    score += Math.max(0, Math.min(100, normalizedWeight));
    count++;
  }

  return count > 0 ? score / (count + 1) : 50; // +1 for the initial 50
}

// Calculate academic score from GPA and test scores
function calculateAcademicScore(gpa: number | null, sat: number | null, act: number | null): number {
  const scores: number[] = [];

  if (gpa !== null) {
    const { gpaMin, gpaMax } = NORMALIZATION.academic;
    const normalizedGpa = ((gpa - gpaMin) / (gpaMax - gpaMin)) * 100;
    scores.push(Math.max(0, Math.min(100, normalizedGpa)));
  }

  if (sat !== null) {
    const { satMin, satMax } = NORMALIZATION.academic;
    const normalizedSat = ((sat - satMin) / (satMax - satMin)) * 100;
    scores.push(Math.max(0, Math.min(100, normalizedSat)));
  }

  if (act !== null) {
    const { actMin, actMax } = NORMALIZATION.academic;
    const normalizedAct = ((act - actMin) / (actMax - actMin)) * 100;
    scores.push(Math.max(0, Math.min(100, normalizedAct)));
  }

  if (scores.length === 0) return 50;

  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

// Calculate social score from total followers
function calculateSocialScore(totalFollowers: number): number {
  const { followersMax } = NORMALIZATION.social;
  // Use logarithmic scale for followers (1K followers = ~30, 10K = ~50, 100K = ~70, 1M = 100)
  if (totalFollowers <= 0) return 0;
  const logScore = (Math.log10(totalFollowers) / Math.log10(followersMax)) * 100;
  return Math.max(0, Math.min(100, logScore));
}

// Calculate evaluation score from coach/scout evaluations
function calculateEvaluationScore(evaluationScores: number[]): number {
  if (evaluationScores.length === 0) return 50;

  // Weight more recent evaluations higher (if we had timestamps)
  // For now, just average
  const sum = evaluationScores.reduce((acc, score) => acc + score, 0);
  return Math.max(0, Math.min(100, sum / evaluationScores.length));
}

// Main rating calculation function
export function calculateRating(input: RatingInput): RatingResult {
  const performanceScore = calculatePerformanceScore(input.performanceStats);
  const physicalScore = calculatePhysicalScore(input.height, input.weight);
  const academicScore = calculateAcademicScore(input.gpa, null, null);
  const socialScore = calculateSocialScore(input.socialFollowers);
  const evaluationScore = calculateEvaluationScore(input.evaluationScores);

  // Calculate weighted overall score
  const overallScore =
    performanceScore * WEIGHTS.performance +
    physicalScore * WEIGHTS.physical +
    academicScore * WEIGHTS.academic +
    socialScore * WEIGHTS.social +
    evaluationScore * WEIGHTS.evaluation;

  // Percentile will be calculated when we have more athletes
  // For now, use a placeholder based on the overall score
  const percentile = overallScore;

  return {
    performanceScore: Math.round(performanceScore * 10) / 10,
    physicalScore: Math.round(physicalScore * 10) / 10,
    academicScore: Math.round(academicScore * 10) / 10,
    socialScore: Math.round(socialScore * 10) / 10,
    evaluationScore: Math.round(evaluationScore * 10) / 10,
    overallScore: Math.round(overallScore * 10) / 10,
    percentile: Math.round(percentile * 10) / 10,
  };
}

// Calculate and store rating for an athlete
export async function calculateAndStoreRating(athleteId: string): Promise<RatingResult> {
  // Fetch athlete data with all necessary relations
  const athlete = await prisma.athlete.findUnique({
    where: { id: athleteId },
    include: {
      performanceStats: true,
      socialLinks: true,
      evaluations: {
        where: { verified: true },
        orderBy: { createdAt: 'desc' },
        take: 10, // Use the 10 most recent verified evaluations
      },
    },
  });

  if (!athlete) {
    throw new Error('Athlete not found');
  }

  // Calculate total social followers
  const socialFollowers = athlete.socialLinks.reduce(
    (sum, link) => sum + (link.followers || 0),
    0
  );

  // Calculate rating
  const ratingResult = calculateRating({
    performanceStats: athlete.performanceStats,
    height: athlete.height,
    weight: athlete.weight,
    gpa: athlete.gpa,
    socialFollowers,
    evaluationScores: athlete.evaluations.map((e) => e.score),
  });

  // Store the rating
  await prisma.rating.create({
    data: {
      athleteId,
      performanceScore: ratingResult.performanceScore,
      physicalScore: ratingResult.physicalScore,
      academicScore: ratingResult.academicScore,
      socialScore: ratingResult.socialScore,
      evaluationScore: ratingResult.evaluationScore,
      overallScore: ratingResult.overallScore,
      percentile: ratingResult.percentile,
    },
  });

  // Invalidate cache
  ratingCache.delete(`rating:${athleteId}`);

  return ratingResult;
}

// Get latest rating for an athlete (with caching)
export const getAthleteRating = withCache(
  ratingCache,
  (athleteId: string) => `rating:${athleteId}`,
  async (athleteId: string) => {
    const rating = await prisma.rating.findFirst({
      where: { athleteId },
      orderBy: { calculatedAt: 'desc' },
    });
    return rating;
  }
);

// Recalculate percentiles for all athletes (should be run periodically)
export async function recalculateAllPercentiles(): Promise<void> {
  // Get all latest ratings
  const latestRatings = await prisma.$queryRaw<{ athleteId: string; overallScore: number }[]>`
    SELECT DISTINCT ON ("athleteId") "athleteId", "overallScore"
    FROM "Rating"
    ORDER BY "athleteId", "calculatedAt" DESC
  `;

  if (latestRatings.length === 0) return;

  // Sort by overall score
  const sorted = [...latestRatings].sort((a, b) => a.overallScore - b.overallScore);

  // Calculate percentiles
  const updates = sorted.map((rating, index) => ({
    athleteId: rating.athleteId,
    percentile: ((index + 1) / sorted.length) * 100,
  }));

  // Update all ratings in a transaction
  await prisma.$transaction(
    updates.map((update) =>
      prisma.rating.updateMany({
        where: { athleteId: update.athleteId },
        data: { percentile: update.percentile },
      })
    )
  );

  // Clear all rating caches
  ratingCache.clear();
}
