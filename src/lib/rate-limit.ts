import { LRUCache } from "lru-cache";

export interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  uniqueTokenPerInterval: number; // Max number of unique tokens per interval
}

export interface RateLimiter {
  check: (limit: number, token: string) => Promise<void>;
}

export function rateLimit(config: RateLimitConfig): RateLimiter {
  const tokenCache = new LRUCache<string, number[]>({
    max: config.uniqueTokenPerInterval,
    ttl: config.interval,
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const now = Date.now();
        const windowStart = now - config.interval;

        // Get existing requests for this token
        const tokenRequests = tokenCache.get(token) || [];

        // Filter to only requests within the current window
        const requestsInWindow = tokenRequests.filter(
          (timestamp) => timestamp > windowStart
        );

        // Check if limit exceeded
        if (requestsInWindow.length >= limit) {
          const oldestRequest = requestsInWindow[0];
          const retryAfter = Math.ceil(
            (oldestRequest + config.interval - now) / 1000
          );

          reject(
            new RateLimitError(
              `Rate limit exceeded. Try again in ${retryAfter} seconds.`,
              retryAfter
            )
          );
          return;
        }

        // Add current request
        requestsInWindow.push(now);
        tokenCache.set(token, requestsInWindow);

        resolve();
      }),
  };
}

export class RateLimitError extends Error {
  retryAfter: number;

  constructor(message: string, retryAfter: number) {
    super(message);
    this.name = "RateLimitError";
    this.retryAfter = retryAfter;
  }
}

// Pre-configured rate limiters
export const authRateLimiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export const apiRateLimiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 1000,
});

export const voteRateLimiter = rateLimit({
  interval: 60 * 60 * 1000, // 1 hour
  uniqueTokenPerInterval: 500,
});

// Helper to get client IP from headers
export function getClientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown"
  );
}

// Response helper for rate limit errors
export function rateLimitResponse(error: RateLimitError): Response {
  return new Response(
    JSON.stringify({
      error: error.message,
      retryAfter: error.retryAfter,
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(error.retryAfter),
      },
    }
  );
}
