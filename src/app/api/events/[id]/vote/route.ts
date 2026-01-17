import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';
import crypto from 'crypto';

const voteSchema = z.object({
  matchupId: z.string(),
  choice: z.number().min(1).max(2),
});

// Generate anonymous voter ID from IP or session
async function getVoterId(): Promise<string> {
  const headersList = await headers();
  const forwarded = headersList.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

  // Hash the IP for privacy
  return crypto.createHash('sha256').update(ip).digest('hex').substring(0, 16);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: eventId } = await params;
    const body = await request.json();
    const { matchupId, choice } = voteSchema.parse(body);

    // Verify the matchup belongs to this event and voting is open
    const matchup = await prisma.matchup.findFirst({
      where: {
        id: matchupId,
        bracket: {
          eventId,
        },
        votingOpen: true,
      },
    });

    if (!matchup) {
      return NextResponse.json(
        { error: 'Matchup not found or voting is closed' },
        { status: 404 }
      );
    }

    // Check if voting deadline passed
    if (matchup.votingEndsAt && new Date() > matchup.votingEndsAt) {
      return NextResponse.json(
        { error: 'Voting has ended for this matchup' },
        { status: 400 }
      );
    }

    const voterId = await getVoterId();

    // Check if user already voted
    const existingVote = await prisma.vote.findUnique({
      where: {
        matchupId_voterId: {
          matchupId,
          voterId,
        },
      },
    });

    if (existingVote) {
      return NextResponse.json(
        { error: 'You have already voted in this matchup' },
        { status: 400 }
      );
    }

    // Create vote and update counts atomically
    const [vote] = await prisma.$transaction([
      prisma.vote.create({
        data: {
          matchupId,
          voterId,
          choice,
        },
      }),
      prisma.matchup.update({
        where: { id: matchupId },
        data: {
          athlete1Votes: choice === 1 ? { increment: 1 } : undefined,
          athlete2Votes: choice === 2 ? { increment: 1 } : undefined,
        },
      }),
    ]);

    return NextResponse.json({ success: true, voteId: vote.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error('Error recording vote:', error);
    return NextResponse.json(
      { error: 'Failed to record vote' },
      { status: 500 }
    );
  }
}
