import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getAthleteById, updateAthlete } from '@/services/athlete.service';
import { getCurrentUser } from '@/lib/auth';

const updateAthleteSchema = z.object({
  sport: z.string().optional(),
  position: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
  school: z.string().nullable().optional(),
  classYear: z.number().int().min(2020).max(2035).nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  height: z.number().positive().nullable().optional(),
  weight: z.number().positive().nullable().optional(),
  gpa: z.number().min(0).max(4.5).nullable().optional(),
  satScore: z.number().min(400).max(1600).nullable().optional(),
  actScore: z.number().min(1).max(36).nullable().optional(),
});

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const athlete = await getAthleteById(id);

    if (!athlete) {
      return NextResponse.json(
        { error: 'Athlete not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(athlete);
  } catch (error) {
    console.error('Error fetching athlete:', error);
    return NextResponse.json(
      { error: 'Failed to fetch athlete' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get athlete to check ownership
    const athlete = await getAthleteById(id);

    if (!athlete) {
      return NextResponse.json(
        { error: 'Athlete not found' },
        { status: 404 }
      );
    }

    // Check if user owns this profile or is admin
    if (athlete.userId !== user.id && user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const validatedData = updateAthleteSchema.parse(body);

    const updatedAthlete = await updateAthlete(id, validatedData);

    return NextResponse.json(updatedAthlete);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error('Error updating athlete:', error);
    return NextResponse.json(
      { error: 'Failed to update athlete' },
      { status: 500 }
    );
  }
}
