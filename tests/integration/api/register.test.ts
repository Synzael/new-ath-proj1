import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/api/auth/register/route';
import { NextRequest } from 'next/server';

// Mock prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
  },
}));

// Mock auth (hashPassword)
vi.mock('@/lib/auth', () => ({
  hashPassword: vi.fn().mockResolvedValue('hashed_password_123'),
}));

import { prisma } from '@/lib/prisma';

const mockPrisma = prisma as unknown as {
  user: {
    findUnique: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
  };
};

function createRequest(body: unknown) {
  return new NextRequest('http://localhost/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/auth/register', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('creates user with valid data', async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);
    mockPrisma.user.create.mockResolvedValue({
      id: 'user-123',
      name: 'Test User',
      email: 'test@example.com',
      role: 'ATHLETE',
    });

    const request = createRequest({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'ATHLETE',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data).toEqual({
      id: 'user-123',
      name: 'Test User',
      email: 'test@example.com',
      role: 'ATHLETE',
    });
    expect(mockPrisma.user.create).toHaveBeenCalledWith({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        password: 'hashed_password_123',
        role: 'ATHLETE',
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  });

  it('returns 400 for duplicate email', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({
      id: 'existing-user',
      email: 'test@example.com',
    });

    const request = createRequest({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'ATHLETE',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('User with this email already exists');
    expect(mockPrisma.user.create).not.toHaveBeenCalled();
  });

  it('returns 400 for invalid email format', async () => {
    const request = createRequest({
      name: 'Test User',
      email: 'invalid-email',
      password: 'password123',
      role: 'ATHLETE',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid email address');
  });

  it('returns 400 for short password', async () => {
    const request = createRequest({
      name: 'Test User',
      email: 'test@example.com',
      password: '1234567', // 7 chars, needs 8
      role: 'ATHLETE',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Password must be at least 8 characters');
  });

  it('returns 400 for short name', async () => {
    const request = createRequest({
      name: 'A', // 1 char, needs 2
      email: 'test@example.com',
      password: 'password123',
      role: 'ATHLETE',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Name must be at least 2 characters');
  });

  it('returns 400 for invalid role', async () => {
    const request = createRequest({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'INVALID_ROLE',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBeDefined();
  });

  it('returns 400 for missing required fields', async () => {
    const request = createRequest({
      name: 'Test User',
      // missing email, password, role
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBeDefined();
  });

  it('creates COACH user successfully', async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);
    mockPrisma.user.create.mockResolvedValue({
      id: 'coach-123',
      name: 'Coach Smith',
      email: 'coach@example.com',
      role: 'COACH',
    });

    const request = createRequest({
      name: 'Coach Smith',
      email: 'coach@example.com',
      password: 'password123',
      role: 'COACH',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.role).toBe('COACH');
  });

  it('creates BRAND user successfully', async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);
    mockPrisma.user.create.mockResolvedValue({
      id: 'brand-123',
      name: 'Nike Brand',
      email: 'brand@example.com',
      role: 'BRAND',
    });

    const request = createRequest({
      name: 'Nike Brand',
      email: 'brand@example.com',
      password: 'password123',
      role: 'BRAND',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.role).toBe('BRAND');
  });
});
