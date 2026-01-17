import { LRUCache } from 'lru-cache';

// Cross-request LRU cache for expensive computations
// This persists across requests within the same server instance

type CacheOptions = {
  max?: number;
  ttl?: number; // milliseconds
};

const defaultOptions: CacheOptions = {
  max: 500,
  ttl: 1000 * 60 * 5, // 5 minutes
};

// Generic cache factory
export function createCache<T>(options: CacheOptions = {}) {
  return new LRUCache<string, T>({
    max: options.max ?? defaultOptions.max!,
    ttl: options.ttl ?? defaultOptions.ttl!,
  });
}

// Pre-configured caches for common use cases

// Rankings cache - updates less frequently
export const rankingsCache = createCache<unknown>({
  max: 100,
  ttl: 1000 * 60 * 10, // 10 minutes
});

// Athlete profile cache - frequently accessed
export const athleteCache = createCache<unknown>({
  max: 1000,
  ttl: 1000 * 60 * 5, // 5 minutes
});

// Rating calculations cache - expensive to compute
export const ratingCache = createCache<unknown>({
  max: 500,
  ttl: 1000 * 60 * 15, // 15 minutes
});

// Event data cache
export const eventCache = createCache<unknown>({
  max: 100,
  ttl: 1000 * 60 * 2, // 2 minutes (events update more frequently)
});

// Helper functions for cache operations
export function getCached<T>(cache: LRUCache<string, T>, key: string): T | undefined {
  return cache.get(key);
}

export function setCached<T>(cache: LRUCache<string, T>, key: string, value: T): void {
  cache.set(key, value);
}

export function invalidateCache<T>(cache: LRUCache<string, T>, key: string): void {
  cache.delete(key);
}

export function invalidateCachePattern<T>(cache: LRUCache<string, T>, pattern: string): void {
  const regex = new RegExp(pattern);
  for (const key of cache.keys()) {
    if (regex.test(key)) {
      cache.delete(key);
    }
  }
}

// Utility to wrap async functions with caching
export function withCache<T, Args extends unknown[]>(
  cache: LRUCache<string, T>,
  keyFn: (...args: Args) => string,
  fn: (...args: Args) => Promise<T>
): (...args: Args) => Promise<T> {
  return async (...args: Args): Promise<T> => {
    const key = keyFn(...args);
    const cached = cache.get(key);
    if (cached !== undefined) {
      return cached;
    }
    const result = await fn(...args);
    cache.set(key, result);
    return result;
  };
}
