import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from '@/app/api/athletes/search/route';
import { NextRequest } from 'next/server';

// Mock prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    athlete: {
      findMany: vi.fn(),
      count: vi.fn(),
    },
  },
}));

// Mock rate limiter
vi.mock('@/lib/rate-limit', () => ({
  apiRateLimiter: {
    check: vi.fn().mockResolvedValue(undefined),
  },
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
  RateLimitError: class RateLimitError extends Error {},
  rateLimitResponse: vi.fn(),
}));

import { prisma } from '@/lib/prisma';

const mockPrisma = prisma as unknown as {
  athlete: {
    findMany: ReturnType<typeof vi.fn>;
    count: ReturnType<typeof vi.fn>;
  };
};

const mockAthletes = [
  {
    id: 'athlete-1',
    userId: 'user-1',
    sport: 'Basketball',
    position: 'Point Guard',
    state: 'CA',
    school: 'Test High School',
    user: { id: 'user-1', name: 'John Doe', image: null },
    ratings: [{ overallScore: 85 }],
  },
  {
    id: 'athlete-2',
    userId: 'user-2',
    sport: 'Football',
    position: 'Quarterback',
    state: 'TX',
    school: 'Another High School',
    user: { id: 'user-2', name: 'Jane Smith', image: null },
    ratings: [{ overallScore: 90 }],
  },
];

function createRequest(params: Record<string, string> = {}) {
  const url = new URL('http://localhost/api/athletes/search');
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return new NextRequest(url);
}

describe('GET /api/athletes/search', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockPrisma.athlete.findMany.mockResolvedValue(mockAthletes);
    mockPrisma.athlete.count.mockResolvedValue(2);
  });

  it('returns athletes with default pagination', async () => {
    const request = createRequest();
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.athletes).toHaveLength(2);
    expect(data.pagination).toEqual({
      page: 1,
      limit: 20,
      total: 2,
      totalPages: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    });
  });

  it('searches by query string', async () => {
    const request = createRequest({ query: 'John' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          OR: expect.arrayContaining([
            expect.objectContaining({ user: { name: { contains: 'John', mode: 'insensitive' } } }),
          ]),
        }),
      })
    );
  });

  it('filters by sport', async () => {
    const request = createRequest({ sport: 'Basketball' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          sport: 'Basketball',
        }),
      })
    );
  });

  it('filters by position', async () => {
    const request = createRequest({ position: 'Quarterback' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          position: 'Quarterback',
        }),
      })
    );
  });

  it('filters by state', async () => {
    const request = createRequest({ state: 'CA' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          state: 'CA',
        }),
      })
    );
  });

  it('filters by minimum rating', async () => {
    const request = createRequest({ minRating: '80' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          ratings: expect.objectContaining({
            some: expect.objectContaining({
              overallScore: expect.objectContaining({ gte: 80 }),
            }),
          }),
        }),
      })
    );
  });

  it('filters by maximum rating', async () => {
    const request = createRequest({ maxRating: '95' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          ratings: expect.objectContaining({
            some: expect.objectContaining({
              overallScore: expect.objectContaining({ lte: 95 }),
            }),
          }),
        }),
      })
    );
  });

  it('supports custom pagination', async () => {
    mockPrisma.athlete.count.mockResolvedValue(50);

    const request = createRequest({ page: '2', limit: '10' });
    const response = await GET(request);
    const data = await response.json();

    expect(data.pagination.page).toBe(2);
    expect(data.pagination.limit).toBe(10);
    expect(data.pagination.totalPages).toBe(5);
    expect(data.pagination.hasNextPage).toBe(true);
    expect(data.pagination.hasPreviousPage).toBe(true);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        skip: 10, // (page 2 - 1) * limit 10
        take: 10,
      })
    );
  });

  it('sorts by rating descending by default', async () => {
    const request = createRequest();
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        orderBy: { ratings: { _count: 'desc' } },
      })
    );
  });

  it('sorts by name ascending', async () => {
    const request = createRequest({ sortBy: 'name', sortOrder: 'asc' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        orderBy: { user: { name: 'asc' } },
      })
    );
  });

  it('sorts by recent', async () => {
    const request = createRequest({ sortBy: 'recent', sortOrder: 'desc' });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        orderBy: { createdAt: 'desc' },
      })
    );
  });

  it('combines multiple filters', async () => {
    const request = createRequest({
      sport: 'Basketball',
      state: 'CA',
      minRating: '70',
    });
    await GET(request);

    expect(mockPrisma.athlete.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          sport: 'Basketball',
          state: 'CA',
          ratings: expect.any(Object),
        }),
      })
    );
  });

  it('returns empty results gracefully', async () => {
    mockPrisma.athlete.findMany.mockResolvedValue([]);
    mockPrisma.athlete.count.mockResolvedValue(0);

    const request = createRequest({ query: 'nonexistent' });
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.athletes).toHaveLength(0);
    expect(data.pagination.total).toBe(0);
    expect(data.pagination.totalPages).toBe(0);
  });
});
