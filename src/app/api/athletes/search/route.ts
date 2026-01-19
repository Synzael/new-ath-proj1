import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { athleteSearchSchema } from "@/lib/validations";
import { apiRateLimiter, getClientIp, RateLimitError, rateLimitResponse } from "@/lib/rate-limit";

// GET /api/athletes/search - Search athletes with filters
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request.headers);
    await apiRateLimiter.check(60, clientIp);

    const { searchParams } = new URL(request.url);

    // Parse and validate query parameters
    const params = athleteSearchSchema.parse({
      query: searchParams.get("query") || undefined,
      sport: searchParams.get("sport") || undefined,
      position: searchParams.get("position") || undefined,
      state: searchParams.get("state") || undefined,
      minRating: searchParams.get("minRating")
        ? Number(searchParams.get("minRating"))
        : undefined,
      maxRating: searchParams.get("maxRating")
        ? Number(searchParams.get("maxRating"))
        : undefined,
      graduationYear: searchParams.get("graduationYear")
        ? Number(searchParams.get("graduationYear"))
        : undefined,
      sortBy: (searchParams.get("sortBy") as "rating" | "name" | "recent") || "rating",
      sortOrder: (searchParams.get("sortOrder") as "asc" | "desc") || "desc",
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
      limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : 20,
    });

    // Build where clause
    const where: any = {};

    if (params.query) {
      where.OR = [
        { user: { name: { contains: params.query, mode: "insensitive" } } },
        { school: { contains: params.query, mode: "insensitive" } },
        { sport: { contains: params.query, mode: "insensitive" } },
      ];
    }

    if (params.sport) {
      where.sport = params.sport;
    }

    if (params.position) {
      where.position = params.position;
    }

    if (params.state) {
      where.state = params.state;
    }

    if (params.graduationYear) {
      where.graduationYear = params.graduationYear;
    }

    if (params.minRating || params.maxRating) {
      where.ratings = {
        some: {
          overallScore: {
            ...(params.minRating && { gte: params.minRating }),
            ...(params.maxRating && { lte: params.maxRating }),
          },
        },
      };
    }

    // Build orderBy clause
    let orderBy: any = {};
    switch (params.sortBy) {
      case "rating":
        orderBy = { ratings: { _count: params.sortOrder } };
        break;
      case "name":
        orderBy = { user: { name: params.sortOrder } };
        break;
      case "recent":
        orderBy = { createdAt: params.sortOrder };
        break;
      default:
        orderBy = { ratings: { _count: "desc" } };
    }

    // Calculate pagination
    const skip = (params.page - 1) * params.limit;

    // Execute query with count
    const [athletes, total] = await Promise.all([
      prisma.athlete.findMany({
        where,
        orderBy,
        skip,
        take: params.limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          ratings: {
            select: {
              overallScore: true,
              performanceScore: true,
              physicalScore: true,
              academicScore: true,
              socialScore: true,
              evaluationScore: true,
            },
            orderBy: { calculatedAt: 'desc' },
            take: 1,
          },
        },
      }),
      prisma.athlete.count({ where }),
    ]);

    // Calculate pagination metadata
    const totalPages = Math.ceil(total / params.limit);
    const hasNextPage = params.page < totalPages;
    const hasPreviousPage = params.page > 1;

    return NextResponse.json({
      athletes,
      pagination: {
        page: params.page,
        limit: params.limit,
        total,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      },
    });
  } catch (error) {
    if (error instanceof RateLimitError) {
      return rateLimitResponse(error);
    }

    console.error("Error searching athletes:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
