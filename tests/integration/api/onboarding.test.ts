import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/api/onboarding/complete/route';
import { createPostRequest } from '../../utils/request-helpers';

// Mock auth
vi.mock('@/lib/auth', () => ({
  auth: vi.fn(),
}));

// Mock prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      update: vi.fn(),
    },
    athlete: {
      upsert: vi.fn(),
    },
    coach: {
      upsert: vi.fn(),
    },
    brand: {
      upsert: vi.fn(),
    },
  },
}));

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const mockAuth = auth as unknown as ReturnType<typeof vi.fn>;
const mockPrisma = prisma as unknown as {
  user: { update: ReturnType<typeof vi.fn> };
  athlete: { upsert: ReturnType<typeof vi.fn> };
  coach: { upsert: ReturnType<typeof vi.fn> };
  brand: { upsert: ReturnType<typeof vi.fn> };
};

function createRequest(body: unknown) {
  return createPostRequest('http://localhost/api/onboarding/complete', body);
}

describe('POST /api/onboarding/complete', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('completes onboarding for ATHLETE user', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });
    mockPrisma.user.update.mockResolvedValue({});
    mockPrisma.athlete.upsert.mockResolvedValue({});

    const request = createRequest({
      firstName: 'John',
      sport: 'Basketball',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(mockPrisma.user.update).toHaveBeenCalledWith({
      where: { id: 'user-123' },
      data: { name: 'John' },
    });
    expect(mockPrisma.athlete.upsert).toHaveBeenCalledWith({
      where: { userId: 'user-123' },
      update: { sport: 'Basketball' },
      create: {
        userId: 'user-123',
        sport: 'Basketball',
      },
    });
  });

  it('completes onboarding for COACH user', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-456', role: 'COACH' },
    });
    mockPrisma.user.update.mockResolvedValue({});
    mockPrisma.coach.upsert.mockResolvedValue({});

    const request = createRequest({
      firstName: 'Coach Smith',
      sport: 'Football',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(mockPrisma.coach.upsert).toHaveBeenCalledWith({
      where: { userId: 'user-456' },
      update: {},
      create: {
        userId: 'user-456',
        sport: 'Football',
      },
    });
  });

  it('completes onboarding for BRAND user', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-789', role: 'BRAND' },
    });
    mockPrisma.user.update.mockResolvedValue({});
    mockPrisma.brand.upsert.mockResolvedValue({});

    const request = createRequest({
      firstName: 'Nike Corp',
      sport: 'All Sports',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(mockPrisma.brand.upsert).toHaveBeenCalledWith({
      where: { userId: 'user-789' },
      update: {},
      create: {
        userId: 'user-789',
        companyName: 'Nike Corp',
      },
    });
  });

  it('returns 401 when not authenticated', async () => {
    mockAuth.mockResolvedValue(null);

    const request = createRequest({
      firstName: 'John',
      sport: 'Basketball',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('returns 401 when session has no user id', async () => {
    mockAuth.mockResolvedValue({
      user: { role: 'ATHLETE' }, // Missing id
    });

    const request = createRequest({
      firstName: 'John',
      sport: 'Basketball',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('returns 400 when firstName is missing', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });

    const request = createRequest({
      sport: 'Basketball',
      // firstName missing
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toMatch(/required|firstName/i);
  });

  it('returns 400 when sport is missing', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });

    const request = createRequest({
      firstName: 'John',
      // sport missing
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toMatch(/required|sport/i);
  });

  it('returns 400 for empty firstName', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });

    const request = createRequest({
      firstName: '',
      sport: 'Basketball',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('First name is required');
  });

  it('returns 400 for empty sport', async () => {
    mockAuth.mockResolvedValue({
      user: { id: 'user-123', role: 'ATHLETE' },
    });

    const request = createRequest({
      firstName: 'John',
      sport: '',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Sport selection is required');
  });
});
