import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from '@/app/api/auth/verify/route';
import { NextRequest } from 'next/server';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    verificationToken: {
      findUnique: vi.fn(),
      delete: vi.fn(),
    },
    user: { update: vi.fn() },
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
  verificationToken: {
    findUnique: ReturnType<typeof vi.fn>;
    delete: ReturnType<typeof vi.fn>;
  };
  user: { update: ReturnType<typeof vi.fn> };
};
const mockRateLimiter = authRateLimiter as unknown as { check: ReturnType<typeof vi.fn> };

describe('GET /api/auth/verify', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockRateLimiter.check.mockResolvedValue(undefined);
  });

  it('redirects to login with success on valid token', async () => {
    mockPrisma.verificationToken.findUnique.mockResolvedValue({
      token: 'valid-token',
      identifier: 'test@example.com',
      expires: new Date(Date.now() + 86400000),
    });
    mockPrisma.user.update.mockResolvedValue({});
    mockPrisma.verificationToken.delete.mockResolvedValue({});

    const request = new NextRequest('http://localhost/api/auth/verify?token=valid-token');
    const response = await GET(request);

    expect(response.status).toBe(307);
    const location = response.headers.get('location');
    expect(location).toContain('/login?verified=true');
  });

  it('redirects with missing-token error when no token', async () => {
    const request = new NextRequest('http://localhost/api/auth/verify');
    const response = await GET(request);

    expect(response.status).toBe(307);
    const location = response.headers.get('location');
    expect(location).toContain('error=missing-token');
  });

  it('redirects with invalid-token error for unknown token', async () => {
    mockPrisma.verificationToken.findUnique.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/auth/verify?token=bad-token');
    const response = await GET(request);

    expect(response.status).toBe(307);
    const location = response.headers.get('location');
    expect(location).toContain('error=invalid-token');
  });

  it('redirects with expired-token error for expired token', async () => {
    mockPrisma.verificationToken.findUnique.mockResolvedValue({
      token: 'expired-token',
      identifier: 'test@example.com',
      expires: new Date(Date.now() - 86400000),
    });
    mockPrisma.verificationToken.delete.mockResolvedValue({});

    const request = new NextRequest('http://localhost/api/auth/verify?token=expired-token');
    const response = await GET(request);

    expect(response.status).toBe(307);
    const location = response.headers.get('location');
    expect(location).toContain('error=expired-token');
  });

  it('returns 429 when rate limited', async () => {
    mockRateLimiter.check.mockRejectedValue(
      new RateLimitError('Rate limit exceeded', 30)
    );

    const request = new NextRequest('http://localhost/api/auth/verify?token=valid-token');
    const response = await GET(request);

    expect(response.status).toBe(429);
  });

  it('redirects with verification-failed on unexpected error', async () => {
    mockPrisma.verificationToken.findUnique.mockRejectedValue(new Error('DB down'));

    const request = new NextRequest('http://localhost/api/auth/verify?token=valid-token');
    const response = await GET(request);

    expect(response.status).toBe(307);
    const location = response.headers.get('location');
    expect(location).toContain('error=verification-failed');
  });
});
