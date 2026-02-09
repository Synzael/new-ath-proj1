import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  createCache,
  getCached,
  setCached,
  invalidateCache,
  invalidateCachePattern,
  withCache,
} from '@/lib/cache';

describe('Cache', () => {
  describe('createCache', () => {
    it('creates a cache with default options', () => {
      const cache = createCache();
      expect(cache).toBeDefined();
      expect(cache.max).toBe(500);
    });

    it('creates a cache with custom options', () => {
      const cache = createCache({ max: 100, ttl: 1000 });
      expect(cache).toBeDefined();
      expect(cache.max).toBe(100);
    });
  });

  describe('getCached / setCached', () => {
    it('returns undefined for missing key', () => {
      const cache = createCache<{ value: string }>();
      expect(getCached(cache, 'missing')).toBeUndefined();
    });

    it('sets and gets a cached value', () => {
      const cache = createCache<{ value: string }>();
      const data = { value: 'hello' };
      setCached(cache, 'key1', data);
      expect(getCached(cache, 'key1')).toEqual(data);
    });
  });

  describe('invalidateCache', () => {
    it('removes a single key from cache', () => {
      const cache = createCache<{ value: string }>();
      setCached(cache, 'key1', { value: 'a' });
      setCached(cache, 'key2', { value: 'b' });

      invalidateCache(cache, 'key1');

      expect(getCached(cache, 'key1')).toBeUndefined();
      expect(getCached(cache, 'key2')).toEqual({ value: 'b' });
    });
  });

  describe('invalidateCachePattern', () => {
    it('removes keys matching a regex pattern', () => {
      const cache = createCache<{ value: string }>();
      setCached(cache, 'athlete:1', { value: 'a' });
      setCached(cache, 'athlete:2', { value: 'b' });
      setCached(cache, 'rating:1', { value: 'c' });

      invalidateCachePattern(cache, '^athlete:');

      expect(getCached(cache, 'athlete:1')).toBeUndefined();
      expect(getCached(cache, 'athlete:2')).toBeUndefined();
      expect(getCached(cache, 'rating:1')).toEqual({ value: 'c' });
    });

    it('does nothing when no keys match', () => {
      const cache = createCache<{ value: string }>();
      setCached(cache, 'key1', { value: 'a' });

      invalidateCachePattern(cache, '^nope');

      expect(getCached(cache, 'key1')).toEqual({ value: 'a' });
    });
  });

  describe('withCache', () => {
    it('caches function result on first call', async () => {
      const cache = createCache();
      const fn = vi.fn().mockResolvedValue({ data: 'result' });
      const keyFn = (id: string) => `key:${id}`;

      const cached = withCache(cache, keyFn, fn);
      const result = await cached('123');

      expect(result).toEqual({ data: 'result' });
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('returns cached result on subsequent calls', async () => {
      const cache = createCache();
      const fn = vi.fn().mockResolvedValue({ data: 'result' });
      const keyFn = (id: string) => `key:${id}`;

      const cached = withCache(cache, keyFn, fn);
      await cached('123');
      const result = await cached('123');

      expect(result).toEqual({ data: 'result' });
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('calls function again for different keys', async () => {
      const cache = createCache();
      const fn = vi.fn()
        .mockResolvedValueOnce({ data: 'a' })
        .mockResolvedValueOnce({ data: 'b' });
      const keyFn = (id: string) => `key:${id}`;

      const cached = withCache(cache, keyFn, fn);
      const result1 = await cached('1');
      const result2 = await cached('2');

      expect(result1).toEqual({ data: 'a' });
      expect(result2).toEqual({ data: 'b' });
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });
});
