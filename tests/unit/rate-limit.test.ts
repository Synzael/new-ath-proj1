import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  rateLimit,
  RateLimitError,
  getClientIp,
  rateLimitResponse,
} from '@/lib/rate-limit';

describe('Rate Limit', () => {
  describe('rateLimit', () => {
    it('allows requests under the limit', async () => {
      const limiter = rateLimit({ interval: 60000, uniqueTokenPerInterval: 100 });
      await expect(limiter.check(5, 'token-1')).resolves.toBeUndefined();
    });

    it('allows multiple requests under the limit', async () => {
      const limiter = rateLimit({ interval: 60000, uniqueTokenPerInterval: 100 });
      await limiter.check(3, 'token-1');
      await limiter.check(3, 'token-1');
      await expect(limiter.check(3, 'token-1')).resolves.toBeUndefined();
    });

    it('rejects when limit is exceeded', async () => {
      const limiter = rateLimit({ interval: 60000, uniqueTokenPerInterval: 100 });
      await limiter.check(2, 'token-1');
      await limiter.check(2, 'token-1');
      await expect(limiter.check(2, 'token-1')).rejects.toThrow(RateLimitError);
    });

    it('includes retryAfter in error', async () => {
      const limiter = rateLimit({ interval: 60000, uniqueTokenPerInterval: 100 });
      await limiter.check(1, 'token-1');
      try {
        await limiter.check(1, 'token-1');
      } catch (error) {
        expect(error).toBeInstanceOf(RateLimitError);
        expect((error as RateLimitError).retryAfter).toBeGreaterThan(0);
      }
    });

    it('tracks different tokens separately', async () => {
      const limiter = rateLimit({ interval: 60000, uniqueTokenPerInterval: 100 });
      await limiter.check(1, 'token-a');
      await expect(limiter.check(1, 'token-b')).resolves.toBeUndefined();
    });
  });

  describe('RateLimitError', () => {
    it('has correct properties', () => {
      const error = new RateLimitError('Rate limit exceeded', 30);
      expect(error.message).toBe('Rate limit exceeded');
      expect(error.name).toBe('RateLimitError');
      expect(error.retryAfter).toBe(30);
      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('getClientIp', () => {
    it('returns x-forwarded-for first IP', () => {
      const headers = new Headers();
      headers.set('x-forwarded-for', '1.2.3.4, 5.6.7.8');
      expect(getClientIp(headers)).toBe('1.2.3.4');
    });

    it('returns x-real-ip when no x-forwarded-for', () => {
      const headers = new Headers();
      headers.set('x-real-ip', '10.0.0.1');
      expect(getClientIp(headers)).toBe('10.0.0.1');
    });

    it('returns unknown when no IP headers', () => {
      const headers = new Headers();
      expect(getClientIp(headers)).toBe('unknown');
    });
  });

  describe('rateLimitResponse', () => {
    it('returns 429 response with correct headers', async () => {
      const error = new RateLimitError('Rate limit exceeded. Try again in 30 seconds.', 30);
      const response = rateLimitResponse(error);

      expect(response.status).toBe(429);
      expect(response.headers.get('Retry-After')).toBe('30');
      expect(response.headers.get('Content-Type')).toBe('application/json');

      const body = await response.json();
      expect(body.error).toContain('Rate limit exceeded');
      expect(body.retryAfter).toBe(30);
    });
  });

  describe('pre-configured rate limiters', () => {
    it('exports authRateLimiter', async () => {
      const { authRateLimiter } = await import('@/lib/rate-limit');
      expect(authRateLimiter).toBeDefined();
      expect(authRateLimiter.check).toBeInstanceOf(Function);
    });

    it('exports apiRateLimiter', async () => {
      const { apiRateLimiter } = await import('@/lib/rate-limit');
      expect(apiRateLimiter).toBeDefined();
      expect(apiRateLimiter.check).toBeInstanceOf(Function);
    });

    it('exports voteRateLimiter', async () => {
      const { voteRateLimiter } = await import('@/lib/rate-limit');
      expect(voteRateLimiter).toBeDefined();
      expect(voteRateLimiter.check).toBeInstanceOf(Function);
    });
  });
});
