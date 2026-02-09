import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/api/events/[id]/vote/route';
import { NextRequest } from 'next/server';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    matchup: { findFirst: vi.fn(), update: vi.fn() },
    vote: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
    $transaction: vi.fn(),
  },
}));

vi.mock('next/headers', () => ({
  headers: vi.fn().mockResolvedValue(
    new Headers({ 'x-forwarded-for': '1.2.3.4' })
  ),
}));

import { prisma } from '@/lib/prisma';

const mockPrisma = prisma as unknown as {
  matchup: { findFirst: ReturnType<typeof vi.fn> };
  vote: {
    findUnique: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
  };
  $transaction: ReturnType<typeof vi.fn>;
};

function makeParams(id: string) {
  return { params: Promise.resolve({ id }) };
}

function createRequest(body: unknown) {
  return new NextRequest('http://localhost/api/events/event-1/vote', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/events/[id]/vote', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('records a vote successfully', async () => {
    mockPrisma.matchup.findFirst.mockResolvedValue({
      id: 'matchup-1',
      votingOpen: true,
      votingEndsAt: null,
    });
    mockPrisma.vote.findUnique.mockResolvedValue(null);
    mockPrisma.$transaction.mockResolvedValue([
      { id: 'vote-1', matchupId: 'matchup-1', choice: 1 },
      {},
    ]);

    const response = await POST(
      createRequest({ matchupId: 'matchup-1', choice: 1 }),
      makeParams('event-1')
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.voteId).toBe('vote-1');
  });

  it('returns 404 when matchup not found', async () => {
    mockPrisma.matchup.findFirst.mockResolvedValue(null);

    const response = await POST(
      createRequest({ matchupId: 'nonexistent', choice: 1 }),
      makeParams('event-1')
    );
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.error).toContain('Matchup not found');
  });

  it('returns 400 when voting has ended', async () => {
    mockPrisma.matchup.findFirst.mockResolvedValue({
      id: 'matchup-1',
      votingOpen: true,
      votingEndsAt: new Date(Date.now() - 3600000),
    });

    const response = await POST(
      createRequest({ matchupId: 'matchup-1', choice: 1 }),
      makeParams('event-1')
    );
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toContain('Voting has ended');
  });

  it('returns 400 when already voted', async () => {
    mockPrisma.matchup.findFirst.mockResolvedValue({
      id: 'matchup-1',
      votingOpen: true,
      votingEndsAt: null,
    });
    mockPrisma.vote.findUnique.mockResolvedValue({ id: 'existing-vote' });

    const response = await POST(
      createRequest({ matchupId: 'matchup-1', choice: 1 }),
      makeParams('event-1')
    );
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toContain('already voted');
  });

  it('returns 400 for invalid choice', async () => {
    const response = await POST(
      createRequest({ matchupId: 'matchup-1', choice: 5 }),
      makeParams('event-1')
    );
    const data = await response.json();

    expect(response.status).toBe(400);
  });

  it('returns 400 for missing matchupId', async () => {
    const response = await POST(
      createRequest({ choice: 1 }),
      makeParams('event-1')
    );
    const data = await response.json();

    expect(response.status).toBe(400);
  });

  it('returns 500 on unexpected error', async () => {
    mockPrisma.matchup.findFirst.mockRejectedValue(new Error('DB down'));

    const response = await POST(
      createRequest({ matchupId: 'matchup-1', choice: 1 }),
      makeParams('event-1')
    );
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to record vote');
  });
});
