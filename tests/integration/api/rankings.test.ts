import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from '@/app/api/rankings/route';
import { NextRequest } from 'next/server';

vi.mock('@/services/athlete.service', () => ({
  getTopAthletes: vi.fn(),
}));

import { getTopAthletes } from '@/services/athlete.service';

const mockGetTopAthletes = getTopAthletes as unknown as ReturnType<typeof vi.fn>;

describe('GET /api/rankings', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns rankings with default params', async () => {
    mockGetTopAthletes.mockResolvedValue([
      { rank: 1, name: 'John', overallRating: 95 },
      { rank: 2, name: 'Jane', overallRating: 90 },
    ]);

    const request = new NextRequest('http://localhost/api/rankings');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.rankings).toHaveLength(2);
    expect(mockGetTopAthletes).toHaveBeenCalledWith(null, 100);
  });

  it('passes sport and limit params', async () => {
    mockGetTopAthletes.mockResolvedValue([]);

    const request = new NextRequest('http://localhost/api/rankings?sport=Basketball&limit=50');
    const response = await GET(request);

    expect(response.status).toBe(200);
    expect(mockGetTopAthletes).toHaveBeenCalledWith('Basketball', 50);
  });

  it('returns 500 on service error', async () => {
    mockGetTopAthletes.mockRejectedValue(new Error('DB error'));

    const request = new NextRequest('http://localhost/api/rankings');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to fetch rankings');
  });
});
