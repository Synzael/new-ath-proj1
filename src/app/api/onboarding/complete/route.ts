import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const onboardingSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  sport: z.string().min(1, 'Sport selection is required'),
});

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { firstName, sport } = onboardingSchema.parse(body);

    // Update user name
    await prisma.user.update({
      where: { id: session.user.id },
      data: { name: firstName },
    });

    // If user is an athlete, create/update athlete profile with sport
    if (session.user.role === 'ATHLETE') {
      await prisma.athlete.upsert({
        where: { userId: session.user.id },
        update: { sport },
        create: {
          userId: session.user.id,
          sport,
        },
      });
    }

    // If user is a coach, create coach profile if doesn't exist
    if (session.user.role === 'COACH') {
      await prisma.coach.upsert({
        where: { userId: session.user.id },
        update: {},
        create: {
          userId: session.user.id,
          sport, // Use selected sport as coaching specialty
        },
      });
    }

    // If user is a brand, create brand profile if doesn't exist
    if (session.user.role === 'BRAND') {
      await prisma.brand.upsert({
        where: { userId: session.user.id },
        update: {},
        create: {
          userId: session.user.id,
          companyName: firstName, // Use firstName as company name initially
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error('Onboarding error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
