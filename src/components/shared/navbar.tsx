"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { getInitials } from "@/lib/utils";

export function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const initials = session?.user
    ? getInitials(session.user.name || "U")
    : "";

  return (
    <nav className="border-b border-border glass-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-gradient-cyan">
              Overall 99
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/athletes"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Athletes
              </Link>
              <Link
                href="/rankings"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Rankings
              </Link>
              <Link
                href="/marketplace"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                NIL Marketplace
              </Link>
              <Link
                href="/events"
                className="text-amber-400 hover:text-amber-300 transition-colors font-semibold"
              >
                Events
              </Link>
              {session?.user && (
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {status === "loading" ? (
              <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
            ) : session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={session.user.image || undefined}
                        alt={session.user.name || "User"}
                      />
                      <AvatarFallback className="bg-primary/10">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/edit">Edit Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-500 cursor-pointer"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button className="btn-primary-glow text-primary-foreground" asChild>
                  <Link href="/onboarding">Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-gradient-cyan">Overall 99</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <div className="space-y-1">
                    <Link
                      href="/athletes"
                      className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Athletes
                    </Link>
                    <Link
                      href="/rankings"
                      className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Rankings
                    </Link>
                    <Link
                      href="/marketplace"
                      className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      NIL Marketplace
                    </Link>
                    <Link
                      href="/events"
                      className="block px-3 py-2 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Events
                    </Link>
                  </div>

                  {session?.user ? (
                    <div className="border-t pt-4 space-y-1">
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        My Profile
                      </Link>
                      <button
                        className="block w-full text-left px-3 py-2 text-red-500 hover:text-red-400 transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          signOut({ callbackUrl: "/" });
                        }}
                      >
                        Sign out
                      </button>
                    </div>
                  ) : (
                    <div className="border-t pt-4 space-y-2">
                      <Button
                        className="w-full btn-primary-glow text-primary-foreground"
                        asChild
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/onboarding">Get Started</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        asChild
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/login">Sign in</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
