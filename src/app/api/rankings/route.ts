import { NextRequest, NextResponse } from 'next/server';
import { getTopAthletes } from '@/services/athlete.service';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const sport = searchParams.get('sport') || null;
    const limit = parseInt(searchParams.get('limit') || '100');

    const rankings = await getTopAthletes(sport, limit);

    return NextResponse.json({ rankings });
  } catch (error) {
    console.error('Error fetching rankings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rankings' },
      { status: 500 }
    );
  }
}
