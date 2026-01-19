import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Medal, Star, TrendingUp, Trophy } from "lucide-react";
import { getInitials } from "@/lib/utils";

// Mock finalists data
const finalists = {
  basketball: [
    { id: "1", name: "Marcus Johnson", school: "Oak Valley High", rating: 94, votes: 2847, seed: 1 },
    { id: "2", name: "Devon Williams", school: "Central Academy", rating: 91, votes: 2653, seed: 2 },
    { id: "3", name: "Chris Anderson", school: "Westside Prep", rating: 89, votes: 2412, seed: 3 },
    { id: "4", name: "Jordan Taylor", school: "Eastview High", rating: 88, votes: 2298, seed: 4 },
    { id: "5", name: "Alex Rivera", school: "North Central", rating: 87, votes: 2156, seed: 5 },
    { id: "6", name: "Ryan Mitchell", school: "South County", rating: 86, votes: 2034, seed: 6 },
    { id: "7", name: "Kevin Brown", school: "Metro Academy", rating: 85, votes: 1923, seed: 7 },
    { id: "8", name: "Michael Lee", school: "Summit High", rating: 84, votes: 1845, seed: 8 },
  ],
  football: [
    { id: "9", name: "James Carter", school: "Lincoln High", rating: 92, votes: 3156, seed: 1 },
    { id: "10", name: "Tyler Brooks", school: "Washington Prep", rating: 90, votes: 2987, seed: 2 },
    { id: "11", name: "David Johnson", school: "Roosevelt Academy", rating: 88, votes: 2654, seed: 3 },
    { id: "12", name: "Brandon White", school: "Jefferson High", rating: 87, votes: 2523, seed: 4 },
    { id: "13", name: "Anthony Davis", school: "Madison Prep", rating: 86, votes: 2398, seed: 5 },
    { id: "14", name: "Jason Miller", school: "Hamilton High", rating: 85, votes: 2267, seed: 6 },
    { id: "15", name: "Eric Thomas", school: "Franklin Academy", rating: 84, votes: 2134, seed: 7 },
    { id: "16", name: "Marcus Green", school: "Adams High", rating: 83, votes: 2012, seed: 8 },
  ],
  soccer: [
    { id: "17", name: "Sarah Mitchell", school: "Riverside Academy", rating: 93, votes: 2756, seed: 1 },
    { id: "18", name: "Emma Davis", school: "Lakeside High", rating: 91, votes: 2589, seed: 2 },
    { id: "19", name: "Olivia Garcia", school: "Valley Prep", rating: 89, votes: 2423, seed: 3 },
    { id: "20", name: "Sophia Martinez", school: "Hillcrest Academy", rating: 88, votes: 2312, seed: 4 },
    { id: "21", name: "Isabella Brown", school: "Oakwood High", rating: 87, votes: 2198, seed: 5 },
    { id: "22", name: "Mia Anderson", school: "Pineview Prep", rating: 86, votes: 2087, seed: 6 },
    { id: "23", name: "Ava Wilson", school: "Maple Academy", rating: 85, votes: 1965, seed: 7 },
    { id: "24", name: "Charlotte Taylor", school: "Cedar High", rating: 84, votes: 1854, seed: 8 },
  ],
};

function getMedalColor(seed: number) {
  if (seed === 1) return "text-amber-500";
  if (seed === 2) return "text-slate-400";
  if (seed === 3) return "text-amber-700";
  return "text-muted-foreground";
}

function FinalistCard({ athlete }: { athlete: typeof finalists.basketball[0] }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="flex items-center gap-4 py-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted font-bold text-lg">
          {athlete.seed <= 3 ? (
            <Medal className={`h-5 w-5 ${getMedalColor(athlete.seed)}`} />
          ) : (
            <span className="text-muted-foreground">{athlete.seed}</span>
          )}
        </div>

        <Avatar className="h-12 w-12 border-2 border-background">
          <AvatarFallback>{getInitials(athlete.name)}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="font-semibold">{athlete.name}</div>
          <div className="text-sm text-muted-foreground">{athlete.school}</div>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="font-semibold">{athlete.rating}</span>
            </div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span className="font-semibold">{athlete.votes.toLocaleString()}</span>
            </div>
            <div className="text-xs text-muted-foreground">Votes</div>
          </div>
        </div>

        <Button variant="outline" size="sm" asChild>
          <Link href={`/athletes/${athlete.id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function FinalistsList({ sport }: { sport: keyof typeof finalists }) {
  const athletes = finalists[sport];

  return (
    <div className="space-y-3">
      {athletes.map((athlete) => (
        <FinalistCard key={athlete.id} athlete={athlete} />
      ))}
    </div>
  );
}

export default function FinalistsPage() {
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
          <h1 className="text-2xl font-bold">CAM CAMP Finalists</h1>
          <p className="text-muted-foreground">
            The top athletes advancing to the final rounds
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Finalists</CardTitle>
            <Trophy className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Across all sports</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Votes Cast</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58,432</div>
            <p className="text-xs text-muted-foreground">Community participation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.2</div>
            <p className="text-xs text-muted-foreground">Elite performers</p>
          </CardContent>
        </Card>
      </div>

      {/* Finalists by Sport */}
      <Tabs defaultValue="basketball" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
          <TabsTrigger value="basketball">Basketball (8)</TabsTrigger>
          <TabsTrigger value="football">Football (8)</TabsTrigger>
          <TabsTrigger value="soccer">Soccer (8)</TabsTrigger>
        </TabsList>

        <TabsContent value="basketball" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basketball Finalists</CardTitle>
              <CardDescription>
                Top 8 basketball athletes advancing to the championship round
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FinalistsList sport="basketball" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="football" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Football Finalists</CardTitle>
              <CardDescription>
                Top 8 football athletes advancing to the championship round
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FinalistsList sport="football" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="soccer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Soccer Finalists</CardTitle>
              <CardDescription>
                Top 8 soccer athletes advancing to the championship round
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FinalistsList sport="soccer" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to action */}
      <Card className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary/20">
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <div>
            <h3 className="font-semibold text-lg">Finals Coming Soon!</h3>
            <p className="text-muted-foreground">
              The championship round begins next week. Cast your votes now!
            </p>
          </div>
          <Button asChild>
            <Link href="/events/camcamp/vote">Vote Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
