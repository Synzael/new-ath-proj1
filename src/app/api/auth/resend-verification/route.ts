import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authRateLimiter, getClientIp, RateLimitError, rateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const resendSchema = z.object({
  email: z.string().email(),
});

// POST /api/auth/resend-verification - Resend verification email
export async function POST(request: NextRequest) {
  try {
    // Rate limiting - strict for this endpoint
    const clientIp = getClientIp(request.headers);
    await authRateLimiter.check(3, clientIp); // Only 3 per minute

    const body = await request.json();
    const { email } = resendSchema.parse(body);

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Always return success to prevent email enumeration
    if (!user || user.emailVerified) {
      return NextResponse.json({
        message: "If the email exists and is not verified, a verification email has been sent.",
      });
    }

    // Delete any existing verification tokens for this user
    await prisma.verificationToken.deleteMany({
      where: { identifier: email },
    });

    // Generate new verification token
    const token = crypto.randomUUID();
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires,
      },
    });

    // In production, send email here using a service like Resend, SendGrid, etc.
    // For now, log the verification URL
    const verificationUrl = `${process.env.AUTH_URL}/api/auth/verify?token=${token}`;
    console.log(`Verification URL for ${email}: ${verificationUrl}`);

    // TODO: Implement actual email sending
    // await sendVerificationEmail(email, verificationUrl);

    return NextResponse.json({
      message: "If the email exists and is not verified, a verification email has been sent.",
    });
  } catch (error) {
    if (error instanceof RateLimitError) {
      return rateLimitResponse(error);
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    console.error("Resend verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
