'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Sun, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from './theme-provider';
import { cn, getInitials } from '@/lib/utils';
import type { SessionUser } from '@/types';

interface HeaderProps {
  user: SessionUser | null;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Athletes', href: '/athletes' },
  { name: 'Rankings', href: '/rankings' },
  { name: 'Events', href: '/events', highlight: true },
  { name: 'NIL Marketplace', href: '/marketplace' },
];

export function Header({ user }: HeaderProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border glass-light">
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gradient-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
        >
          Overall 99
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {user && navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1',
                item.highlight
                  ? 'text-amber-400 hover:text-amber-300 font-semibold'
                  : pathname.startsWith(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
          </Button>

          {user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.image || undefined} alt={user.name || 'User'} />
                  <AvatarFallback>{getInitials(user.name || 'U')}</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-sm font-medium">{user.name}</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => signOut({ callbackUrl: '/' })}
                aria-label="Sign out"
              >
                <LogOut className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  Sign In
                </Button>
              </Link>
              <Link href="/onboarding">
                <Button size="sm" className="btn-primary-glow text-primary-foreground">Get Started</Button>
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
