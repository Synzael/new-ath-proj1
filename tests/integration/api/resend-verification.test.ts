import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/api/auth/resend-verification/route';
import { NextRequest } from 'next/server';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: vi.fn() },
    verificationToken: {
      deleteMany: vi.fn(),
      create: vi.fn(),
    },
  },
}));

vi.mock('@/lib/rate-limit', () => ({
  authRateLimiter: { check: vi.fn() },
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
  RateLimitError: class RateLimitError extends Error {
    retryAfter: number;
    constructor(message: string, retryAfter: number) {
      super(message);
      this.name = 'RateLimitError';
      this.retryAfter = retryAfter;
    }
  },
  rateLimitResponse: vi.fn().mockImplementation((error: { message: string; retryAfter: number }) => {
    return new Response(JSON.stringify({ error: error.message }), { status: 429 });
  }),
}));

import { prisma } from '@/lib/prisma';
import { authRateLimiter, RateLimitError, rateLimitResponse } from '@/lib/rate-limit';

const mockPrisma = prisma as unknown as {
  user: { findUnique: ReturnType<typeof vi.fn> };
  verificationToken: {
    deleteMany: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
  };
};
const mockRateLimiter = authRateLimiter as unknown as { check: ReturnType<typeof vi.fn> };

function createRequest(body: unknown) {
  return new NextRequest('http://localhost/api/auth/resend-verification', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/auth/resend-verification', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockRateLimiter.check.mockResolvedValue(undefined);
  });

  it('returns success message for existing unverified user', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({
      id: 'u1',
      email: 'test@example.com',
      emailVerified: null,
    });
    mockPrisma.verificationToken.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.verificationToken.create.mockResolvedValue({});

    const response = await POST(createRequest({ email: 'test@example.com' }));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toContain('verification email has been sent');
  });

  it('returns same success message for non-existent user (prevent enumeration)', async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);

    const response = await POST(createRequest({ email: 'nonexistent@example.com' }));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toContain('verification email has been sent');
  });

  it('returns same success message for already verified user', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({
      id: 'u1',
      email: 'test@example.com',
      emailVerified: new Date(),
    });

    const response = await POST(createRequest({ email: 'test@example.com' }));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toContain('verification email has been sent');
  });

  it('returns 400 for invalid email', async () => {
    const response = await POST(createRequest({ email: 'not-an-email' }));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid email address');
  });

  it('returns 429 when rate limited', async () => {
    mockRateLimiter.check.mockRejectedValue(
      new RateLimitError('Rate limit exceeded', 30)
    );

    const response = await POST(createRequest({ email: 'test@example.com' }));

    expect(response.status).toBe(429);
  });

  it('returns 500 on unexpected error', async () => {
    mockPrisma.user.findUnique.mockRejectedValue(new Error('DB down'));

    const response = await POST(createRequest({ email: 'test@example.com' }));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Internal server error');
  });
});
