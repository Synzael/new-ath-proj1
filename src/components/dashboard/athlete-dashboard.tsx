import Link from 'next/link';
import { User, TrendingUp, Calendar, DollarSign, Video, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { formatNumber, formatPercent } from '@/lib/utils';
import type { UserWithProfile } from '@/types';

interface AthleteDashboardProps {
  user: UserWithProfile;
}

export function AthleteDashboard({ user }: AthleteDashboardProps) {
  const athlete = user.athlete;
  const latestRating = athlete?.ratings?.[0];

  const stats = [
    {
      title: 'Overall Rating',
      value: latestRating?.overallScore?.toFixed(1) || 'N/A',
      icon: BarChart3,
      description: latestRating
        ? `${formatPercent(latestRating.percentile)} percentile`
        : 'Complete your profile',
    },
    {
      title: 'Profile Views',
      value: formatNumber(1234), // Placeholder
      icon: User,
      description: '+12% from last week',
    },
    {
      title: 'Upcoming Events',
      value: '2',
      icon: Calendar,
      description: 'Next event in 5 days',
    },
    {
      title: 'NIL Offers',
      value: '3',
      icon: DollarSign,
      description: '1 pending review',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user.name?.split(' ')[0]}!</h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s what&apos;s happening with your profile
        </p>
      </div>

      {/* Profile Completion Alert */}
      {athlete && !athlete.bio && (
        <Card className="border-primary/50 bg-primary/5">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-medium">Complete your profile</h3>
              <p className="text-sm text-muted-foreground">
                Add more details to increase your visibility to coaches
              </p>
            </div>
            <Link href="/profile/edit">
              <Button size="sm">Complete Profile</Button>
            </Link>
          </CardContent>
        </Card>
      )}

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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Rating Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Rating Breakdown</CardTitle>
            <CardDescription>Your performance across different categories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {latestRating ? (
              <>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Performance (40%)</span>
                    <span>{latestRating.performanceScore.toFixed(1)}</span>
                  </div>
                  <Progress value={latestRating.performanceScore} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Physical (20%)</span>
                    <span>{latestRating.physicalScore.toFixed(1)}</span>
                  </div>
                  <Progress value={latestRating.physicalScore} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Academic (15%)</span>
                    <span>{latestRating.academicScore.toFixed(1)}</span>
                  </div>
                  <Progress value={latestRating.academicScore} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Social (15%)</span>
                    <span>{latestRating.socialScore.toFixed(1)}</span>
                  </div>
                  <Progress value={latestRating.socialScore} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Evaluations (10%)</span>
                    <span>{latestRating.evaluationScore.toFixed(1)}</span>
                  </div>
                  <Progress value={latestRating.evaluationScore} />
                </div>
              </>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                <BarChart3 className="mx-auto mb-4 h-12 w-12 opacity-50" aria-hidden="true" />
                <p>No rating data available yet</p>
                <p className="text-sm">Complete your profile to get rated</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: 'view',
                  message: 'Coach Smith viewed your profile',
                  time: '2 hours ago',
                },
                {
                  type: 'offer',
                  message: 'New NIL offer from SportWear Co',
                  time: '1 day ago',
                },
                {
                  type: 'event',
                  message: 'Registered for Summer Showcase',
                  time: '3 days ago',
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
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
            <CardDescription>Common tasks and updates</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Link href="/profile/edit">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                <User className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Edit Profile</span>
              </Button>
            </Link>
            <Link href="/dashboard/videos">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                <Video className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Upload Video</span>
              </Button>
            </Link>
            <Link href="/rankings">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">View Rankings</span>
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                <DollarSign className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">NIL Offers</span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events you&apos;re registered for</CardDescription>
            </div>
            <Link href="/events">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Summer Basketball Showcase</p>
                  <p className="text-sm text-muted-foreground">July 15-18, 2025</p>
                </div>
                <Badge>Registered</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
