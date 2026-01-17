import { Suspense } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Crown,
  Medal,
  Star,
  TrendingUp,
  Trophy,
  Flame,
  Target
} from "lucide-react";
import { cn, getInitials } from "@/lib/utils";

// Mock leaderboard data
const currentLeaderboard = [
  {
    rank: 1,
    id: "1",
    name: "Marcus Johnson",
    sport: "Basketball",
    school: "Oak Valley High",
    rating: 94,
    votes: 4523,
    wins: 7,
    streak: 5,
    change: 0
  },
  {
    rank: 2,
    id: "9",
    name: "James Carter",
    sport: "Football",
    school: "Lincoln High",
    rating: 92,
    votes: 4312,
    wins: 6,
    streak: 4,
    change: 1
  },
  {
    rank: 3,
    id: "17",
    name: "Sarah Mitchell",
    sport: "Soccer",
    school: "Riverside Academy",
    rating: 93,
    votes: 4156,
    wins: 6,
    streak: 3,
    change: -1
  },
  {
    rank: 4,
    id: "2",
    name: "Devon Williams",
    sport: "Basketball",
    school: "Central Academy",
    rating: 91,
    votes: 3987,
    wins: 5,
    streak: 2,
    change: 2
  },
  {
    rank: 5,
    id: "10",
    name: "Tyler Brooks",
    sport: "Football",
    school: "Washington Prep",
    rating: 90,
    votes: 3854,
    wins: 5,
    streak: 5,
    change: 0
  },
  {
    rank: 6,
    id: "18",
    name: "Emma Davis",
    sport: "Soccer",
    school: "Lakeside High",
    rating: 91,
    votes: 3721,
    wins: 5,
    streak: 1,
    change: -2
  },
  {
    rank: 7,
    id: "3",
    name: "Chris Anderson",
    sport: "Basketball",
    school: "Westside Prep",
    rating: 89,
    votes: 3598,
    wins: 4,
    streak: 2,
    change: 1
  },
  {
    rank: 8,
    id: "11",
    name: "David Johnson",
    sport: "Football",
    school: "Roosevelt Academy",
    rating: 88,
    votes: 3456,
    wins: 4,
    streak: 3,
    change: -1
  },
  {
    rank: 9,
    id: "19",
    name: "Olivia Garcia",
    sport: "Soccer",
    school: "Valley Prep",
    rating: 89,
    votes: 3312,
    wins: 4,
    streak: 2,
    change: 0
  },
  {
    rank: 10,
    id: "4",
    name: "Jordan Taylor",
    sport: "Basketball",
    school: "Eastview High",
    rating: 88,
    votes: 3189,
    wins: 4,
    streak: 1,
    change: 3
  },
];

const allTimeChampions = [
  { year: 2025, name: "Marcus Johnson", sport: "Basketball", school: "Oak Valley High" },
  { year: 2024, name: "Jaylen Williams", sport: "Football", school: "Metro High" },
  { year: 2023, name: "Aaliyah Brown", sport: "Basketball", school: "South Academy" },
  { year: 2022, name: "Derek Thomas", sport: "Football", school: "Central Prep" },
];

function getRankIcon(rank: number) {
  if (rank === 1) return <Crown className="h-5 w-5 text-amber-500" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-slate-400" />;
  if (rank === 3) return <Medal className="h-5 w-5 text-amber-700" />;
  return <span className="text-muted-foreground font-bold">{rank}</span>;
}

function getChangeIndicator(change: number) {
  if (change > 0) {
    return (
      <span className="flex items-center text-emerald-500 text-xs">
        <TrendingUp className="h-3 w-3 mr-0.5" />
        {change}
      </span>
    );
  }
  if (change < 0) {
    return (
      <span className="flex items-center text-rose-500 text-xs">
        <TrendingUp className="h-3 w-3 mr-0.5 rotate-180" />
        {Math.abs(change)}
      </span>
    );
  }
  return <span className="text-xs text-muted-foreground">—</span>;
}

