import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { athleteProfileSchema } from '@/lib/validations';
import { splitAthleteProfileInput } from '@/lib/athlete-profile';
import { apiRateLimiter, getClientIp, RateLimitError, rateLimitResponse } from '@/lib/rate-limit';

// GET /api/athletes/me - Get current user's athlete profile
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const athlete = await prisma.athlete.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        performanceStats: true,
        videos: true,
        socialLinks: true,
        ratings: true,
      },
    });

    if (!athlete) {
      return NextResponse.json({ error: 'Athlete profile not found' }, { status: 404 });
    }

    return NextResponse.json(athlete);
  } catch (error) {
    console.error('Error fetching athlete profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH /api/athletes/me - Update current user's athlete profile
export async function PATCH(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request.headers);
    await apiRateLimiter.check(30, clientIp);

    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'ATHLETE') {
      return NextResponse.json(
        { error: 'Only athletes can update athlete profiles' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const validatedData = athleteProfileSchema.partial().parse(body);
    const { athleteData, socialLinks } = splitAthleteProfileInput(validatedData);

    const existingAthlete = await prisma.athlete.findUnique({
      where: { userId: session.user.id },
    });

    if (!existingAthlete && !athleteData.sport) {
      return NextResponse.json(
        { error: 'Sport is required to create your athlete profile' },
        { status: 400 }
      );
    }

    let athleteId = existingAthlete?.id;

    if (!existingAthlete) {
      const createdAthlete = await prisma.athlete.create({
        data: {
          userId: session.user.id,
          sport: athleteData.sport || '',
          ...athleteData,
        },
      });

      athleteId = createdAthlete.id;
    } else {
      await prisma.athlete.update({
        where: { userId: session.user.id },
        data: athleteData,
      });
    }

    if (athleteId) {
      await Promise.all(
        socialLinks.map(({ platform, url }) => {
          if (!url) {
            return prisma.socialLink.deleteMany({
              where: {
                athleteId,
                platform,
              },
            });
          }

          return prisma.socialLink.upsert({
            where: {
              athleteId_platform: {
                athleteId,
                platform,
              },
            },
            update: {
              url,
            },
            create: {
              athleteId,
              platform,
              url,
            },
          });
        })
      );
    }

    const athlete = await prisma.athlete.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        performanceStats: true,
        videos: true,
        socialLinks: true,
        ratings: true,
      },
    });

    return NextResponse.json(athlete);
  } catch (error) {
    if (error instanceof RateLimitError) {
      return rateLimitResponse(error);
    }

    console.error('Error updating athlete profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
