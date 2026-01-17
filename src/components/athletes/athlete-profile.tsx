import Link from 'next/link';
import { ArrowLeft, MapPin, GraduationCap, Calendar, Ruler, Weight, ExternalLink, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { getInitials, formatHeight, formatWeight, formatDate, formatNumber } from '@/lib/utils';

interface AthleteProfileProps {
  athlete: {
    id: string;
    bio: string | null;
    sport: string;
    position: string | null;
    school: string | null;
    state: string | null;
    city: string | null;
    classYear: number | null;
    height: number | null;
    weight: number | null;
    gpa: number | null;
    dateOfBirth: Date | null;
    user: {
      id: string;
      name: string | null;
      image: string | null;
    };
    performanceStats: Array<{
      id: string;
      name: string;
      value: number;
      unit: string;
      category: string;
      verified: boolean;
    }>;
    videos: Array<{
      id: string;
      title: string;
      url: string;
      thumbnailUrl: string | null;
      category: string;
      viewCount: number;
      featured: boolean;
    }>;
    socialLinks: Array<{
      id: string;
      platform: string;
      url: string;
      followers: number | null;
    }>;
    ratings: Array<{
      performanceScore: number;
      physicalScore: number;
      academicScore: number;
      socialScore: number;
      evaluationScore: number;
      overallScore: number;
      percentile: number;
    }>;
  };
}

export function AthleteProfile({ athlete }: AthleteProfileProps) {
  const latestRating = athlete.ratings[0];
  const totalFollowers = athlete.socialLinks.reduce((sum, link) => sum + (link.followers || 0), 0);

  // Group stats by category
  const statsByCategory = athlete.performanceStats.reduce(
    (acc, stat) => {
      if (!acc[stat.category]) {
        acc[stat.category] = [];
      }
      acc[stat.category].push(stat);
      return acc;
    },
    {} as Record<string, typeof athlete.performanceStats>
  );

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        href="/athletes"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Athletes
      </Link>

      {/* Profile Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
          <AvatarImage src={athlete.user.image || undefined} alt={athlete.user.name || 'Athlete'} />
          <AvatarFallback className="text-2xl">
            {getInitials(athlete.user.name || 'A')}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold">{athlete.user.name}</h1>
              {latestRating && (
                <Badge variant="gold" className="text-lg px-3 py-1">
                  {latestRating.overallScore.toFixed(1)}
                </Badge>
              )}
            </div>
            <p className="text-lg text-muted-foreground">
              {athlete.sport}
              {athlete.position && ` • ${athlete.position}`}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {athlete.school && (
              <span className="flex items-center gap-1">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                {athlete.school}
              </span>
            )}
            {(athlete.city || athlete.state) && (
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {[athlete.city, athlete.state].filter(Boolean).join(', ')}
              </span>
            )}
            {athlete.classYear && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Class of {athlete.classYear}
              </span>
            )}
          </div>
          {athlete.bio && (
            <p className="text-muted-foreground max-w-2xl">{athlete.bio}</p>
          )}
        </div>
      </div>

      <Separator />

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Rating Breakdown */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Rating Breakdown</CardTitle>
                <CardDescription>Performance across all categories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestRating ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Performance (40%)</span>
                        <span className="font-medium">{latestRating.performanceScore.toFixed(1)}</span>
                      </div>
                      <Progress value={latestRating.performanceScore} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Physical (20%)</span>
                        <span className="font-medium">{latestRating.physicalScore.toFixed(1)}</span>
                      </div>
                      <Progress value={latestRating.physicalScore} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Academic (15%)</span>
                        <span className="font-medium">{latestRating.academicScore.toFixed(1)}</span>
                      </div>
                      <Progress value={latestRating.academicScore} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Social (15%)</span>
                        <span className="font-medium">{latestRating.socialScore.toFixed(1)}</span>
                      </div>
                      <Progress value={latestRating.socialScore} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Evaluations (10%)</span>
                        <span className="font-medium">{latestRating.evaluationScore.toFixed(1)}</span>
                      </div>
                      <Progress value={latestRating.evaluationScore} />
                    </div>
                  </>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    No rating data available
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Physical Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {athlete.height && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Ruler className="h-4 w-4" aria-hidden="true" />
                        Height
                      </span>
                      <span className="font-medium">{formatHeight(athlete.height)}</span>
                    </div>
                  )}
                  {athlete.weight && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Weight className="h-4 w-4" aria-hidden="true" />
                        Weight
                      </span>
                      <span className="font-medium">{formatWeight(athlete.weight)}</span>
                    </div>
                  )}
                  {athlete.gpa && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">GPA</span>
                      <span className="font-medium">{athlete.gpa.toFixed(2)}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {athlete.socialLinks.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Social Media</CardTitle>
                    <CardDescription>
                      {formatNumber(totalFollowers)} total followers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {athlete.socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg border p-2 hover:bg-muted transition-colors"
                      >
                        <span className="font-medium">{link.platform}</span>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          {link.followers && formatNumber(link.followers)}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          {Object.entries(statsByCategory).length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {Object.entries(statsByCategory).map(([category, stats]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stats.map((stat) => (
                        <div
                          key={stat.id}
                          className="flex items-center justify-between rounded-lg border p-3"
                        >
                          <div>
                            <p className="font-medium">{stat.name}</p>
                            {stat.verified && (
                              <Badge variant="outline" className="text-xs mt-1">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <span className="text-lg font-bold">
                            {stat.value} {stat.unit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                No performance stats available
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          {athlete.videos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {athlete.videos.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="relative aspect-video bg-muted">
                    {video.thumbnailUrl ? (
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
                      </div>
                    )}
                    {video.featured && (
                      <Badge className="absolute left-2 top-2">Featured</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium truncate">{video.title}</h3>
                    <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.category}</span>
                      <span>{formatNumber(video.viewCount)} views</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                No videos available
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
