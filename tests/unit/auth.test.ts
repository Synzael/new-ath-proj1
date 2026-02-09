import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

vi.mock('next-auth', () => {
  const mockAuth = vi.fn();
  return {
    default: () => ({
      handlers: {},
      signIn: vi.fn(),
      signOut: vi.fn(),
      auth: mockAuth,
    }),
    __mockAuth: mockAuth,
  };
});

vi.mock('@auth/prisma-adapter', () => ({
  PrismaAdapter: vi.fn(),
}));

vi.mock('next-auth/providers/credentials', () => ({
  default: vi.fn((config) => config),
}));

vi.mock('bcryptjs', () => ({
  default: {
    compare: vi.fn(),
    hash: vi.fn(),
  },
}));

// Mock react cache to just call the function
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    cache: (fn: unknown) => fn,
  };
});

import bcrypt from 'bcryptjs';

const mockBcrypt = bcrypt as unknown as {
  compare: ReturnType<typeof vi.fn>;
  hash: ReturnType<typeof vi.fn>;
};

describe('Auth Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('hashPassword', () => {
    it('hashes password with salt rounds 12', async () => {
      mockBcrypt.hash.mockResolvedValue('$2a$12$hashedpassword');

      const { hashPassword } = await import('@/lib/auth');
      const result = await hashPassword('mypassword');

      expect(result).toBe('$2a$12$hashedpassword');
      expect(mockBcrypt.hash).toHaveBeenCalledWith('mypassword', 12);
    });
  });

  describe('verifyPassword', () => {
    it('returns true for matching passwords', async () => {
      mockBcrypt.compare.mockResolvedValue(true);

      const { verifyPassword } = await import('@/lib/auth');
      const result = await verifyPassword('mypassword', '$2a$12$hashedpassword');

      expect(result).toBe(true);
      expect(mockBcrypt.compare).toHaveBeenCalledWith('mypassword', '$2a$12$hashedpassword');
    });

    it('returns false for non-matching passwords', async () => {
      mockBcrypt.compare.mockResolvedValue(false);

      const { verifyPassword } = await import('@/lib/auth');
      const result = await verifyPassword('wrongpassword', '$2a$12$hashedpassword');

      expect(result).toBe(false);
    });
  });
});
