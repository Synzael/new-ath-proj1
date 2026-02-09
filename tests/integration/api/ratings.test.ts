import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, POST } from '@/app/api/athletes/[id]/rating/route';
import { NextRequest } from 'next/server';

vi.mock('@/services/rating.service', () => ({
  getAthleteRating: vi.fn(),
  calculateAndStoreRating: vi.fn(),
}));

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

import { getAthleteRating, calculateAndStoreRating } from '@/services/rating.service';
import { getCurrentUser } from '@/lib/auth';

const mockGetAthleteRating = getAthleteRating as unknown as ReturnType<typeof vi.fn>;
const mockCalculateAndStoreRating = calculateAndStoreRating as unknown as ReturnType<typeof vi.fn>;
const mockGetCurrentUser = getCurrentUser as unknown as ReturnType<typeof vi.fn>;

function makeParams(id: string) {
  return { params: Promise.resolve({ id }) };
}

describe('GET /api/athletes/[id]/rating', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns rating when found', async () => {
    const mockRating = { overallScore: 85, performanceScore: 90 };
    mockGetAthleteRating.mockResolvedValue(mockRating);

    const request = new NextRequest('http://localhost/api/athletes/a1/rating');
    const response = await GET(request, makeParams('a1'));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.overallScore).toBe(85);
  });

  it('returns 404 when no rating exists', async () => {
    mockGetAthleteRating.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/athletes/a1/rating');
    const response = await GET(request, makeParams('a1'));
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.error).toBe('No rating found for this athlete');
  });

  it('returns 500 on service error', async () => {
    mockGetAthleteRating.mockRejectedValue(new Error('DB error'));

    const request = new NextRequest('http://localhost/api/athletes/a1/rating');
    const response = await GET(request, makeParams('a1'));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to fetch rating');
  });
});

describe('POST /api/athletes/[id]/rating', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('recalculates rating for ADMIN', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'admin-1', role: 'ADMIN' });
    mockCalculateAndStoreRating.mockResolvedValue({
      overallScore: 88,
      performanceScore: 90,
      physicalScore: 80,
      academicScore: 85,
      socialScore: 70,
      evaluationScore: 95,
      percentile: 88,
    });

    const request = new NextRequest('http://localhost/api/athletes/a1/rating', {
      method: 'POST',
    });
    const response = await POST(request, makeParams('a1'));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.overallScore).toBe(88);
  });

  it('returns 401 when not authenticated', async () => {
    mockGetCurrentUser.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/athletes/a1/rating', {
      method: 'POST',
    });
    const response = await POST(request, makeParams('a1'));
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('returns 403 for non-ADMIN users', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'user-1', role: 'ATHLETE' });

    const request = new NextRequest('http://localhost/api/athletes/a1/rating', {
      method: 'POST',
    });
    const response = await POST(request, makeParams('a1'));
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.error).toBe('Forbidden');
  });

  it('returns 500 on calculation error', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'admin-1', role: 'ADMIN' });
    mockCalculateAndStoreRating.mockRejectedValue(new Error('Athlete not found'));

    const request = new NextRequest('http://localhost/api/athletes/a1/rating', {
      method: 'POST',
    });
    const response = await POST(request, makeParams('a1'));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to calculate rating');
  });
});
