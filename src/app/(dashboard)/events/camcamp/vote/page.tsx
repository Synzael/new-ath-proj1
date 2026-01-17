"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import {
  ArrowLeft,
  Trophy,
  Timer,
  Users,
  ChevronRight,
  Check,
  Sparkles
} from "lucide-react";
import { cn, getInitials } from "@/lib/utils";

// Mock data - in production, fetch from API
const mockMatchup = {
  id: "matchup-1",
  round: "Quarterfinals",
  sport: "Basketball",
  endsAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  totalVotes: 1247,
  athlete1: {
    id: "athlete-1",
    name: "Marcus Johnson",
    position: "Point Guard",
    school: "Oak Valley High",
    image: null,
    rating: 94,
    votes: 687,
    stats: { ppg: 24.5, apg: 8.2, spg: 2.1 },
  },
  athlete2: {
    id: "athlete-2",
    name: "Devon Williams",
    position: "Point Guard",
    school: "Central Academy",
    image: null,
    rating: 91,
    votes: 560,
    stats: { ppg: 22.1, apg: 9.5, spg: 1.8 },
  },
};

const upcomingMatchups = [
  { id: "2", athlete1: "James Carter", athlete2: "Tyler Brooks", sport: "Football", round: "Quarterfinals" },
  { id: "3", athlete1: "Sarah Mitchell", athlete2: "Emma Davis", sport: "Soccer", round: "Semifinals" },
  { id: "4", athlete1: "Chris Anderson", athlete2: "Michael Lee", sport: "Basketball", round: "Quarterfinals" },
];

function AthleteVoteCard({
  athlete,
  totalVotes,
  isSelected,
  hasVoted,
  onVote,
  isPending,
}: {
  athlete: typeof mockMatchup.athlete1;
  totalVotes: number;
  isSelected: boolean;
  hasVoted: boolean;
  onVote: () => void;
  isPending: boolean;
}) {
  const votePercentage = totalVotes > 0 ? (athlete.votes / totalVotes) * 100 : 50;

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        isSelected && "ring-2 ring-primary shadow-lg",
        !hasVoted && "hover:shadow-lg hover:scale-[1.02] cursor-pointer",
        hasVoted && !isSelected && "opacity-60"
      )}
      onClick={() => !hasVoted && !isPending && onVote()}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
          <Check className="h-5 w-5 text-primary-foreground" />
        </div>
      )}

      <CardHeader className="text-center pb-2">
        <Avatar className="w-24 h-24 mx-auto mb-3 border-4 border-background shadow-lg">
          <AvatarImage src={athlete.image || undefined} alt={athlete.name} />
          <AvatarFallback className="text-2xl bg-primary/10">
            {getInitials(athlete.name)}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{athlete.name}</CardTitle>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>{athlete.position}</span>
          <span>•</span>
          <span>{athlete.school}</span>
        </div>
        <Badge variant="secondary" className="mx-auto mt-2">
          Rating: {athlete.rating}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-lg bg-muted/50">
            <div className="text-lg font-bold">{athlete.stats.ppg}</div>
            <div className="text-xs text-muted-foreground">PPG</div>
          </div>
          <div className="p-2 rounded-lg bg-muted/50">
            <div className="text-lg font-bold">{athlete.stats.apg}</div>
            <div className="text-xs text-muted-foreground">APG</div>
          </div>
          <div className="p-2 rounded-lg bg-muted/50">
            <div className="text-lg font-bold">{athlete.stats.spg}</div>
            <div className="text-xs text-muted-foreground">SPG</div>
          </div>
        </div>

        {/* Vote progress (only show after voting) */}
        {hasVoted && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{athlete.votes.toLocaleString()} votes</span>
              <span className="font-medium">{votePercentage.toFixed(1)}%</span>
            </div>
            <Progress value={votePercentage} className="h-2" />
          </div>
        )}

        {/* Vote button */}
        {!hasVoted && (
          <Button
            className="w-full"
            size="lg"
            disabled={isPending}
            onClick={(e) => {
              e.stopPropagation();
              onVote();
            }}
          >
            {isPending ? "Voting..." : "Vote"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default function VotePage() {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleVote = (athleteId: string) => {
    startTransition(async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSelectedAthlete(athleteId);
      setHasVoted(true);

      toast.success("Vote submitted!", {
        description: "Thank you for participating in CAM CAMP!",
      });
    });
  };

  const timeRemaining = mockMatchup.endsAt.getTime() - Date.now();
  const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));

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
          <h1 className="text-2xl font-bold">Vote Now</h1>
          <p className="text-muted-foreground">
            {mockMatchup.round} • {mockMatchup.sport}
          </p>
        </div>
      </div>

      {/* Matchup Info */}
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Timer className="h-4 w-4" />
          <span>{hoursRemaining}h remaining</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{mockMatchup.totalVotes.toLocaleString()} votes</span>
        </div>
      </div>

      {/* Voting Cards */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <AthleteVoteCard
          athlete={mockMatchup.athlete1}
          totalVotes={mockMatchup.totalVotes}
          isSelected={selectedAthlete === mockMatchup.athlete1.id}
          hasVoted={hasVoted}
          onVote={() => handleVote(mockMatchup.athlete1.id)}
          isPending={isPending}
        />

        {/* VS Divider */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg">
            <span className="text-xl font-bold text-primary">VS</span>
          </div>
        </div>

        <AthleteVoteCard
          athlete={mockMatchup.athlete2}
          totalVotes={mockMatchup.totalVotes}
          isSelected={selectedAthlete === mockMatchup.athlete2.id}
          hasVoted={hasVoted}
          onVote={() => handleVote(mockMatchup.athlete2.id)}
          isPending={isPending}
        />
      </div>

      {/* Mobile VS */}
      <div className="flex md:hidden justify-center -my-4">
        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
          <span className="text-sm font-bold text-primary">VS</span>
        </div>
      </div>

      {/* Success message */}
      {hasVoted && (
        <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="flex items-center gap-4 py-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Thanks for voting!</h3>
              <p className="text-sm text-muted-foreground">
                Check back later to see the final results. You can vote on other matchups below.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upcoming Matchups */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">More Matchups</h2>
        <div className="grid gap-3">
          {upcomingMatchups.map((matchup) => (
            <Card key={matchup.id} className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-medium">{matchup.athlete1}</div>
                    <div className="text-xs text-muted-foreground">vs</div>
                    <div className="font-medium">{matchup.athlete2}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Badge variant="outline">{matchup.sport}</Badge>
                    <div className="text-xs text-muted-foreground mt-1">
                      {matchup.round}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
