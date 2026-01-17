import { Suspense } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Trophy, Vote, UserPlus, Medal, Users } from "lucide-react";

export const metadata = {
  title: "CAM CAMP | Athlete Platform",
  description: "Compete, vote, and discover top athletes in CAM CAMP tournaments",
};

function CamCampStats() {
  // In production, fetch from API
  const stats = {
    activeEvents: 3,
    totalVotes: 15420,
    participants: 248,
    finalists: 32,
  };

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Events</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activeEvents}</div>
          <p className="text-xs text-muted-foreground">Currently running</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
          <Vote className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalVotes.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">This season</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Participants</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.participants}</div>
          <p className="text-xs text-muted-foreground">Athletes competing</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Finalists</CardTitle>
          <Medal className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.finalists}</div>
          <p className="text-xs text-muted-foreground">Top performers</p>
        </CardContent>
      </Card>
    </div>
  );
}

function CamCampActions() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Link href="/events/camcamp/vote">
        <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Vote className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Vote</CardTitle>
            <CardDescription>
              Cast your vote for your favorite athletes in active matchups
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">Live Now</Badge>
          </CardContent>
        </Card>
      </Link>

      <Link href="/events/camcamp/nominate">
        <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-2">
              <UserPlus className="h-6 w-6 text-cyan-500" />
            </div>
            <CardTitle>Nominate</CardTitle>
            <CardDescription>
              Nominate athletes to participate in upcoming CAM CAMP events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">Open</Badge>
          </CardContent>
        </Card>
      </Link>

      <Link href="/events/camcamp/finalists">
        <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <Medal className="h-6 w-6 text-amber-500" />
            </div>
            <CardTitle>Finalists</CardTitle>
            <CardDescription>
              View the top performers advancing to the final rounds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">32 Athletes</Badge>
          </CardContent>
        </Card>
      </Link>

      <Link href="/events/camcamp/leaderboard">
        <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2">
              <Trophy className="h-6 w-6 text-emerald-500" />
            </div>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>
              See the current standings and all-time CAM CAMP champions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">Updated Live</Badge>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default function CamCampPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CAM CAMP</h1>
          <p className="text-muted-foreground">
            The premier athlete voting competition. Vote for your favorites, nominate rising stars.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/events/camcamp/vote">
              <Vote className="mr-2 h-4 w-4" />
              Start Voting
            </Link>
          </Button>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="grid gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <Skeleton className="h-4 w-24" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16" />
                </CardContent>
              </Card>
            ))}
          </div>
        }
      >
        <CamCampStats />
      </Suspense>

      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <CamCampActions />
      </div>

      {/* How it works section */}
      <Card>
        <CardHeader>
          <CardTitle>How CAM CAMP Works</CardTitle>
          <CardDescription>
            A tournament-style voting system to discover and celebrate top athletes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h4 className="font-medium">Nomination</h4>
                <p className="text-sm text-muted-foreground">
                  Athletes are nominated by coaches, scouts, or the community
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <h4 className="font-medium">Bracket Voting</h4>
                <p className="text-sm text-muted-foreground">
                  Head-to-head matchups where users vote for their favorites
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <h4 className="font-medium">Champions Crowned</h4>
                <p className="text-sm text-muted-foreground">
                  Top athletes advance through rounds to be crowned CAM CAMP champions
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
