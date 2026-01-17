import Link from 'next/link';
import { DollarSign, Users, TrendingUp, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatNumber, formatCurrency } from '@/lib/utils';
import type { UserWithRelations } from '@/types';

interface BrandDashboardProps {
  user: UserWithRelations;
}

export function BrandDashboard({ user }: BrandDashboardProps) {
  const brand = user.brand;

  const stats = [
    {
      title: 'Active Deals',
      value: '12',
      icon: FileText,
      description: '3 pending approval',
    },
    {
      title: 'Total Investment',
      value: formatCurrency(45000),
      icon: DollarSign,
      description: 'This quarter',
    },
    {
      title: 'Athletes Reached',
      value: formatNumber(156),
      icon: Users,
      description: '+23% from last month',
    },
    {
      title: 'Engagement Rate',
      value: '4.2%',
      icon: TrendingUp,
      description: 'Across all campaigns',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome, {brand?.companyName || user.name}!</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your NIL partnerships and campaigns
        </p>
      </div>

      {/* Verification Status */}
      {brand && !brand.verified && (
        <Card className="border-yellow-500/50 bg-yellow-500/5">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-medium">Verification Pending</h3>
              <p className="text-sm text-muted-foreground">
                Your brand account is under review
              </p>
            </div>
            <Badge variant="outline">Pending</Badge>
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

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Active Campaigns */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>Your ongoing NIL partnerships</CardDescription>
            </div>
            <Link href="/dashboard/campaigns">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { athlete: 'John Doe', type: 'Social Media', status: 'Active' },
                { athlete: 'Jane Smith', type: 'Endorsement', status: 'Pending' },
                { athlete: 'Michael Johnson', type: 'Appearance', status: 'Active' },
              ].map((campaign, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">{campaign.athlete}</p>
                    <p className="text-sm text-muted-foreground">{campaign.type}</p>
                  </div>
                  <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                    {campaign.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your NIL activities</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Link href="/athletes">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Find Athletes</span>
              </Button>
            </Link>
            <Link href="/dashboard/offers/new">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <FileText className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Create Offer</span>
              </Button>
            </Link>
            <Link href="/rankings">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Top Athletes</span>
              </Button>
            </Link>
            <Link href="/dashboard/analytics">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <DollarSign className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs">Analytics</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
