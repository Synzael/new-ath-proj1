import { NextRequest, NextResponse } from 'next/server';
import { getAthleteRating, calculateAndStoreRating } from '@/services/rating.service';
import { getCurrentUser } from '@/lib/auth';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rating = await getAthleteRating(id);

    if (!rating) {
      return NextResponse.json(
        { error: 'No rating found for this athlete' },
        { status: 404 }
      );
    }

    return NextResponse.json(rating);
  } catch (error) {
    console.error('Error fetching rating:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rating' },
      { status: 500 }
    );
  }
}

export async function POST(
  _request: NextRequest,
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

    // Only admins can manually trigger rating recalculation
    if (user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const rating = await calculateAndStoreRating(id);

    return NextResponse.json(rating);
  } catch (error) {
    console.error('Error calculating rating:', error);
    return NextResponse.json(
      { error: 'Failed to calculate rating' },
      { status: 500 }
    );
  }
}
