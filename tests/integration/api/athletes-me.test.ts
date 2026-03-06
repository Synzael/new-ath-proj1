import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, PATCH } from '@/app/api/athletes/me/route';
import { NextRequest } from 'next/server';
import { createPatchRequest as createPatchReq } from '../../utils/request-helpers';

// Mock auth
vi.mock('@/lib/auth', () => ({
  auth: vi.fn(),
}));

// Mock prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    athlete: {
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    socialLink: {
      deleteMany: vi.fn(),
      upsert: vi.fn(),
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

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const mockAuth = auth as unknown as ReturnType<typeof vi.fn>;
const mockPrisma = prisma as unknown as {
  athlete: {
    findUnique: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  socialLink: {
    deleteMany: ReturnType<typeof vi.fn>;
    upsert: ReturnType<typeof vi.fn>;
  };
};

const mockAthleteProfile = {
  id: 'athlete-123',
  userId: 'user-123',
  sport: 'Basketball',
  position: 'Point Guard',
  bio: 'Test bio',
  school: 'Test University',
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

describe('GET /api/athletes/me', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns athlete profile for authenticated user', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });
    mockPrisma.athlete.findUnique.mockResolvedValue(mockAthleteProfile);

    const request = new NextRequest('http://localhost/api/athletes/me');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.id).toBe('athlete-123');
    expect(data.sport).toBe('Basketball');
    expect(data.user.name).toBe('John Doe');
  });

  it('returns 401 when not authenticated', async () => {
    mockAuth.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/athletes/me');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('returns 401 when session has no user id', async () => {
    mockAuth.mockResolvedValue({
      user: {}, // Missing id
    });

    const request = new NextRequest('http://localhost/api/athletes/me');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('returns 404 when athlete profile not found', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });
    mockPrisma.athlete.findUnique.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/athletes/me');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.error).toBe('Athlete profile not found');
  });
});

describe('PATCH /api/athletes/me', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function createPatchRequest(body: unknown) {
    return createPatchReq('http://localhost/api/athletes/me', body);
  }

  it('updates existing athlete profile', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });
    mockPrisma.athlete.findUnique.mockResolvedValue(mockAthleteProfile);
    mockPrisma.athlete.update.mockResolvedValue({
      ...mockAthleteProfile,
      bio: 'Updated bio',
      school: 'New University',
    });
    mockPrisma.athlete.findUnique.mockResolvedValueOnce(mockAthleteProfile).mockResolvedValueOnce({
      ...mockAthleteProfile,
      bio: 'Updated bio',
      school: 'New University',
      socialLinks: [],
    });

    const request = createPatchRequest({
      bio: 'Updated bio',
      school: 'New University',
    });

    const response = await PATCH(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.bio).toBe('Updated bio');
    expect(data.school).toBe('New University');
    expect(mockPrisma.athlete.update).toHaveBeenCalledWith({
      where: { userId: 'user-123' },
      data: expect.objectContaining({
        bio: 'Updated bio',
        school: 'New University',
      }),
    });
  });

  it('creates athlete profile if it does not exist', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-456', role: 'ATHLETE' },
    });
    mockPrisma.athlete.findUnique.mockResolvedValueOnce(null).mockResolvedValueOnce({
      id: 'new-athlete-123',
      userId: 'user-456',
      sport: 'Football',
      socialLinks: [],
      user: {
        id: 'user-456',
        name: 'Jane Doe',
        email: 'jane@example.com',
        image: null,
      },
      performanceStats: [],
      videos: [],
      ratings: [],
    });
    mockPrisma.athlete.create.mockResolvedValue({
      id: 'new-athlete-123',
      userId: 'user-456',
      sport: 'Football',
      user: {
        id: 'user-456',
        name: 'Jane Doe',
        email: 'jane@example.com',
        image: null,
      },
      performanceStats: [],
      videos: [],
      socialLinks: [],
      ratings: [],
    });

    const request = createPatchRequest({
      sport: 'Football',
    });

    const response = await PATCH(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.sport).toBe('Football');
    expect(mockPrisma.athlete.create).toHaveBeenCalled();
  });

  it('persists social links separately from athlete fields', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });
    mockPrisma.athlete.findUnique.mockResolvedValueOnce(mockAthleteProfile).mockResolvedValueOnce({
      ...mockAthleteProfile,
      socialLinks: [
        {
          id: 'sl-1',
          athleteId: 'athlete-123',
          platform: 'Instagram',
          url: 'https://instagram.com/john',
          followers: null,
        },
      ],
    });

    const request = createPatchRequest({
      instagram: 'https://instagram.com/john',
      graduationYear: 2028,
    });

    const response = await PATCH(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(mockPrisma.athlete.update).toHaveBeenCalledWith({
      where: { userId: 'user-123' },
      data: expect.objectContaining({
        classYear: 2028,
      }),
    });
    expect(mockPrisma.socialLink.upsert).toHaveBeenCalledWith({
      where: {
        athleteId_platform: {
          athleteId: 'athlete-123',
          platform: 'Instagram',
        },
      },
      update: {
        url: 'https://instagram.com/john',
      },
      create: {
        athleteId: 'athlete-123',
        platform: 'Instagram',
        url: 'https://instagram.com/john',
      },
    });
    expect(data.socialLinks).toHaveLength(1);
  });

  it('returns 401 when not authenticated', async () => {
    mockAuth.mockResolvedValue(null);

    const request = createPatchRequest({
      bio: 'Updated bio',
    });

    const response = await PATCH(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('updates partial fields only', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });
    mockPrisma.athlete.findUnique.mockResolvedValueOnce(mockAthleteProfile).mockResolvedValueOnce({
      ...mockAthleteProfile,
      gpa: 3.8,
      socialLinks: [],
    });
    mockPrisma.athlete.update.mockResolvedValue({
      ...mockAthleteProfile,
      gpa: 3.8,
    });

    const request = createPatchRequest({
      gpa: 3.8,
    });

    const response = await PATCH(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.gpa).toBe(3.8);
  });

  it('returns 403 for non-athlete users', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'COACH' },
    });

    const request = createPatchRequest({
      bio: 'Updated bio',
    });

    const response = await PATCH(request);
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.error).toBe('Only athletes can update athlete profiles');
  });
});
