import Link from 'next/link';
import { Users, Shield, Calendar, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';
import type { UserWithProfile } from '@/types';

interface AdminDashboardProps {
  user: UserWithProfile;
}

export function AdminDashboard(_props: AdminDashboardProps) {
  const stats = [
    {
      title: 'Total Users',
      value: formatNumber(15234),
      icon: Users,
      description: '+123 this week',
    },
    {
      title: 'Pending Verifications',
      value: '47',
      icon: Shield,
      description: '12 coaches, 35 brands',
    },
    {
      title: 'Active Events',
      value: '8',
      icon: Calendar,
      description: '3 starting soon',
    },
    {
      title: 'Platform Health',
      value: '99.9%',
      icon: Activity,
      description: 'Uptime this month',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Platform overview and management
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
        {/* Pending Verifications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending Verifications</CardTitle>
              <CardDescription>Review coach and brand applications</CardDescription>
            </div>
            <Link href="/admin/verifications">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Coach Robert Smith', type: 'Coach', school: 'State University' },
                { name: 'SportWear Co', type: 'Brand', industry: 'Athletic Apparel' },
                { name: 'PowerUp Energy', type: 'Brand', industry: 'Beverages' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.type === 'Coach' ? item.school : item.industry}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Admin Actions</CardTitle>
            <CardDescription>Platform management tools</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Link href="/admin/users">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Manage Users</span>
              </Button>
            </Link>
            <Link href="/admin/verifications">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Shield className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Verifications</span>
              </Button>
            </Link>
            <Link href="/admin/events">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Calendar className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Manage Events</span>
              </Button>
            </Link>
            <Link href="/admin/analytics">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Activity className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Analytics</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
