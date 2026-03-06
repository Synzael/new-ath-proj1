import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import {
  athleteOnboardingSchema,
  brandOnboardingSchema,
  coachOnboardingSchema,
} from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    if (session.user.role === 'ATHLETE') {
      const validatedData = athleteOnboardingSchema.parse(body);

      await prisma.user.update({
        where: { id: session.user.id },
        data: { name: validatedData.name },
      });

      await prisma.athlete.upsert({
        where: { userId: session.user.id },
        update: {
          bio: validatedData.bio,
          sport: validatedData.sport,
          position: validatedData.position,
          school: validatedData.school,
          classYear: validatedData.graduationYear,
          city: validatedData.city,
          state: validatedData.state,
        },
        create: {
          userId: session.user.id,
          bio: validatedData.bio,
          sport: validatedData.sport,
          position: validatedData.position,
          school: validatedData.school,
          classYear: validatedData.graduationYear,
          city: validatedData.city,
          state: validatedData.state,
        },
      });

      return NextResponse.json({ success: true });
    }

    if (session.user.role === 'COACH') {
      const validatedData = coachOnboardingSchema.parse(body);

      await prisma.user.update({
        where: { id: session.user.id },
        data: { name: validatedData.name },
      });

      await prisma.coach.upsert({
        where: { userId: session.user.id },
        update: {
          school: validatedData.organization,
          sport: validatedData.sport,
          position: validatedData.roleTitle,
          bio: validatedData.bio,
        },
        create: {
          userId: session.user.id,
          school: validatedData.organization,
          sport: validatedData.sport,
          position: validatedData.roleTitle,
          bio: validatedData.bio,
        },
      });

      return NextResponse.json({ success: true });
    }

    if (session.user.role === 'BRAND') {
      const validatedData = brandOnboardingSchema.parse(body);

      await prisma.user.update({
        where: { id: session.user.id },
        data: { name: validatedData.name },
      });

      await prisma.brand.upsert({
        where: { userId: session.user.id },
        update: {
          companyName: validatedData.companyName,
          website: validatedData.website,
          description: validatedData.description,
        },
        create: {
          userId: session.user.id,
          companyName: validatedData.companyName,
          website: validatedData.website,
          description: validatedData.description,
        },
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Unsupported role' }, { status: 400 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }

    console.error('Onboarding error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
