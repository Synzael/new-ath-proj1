import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { cache } from 'react';
import { prisma } from './prisma';
import type { UserRole, SessionUser } from '@/types';

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Using type assertion due to version mismatch between @auth/prisma-adapter and next-auth
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  adapter: PrismaAdapter(prisma) as any,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await prisma.user.findUnique({
          where: { email },
          select: {
            id: true,
            email: true,
            name: true,
            image: true,
            password: true,
            role: true,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as SessionUser).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
});

// React.cache() for per-request deduplication of auth checks
// This ensures getSession() only hits the database once per request
export const getSession = cache(async () => {
  const session = await auth();
  return session;
});

// Get current user with role check
export const getCurrentUser = cache(async () => {
  const session = await getSession();
  if (!session?.user) {
    return null;
  }
  return session.user as SessionUser;
});

// Check if user has required role
export const requireRole = cache(async (allowedRoles: UserRole[]) => {
  const user = await getCurrentUser();
  if (!user) {
    return { authorized: false, user: null, reason: 'not_authenticated' };
  }
  if (!allowedRoles.includes(user.role)) {
    return { authorized: false, user, reason: 'insufficient_permissions' };
  }
  return { authorized: true, user, reason: null };
});

// Get user with their full profile (athlete/coach/brand)
export const getUserWithProfile = cache(async () => {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }

  const fullUser = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      athlete: {
        include: {
          ratings: {
            orderBy: { calculatedAt: 'desc' },
            take: 1,
          },
        },
      },
      coach: true,
      brand: true,
    },
  });

  return fullUser;
});

// Password hashing utility
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Verify password utility
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
