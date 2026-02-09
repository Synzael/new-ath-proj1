import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, POST } from '@/app/api/athletes/route';
import { NextRequest } from 'next/server';
import { createPostRequest } from '../../utils/request-helpers';

vi.mock('@/services/athlete.service', () => ({
  getAthletes: vi.fn(),
  createAthlete: vi.fn(),
}));

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

import { getAthletes, createAthlete } from '@/services/athlete.service';
import { getCurrentUser } from '@/lib/auth';

const mockGetAthletes = getAthletes as unknown as ReturnType<typeof vi.fn>;
const mockCreateAthlete = createAthlete as unknown as ReturnType<typeof vi.fn>;
const mockGetCurrentUser = getCurrentUser as unknown as ReturnType<typeof vi.fn>;

describe('GET /api/athletes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns athletes list with default params', async () => {
    mockGetAthletes.mockResolvedValue({
      data: [{ id: 'a1', name: 'John' }],
      total: 1,
      page: 1,
      pageSize: 20,
      totalPages: 1,
    });

    const request = new NextRequest('http://localhost/api/athletes');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.data).toHaveLength(1);
    expect(mockGetAthletes).toHaveBeenCalledWith(
      expect.objectContaining({}),
      1,
      20
    );
  });

  it('passes query params as filters', async () => {
    mockGetAthletes.mockResolvedValue({ data: [], total: 0, page: 1, pageSize: 20, totalPages: 0 });

    const request = new NextRequest(
      'http://localhost/api/athletes?sport=Basketball&state=CA&page=2&pageSize=10'
    );
    const response = await GET(request);

    expect(response.status).toBe(200);
    expect(mockGetAthletes).toHaveBeenCalledWith(
      expect.objectContaining({ sport: 'Basketball', state: 'CA' }),
      2,
      10
    );
  });

  it('returns 500 on service error', async () => {
    mockGetAthletes.mockRejectedValue(new Error('DB error'));

    const request = new NextRequest('http://localhost/api/athletes');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to fetch athletes');
  });
});

describe('POST /api/athletes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('creates athlete for authenticated ATHLETE user', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'user-1', role: 'ATHLETE' });
    mockCreateAthlete.mockResolvedValue({
      id: 'new-a1',
      userId: 'user-1',
      sport: 'Basketball',
    });

    const request = createPostRequest('http://localhost/api/athletes', {
      sport: 'Basketball',
      position: 'Guard',
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.sport).toBe('Basketball');
  });

  it('returns 401 when not authenticated', async () => {
    mockGetCurrentUser.mockResolvedValue(null);

    const request = createPostRequest('http://localhost/api/athletes', {
      sport: 'Basketball',
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('returns 403 for non-ATHLETE users', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'user-1', role: 'COACH' });

    const request = createPostRequest('http://localhost/api/athletes', {
      sport: 'Basketball',
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.error).toBe('Only athletes can create athlete profiles');
  });

  it('returns 400 for missing sport field', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'user-1', role: 'ATHLETE' });

    const request = createPostRequest('http://localhost/api/athletes', {
      position: 'Guard',
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBeDefined();
  });
});
