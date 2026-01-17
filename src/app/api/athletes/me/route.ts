import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { athleteProfileSchema } from "@/lib/validations";
import { apiRateLimiter, getClientIp, RateLimitError, rateLimitResponse } from "@/lib/rate-limit";

// GET /api/athletes/me - Get current user's athlete profile
export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
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
        rating: true,
      },
    });

    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete profile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(athlete);
  } catch (error) {
    console.error("Error fetching athlete profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
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
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = athleteProfileSchema.partial().parse(body);

    // Check if athlete profile exists
    let athlete = await prisma.athlete.findUnique({
      where: { userId: session.user.id },
    });

    if (!athlete) {
      // Create athlete profile if it doesn't exist
      athlete = await prisma.athlete.create({
        data: {
          userId: session.user.id,
          sport: validatedData.sport || "",
          ...validatedData,
        },
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
          rating: true,
        },
      });
    } else {
      // Update existing profile
      athlete = await prisma.athlete.update({
        where: { userId: session.user.id },
        data: validatedData,
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
          rating: true,
        },
      });
    }

    return NextResponse.json(athlete);
  } catch (error) {
    if (error instanceof RateLimitError) {
      return rateLimitResponse(error);
    }

    console.error("Error updating athlete profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
