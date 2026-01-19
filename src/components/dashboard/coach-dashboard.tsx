import Link from 'next/link';
import { Users, Search, Star, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';
import type { UserWithProfile } from '@/types';

interface CoachDashboardProps {
  user: UserWithProfile;
}

export function CoachDashboard({ user }: CoachDashboardProps) {
  const coach = user.coach;

  const stats = [
    {
      title: 'Saved Athletes',
      value: formatNumber(24),
      icon: Star,
      description: '3 new this week',
    },
    {
      title: 'Profile Searches',
      value: formatNumber(156),
      icon: Search,
      description: 'This month',
    },
    {
      title: 'Messages Sent',
      value: formatNumber(45),
      icon: MessageSquare,
      description: '12 responses received',
    },
    {
      title: 'Athletes Viewed',
      value: formatNumber(89),
      icon: Users,
      description: 'This month',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
        <p className="mt-1 text-muted-foreground">
          {coach?.school || 'Your coaching dashboard'} - {coach?.sport}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Saved Athletes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Saved Athletes</CardTitle>
              <CardDescription>Athletes you&apos;re tracking</CardDescription>
            </div>
            <Link href="/athletes?saved=true">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'John Doe', position: 'Point Guard', rating: 92 },
                { name: 'Jane Smith', position: 'Forward', rating: 88 },
                { name: 'Michael Johnson', position: 'Quarterback', rating: 85 },
              ].map((athlete, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">{athlete.name}</p>
                    <p className="text-sm text-muted-foreground">{athlete.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{athlete.rating}</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Find and connect with athletes</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Link href="/athletes">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Search className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Search Athletes</span>
              </Button>
            </Link>
            <Link href="/rankings">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Star className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">View Rankings</span>
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Upcoming Events</span>
              </Button>
            </Link>
            <Link href="/dashboard/messages">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Messages</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
