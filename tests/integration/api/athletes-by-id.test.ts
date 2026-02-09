import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, PATCH } from '@/app/api/athletes/[id]/route';
import { NextRequest } from 'next/server';
import { createPatchRequest } from '../../utils/request-helpers';

vi.mock('@/services/athlete.service', () => ({
  getAthleteById: vi.fn(),
  updateAthlete: vi.fn(),
}));

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

import { getAthleteById, updateAthlete } from '@/services/athlete.service';
import { getCurrentUser } from '@/lib/auth';

const mockGetAthleteById = getAthleteById as unknown as ReturnType<typeof vi.fn>;
const mockUpdateAthlete = updateAthlete as unknown as ReturnType<typeof vi.fn>;
const mockGetCurrentUser = getCurrentUser as unknown as ReturnType<typeof vi.fn>;

const mockAthlete = {
  id: 'athlete-123',
  userId: 'user-123',
  sport: 'Basketball',
  position: 'Guard',
  bio: 'Bio text',
  user: { id: 'user-123', name: 'John', email: 'j@e.com', image: null },
};

function makeParams(id: string) {
  return { params: Promise.resolve({ id }) };
}

describe('GET /api/athletes/[id]', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns athlete when found', async () => {
    mockGetAthleteById.mockResolvedValue(mockAthlete);

    const request = new NextRequest('http://localhost/api/athletes/athlete-123');
    const response = await GET(request, makeParams('athlete-123'));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.id).toBe('athlete-123');
    expect(data.sport).toBe('Basketball');
  });

  it('returns 404 when athlete not found', async () => {
    mockGetAthleteById.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/athletes/nonexistent');
    const response = await GET(request, makeParams('nonexistent'));
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.error).toBe('Athlete not found');
  });

  it('returns 500 on service error', async () => {
    mockGetAthleteById.mockRejectedValue(new Error('DB error'));

    const request = new NextRequest('http://localhost/api/athletes/athlete-123');
    const response = await GET(request, makeParams('athlete-123'));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to fetch athlete');
  });
});

describe('PATCH /api/athletes/[id]', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('updates athlete for owner', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'user-123', role: 'ATHLETE' });
    mockGetAthleteById.mockResolvedValue(mockAthlete);
    mockUpdateAthlete.mockResolvedValue({ ...mockAthlete, bio: 'Updated' });

    const request = createPatchRequest('http://localhost/api/athletes/athlete-123', {
      bio: 'Updated',
    });
    const response = await PATCH(request, makeParams('athlete-123'));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.bio).toBe('Updated');
  });

  it('allows ADMIN to update any athlete', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'admin-1', role: 'ADMIN' });
    mockGetAthleteById.mockResolvedValue(mockAthlete);
    mockUpdateAthlete.mockResolvedValue({ ...mockAthlete, sport: 'Football' });

    const request = createPatchRequest('http://localhost/api/athletes/athlete-123', {
      sport: 'Football',
    });
    const response = await PATCH(request, makeParams('athlete-123'));

    expect(response.status).toBe(200);
  });

  it('returns 401 when not authenticated', async () => {
    mockGetCurrentUser.mockResolvedValue(null);

    const request = createPatchRequest('http://localhost/api/athletes/athlete-123', {
      bio: 'Updated',
    });
    const response = await PATCH(request, makeParams('athlete-123'));
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('Unauthorized');
  });

  it('returns 404 when athlete not found', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'user-123', role: 'ATHLETE' });
    mockGetAthleteById.mockResolvedValue(null);

    const request = createPatchRequest('http://localhost/api/athletes/nonexistent', {
      bio: 'Updated',
    });
    const response = await PATCH(request, makeParams('nonexistent'));
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.error).toBe('Athlete not found');
  });

  it('returns 403 for non-owner non-admin', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'other-user', role: 'ATHLETE' });
    mockGetAthleteById.mockResolvedValue(mockAthlete);

    const request = createPatchRequest('http://localhost/api/athletes/athlete-123', {
      bio: 'Hack',
    });
    const response = await PATCH(request, makeParams('athlete-123'));
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.error).toBe('Forbidden');
  });

  it('returns 400 for invalid data', async () => {
    mockGetCurrentUser.mockResolvedValue({ id: 'user-123', role: 'ATHLETE' });
    mockGetAthleteById.mockResolvedValue(mockAthlete);

    const request = createPatchRequest('http://localhost/api/athletes/athlete-123', {
      gpa: 5.0,
    });
    const response = await PATCH(request, makeParams('athlete-123'));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBeDefined();
  });
});
