import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getAthletes, createAthlete } from '@/services/athlete.service';
import { getCurrentUser } from '@/lib/auth';

const createAthleteSchema = z.object({
  sport: z.string().min(1, 'Sport is required'),
  position: z.string().optional(),
  bio: z.string().optional(),
  school: z.string().optional(),
  classYear: z.number().int().min(2020).max(2035).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  height: z.number().positive().optional(),
  weight: z.number().positive().optional(),
  gpa: z.number().min(0).max(4.5).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const filters = {
      sport: searchParams.get('sport') || undefined,
      position: searchParams.get('position') || undefined,
      state: searchParams.get('state') || undefined,
      classYear: searchParams.get('classYear')
        ? parseInt(searchParams.get('classYear')!)
        : undefined,
      search: searchParams.get('search') || undefined,
    };

    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    const result = await getAthletes(filters, page, pageSize);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching athletes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch athletes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (user.role !== 'ATHLETE') {
      return NextResponse.json(
        { error: 'Only athletes can create athlete profiles' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const validatedData = createAthleteSchema.parse(body);

    const athlete = await createAthlete(user.id, validatedData);

    return NextResponse.json(athlete, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error('Error creating athlete:', error);
    return NextResponse.json(
      { error: 'Failed to create athlete profile' },
      { status: 500 }
    );
  }
}
