import type { NextAuthConfig } from 'next-auth';

// Auth config for middleware (edge-compatible)
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnAthletes = nextUrl.pathname.startsWith('/athletes');
      const isOnEvents = nextUrl.pathname.startsWith('/events');
      const isOnMarketplace = nextUrl.pathname.startsWith('/marketplace');
      const isOnRankings = nextUrl.pathname.startsWith('/rankings');

      const protectedRoutes = [isOnDashboard, isOnAthletes, isOnEvents, isOnMarketplace];

      // Rankings are public, but some features require auth
      if (protectedRoutes.some(Boolean)) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      }

      // If logged in and trying to access login/register, redirect to dashboard
      const isOnAuth = nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/register');
      if (isOnAuth && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },
  providers: [], // Providers are defined in auth.ts
};