function LeaderboardRow({ athlete }: { athlete: typeof currentLeaderboard[0] }) {
  return (
    <div className={cn(
      "flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-muted/50",
      athlete.rank <= 3 && "bg-gradient-to-r from-amber-500/5 to-transparent"
    )}>
      <div className="flex items-center justify-center w-10 h-10">
        {getRankIcon(athlete.rank)}
      </div>

      <Avatar className="h-12 w-12 border-2 border-background">
        <AvatarFallback className={cn(
          athlete.rank === 1 && "bg-amber-500/20 text-amber-500"
        )}>
          {getInitials(athlete.name)}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{athlete.name}</span>
          {athlete.streak >= 3 && (
            <Badge variant="secondary" className="gap-1">
              <Flame className="h-3 w-3 text-orange-500" />
              {athlete.streak}
            </Badge>
          )}
        </div>
        <div className="text-sm text-muted-foreground">
          {athlete.school} • {athlete.sport}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="font-semibold">{athlete.rating}</span>
          </div>
          <div className="text-xs text-muted-foreground">Rating</div>
        </div>

        <div className="text-center">
          <div className="font-semibold">{athlete.votes.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Votes</div>
        </div>

        <div className="text-center">
          <div className="font-semibold text-emerald-500">{athlete.wins}</div>
          <div className="text-xs text-muted-foreground">Wins</div>
        </div>

        <div className="w-12 text-center">
          {getChangeIndicator(athlete.change)}
        </div>
      </div>

      <Button variant="ghost" size="sm" asChild>
        <Link href={`/athletes/${athlete.id}`}>View</Link>
      </Button>
    </div>
  );
}

export default function LeaderboardPage() {
  return (
    <div className="container py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/events/camcamp">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">CAM CAMP Leaderboard</h1>
          <p className="text-muted-foreground">
            Current standings and all-time champions
          </p>
        </div>
      </div>

      {/* Top 3 Showcase */}
      <div className="grid gap-4 md:grid-cols-3">
        {currentLeaderboard.slice(0, 3).map((athlete, index) => (
          <Card
            key={athlete.id}
            className={cn(
              "relative overflow-hidden",
              index === 0 && "border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-transparent"
            )}
          >
            <CardContent className="pt-6 text-center">
              <div className="absolute top-3 right-3">
                {getRankIcon(athlete.rank)}
              </div>
              <Avatar className={cn(
                "h-20 w-20 mx-auto mb-4 border-4",
                index === 0 ? "border-amber-500" : "border-muted"
              )}>
                <AvatarFallback className="text-2xl">
                  {getInitials(athlete.name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-lg">{athlete.name}</h3>
              <p className="text-sm text-muted-foreground">{athlete.school}</p>
              <Badge className="mt-2">{athlete.sport}</Badge>

              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t">
                <div>
                  <div className="font-bold">{athlete.rating}</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
                <div>
                  <div className="font-bold">{athlete.votes.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Votes</div>
                </div>
                <div>
                  <div className="font-bold text-emerald-500">{athlete.wins}</div>
                  <div className="text-xs text-muted-foreground">Wins</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard */}
      <Tabs defaultValue="current" className="space-y-6">
        <TabsList>
          <TabsTrigger value="current">Current Season</TabsTrigger>
          <TabsTrigger value="alltime">All-Time Champions</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Season Rankings</CardTitle>
                  <CardDescription>
                    Updated in real-time based on votes and wins
                  </CardDescription>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Target className="h-3 w-3" />
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {currentLeaderboard.map((athlete) => (
                <LeaderboardRow key={athlete.id} athlete={athlete} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alltime">
          <Card>
            <CardHeader>
              <CardTitle>Hall of Champions</CardTitle>
              <CardDescription>
                Previous CAM CAMP champions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allTimeChampions.map((champion) => (
                  <div
                    key={champion.year}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20">
                      <Trophy className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{champion.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {champion.school} • {champion.sport}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {champion.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Legend */}
      <Card>
        <CardContent className="py-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-amber-500" />
              <span className="text-muted-foreground">1st Place</span>
            </div>
            <div className="flex items-center gap-2">
              <Medal className="h-4 w-4 text-slate-400" />
              <span className="text-muted-foreground">2nd Place</span>
            </div>
            <div className="flex items-center gap-2">
              <Medal className="h-4 w-4 text-amber-700" />
              <span className="text-muted-foreground">3rd Place</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-muted-foreground">Win Streak (3+)</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span className="text-muted-foreground">Rank Up</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
