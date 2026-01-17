"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, Search, UserPlus, Check, Star } from "lucide-react";
import { cn, getInitials } from "@/lib/utils";

const nominationSchema = z.object({
  athleteId: z.string().min(1, "Please select an athlete"),
  sport: z.string().min(1, "Please select a sport"),
  reason: z.string().min(10, "Please provide a reason (at least 10 characters)").max(500),
});

type NominationForm = z.infer<typeof nominationSchema>;

// Mock athlete search results
const mockAthletes = [
  { id: "1", name: "Marcus Johnson", sport: "Basketball", school: "Oak Valley High", rating: 94, image: null },
  { id: "2", name: "Devon Williams", sport: "Basketball", school: "Central Academy", rating: 91, image: null },
  { id: "3", name: "James Carter", sport: "Football", school: "Lincoln High", rating: 89, image: null },
  { id: "4", name: "Tyler Brooks", sport: "Football", school: "Washington Prep", rating: 87, image: null },
  { id: "5", name: "Sarah Mitchell", sport: "Soccer", school: "Riverside Academy", rating: 92, image: null },
];

const sports = ["Basketball", "Football", "Soccer", "Baseball", "Track & Field", "Swimming", "Volleyball", "Tennis"];

export default function NominatePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAthlete, setSelectedAthlete] = useState<typeof mockAthletes[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<NominationForm>({
    resolver: zodResolver(nominationSchema),
  });

  const filteredAthletes = mockAthletes.filter(
    (athlete) =>
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.school.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAthlete = (athlete: typeof mockAthletes[0]) => {
    setSelectedAthlete(athlete);
    setValue("athleteId", athlete.id);
    setValue("sport", athlete.sport);
  };

  const onSubmit = (data: NominationForm) => {
    startTransition(async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitted(true);
      toast.success("Nomination submitted!", {
        description: `${selectedAthlete?.name} has been nominated for CAM CAMP.`,
      });
    });
  };

  if (submitted) {
    return (
      <div className="container py-8">
        <Card className="max-w-lg mx-auto">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold">Nomination Submitted!</h2>
            <p className="text-muted-foreground">
              Thank you for nominating {selectedAthlete?.name}. Our team will review
              the nomination and notify the athlete if selected.
            </p>
            <div className="flex gap-3 justify-center pt-4">
              <Button variant="outline" asChild>
                <Link href="/events/camcamp">Back to CAM CAMP</Link>
              </Button>
              <Button onClick={() => { setSubmitted(false); setSelectedAthlete(null); }}>
                Nominate Another
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold">Nominate an Athlete</h1>
          <p className="text-muted-foreground">
            Help us discover the next CAM CAMP champion
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Search Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Find an Athlete</CardTitle>
              <CardDescription>
                Search for the athlete you want to nominate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or school..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredAthletes.map((athlete) => (
                  <div
                    key={athlete.id}
                    onClick={() => handleSelectAthlete(athlete)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                      selectedAthlete?.id === athlete.id
                        ? "bg-primary/10 border border-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    <Avatar>
                      <AvatarImage src={athlete.image || undefined} />
                      <AvatarFallback>{getInitials(athlete.name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{athlete.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {athlete.school} • {athlete.sport}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-medium">{athlete.rating}</span>
                    </div>
                    {selectedAthlete?.id === athlete.id && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                ))}

                {searchQuery && filteredAthletes.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No athletes found matching &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nomination Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nomination Details</CardTitle>
              <CardDescription>
                Tell us why this athlete should compete in CAM CAMP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Selected Athlete Display */}
                {selectedAthlete ? (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedAthlete.image || undefined} />
                      <AvatarFallback>{getInitials(selectedAthlete.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{selectedAthlete.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedAthlete.school}
                      </div>
                    </div>
                    <Badge className="ml-auto">{selectedAthlete.sport}</Badge>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg border-2 border-dashed text-center text-muted-foreground">
                    <UserPlus className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Search and select an athlete from the list</p>
                  </div>
                )}
                <input type="hidden" {...register("athleteId")} />
                {errors.athleteId && (
                  <p className="text-sm text-destructive">{errors.athleteId.message}</p>
                )}

                {/* Sport Selection */}
                <div className="space-y-2">
                  <Label htmlFor="sport">Sport Category</Label>
                  <Select
                    value={watch("sport")}
                    onValueChange={(value) => setValue("sport", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a sport" />
                    </SelectTrigger>
                    <SelectContent>
                      {sports.map((sport) => (
                        <SelectItem key={sport} value={sport}>
                          {sport}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.sport && (
                    <p className="text-sm text-destructive">{errors.sport.message}</p>
                  )}
                </div>

                {/* Reason */}
                <div className="space-y-2">
                  <Label htmlFor="reason">Why should they compete?</Label>
                  <Textarea
                    id="reason"
                    placeholder="Describe their achievements, skills, and why they deserve to be in CAM CAMP..."
                    rows={4}
                    {...register("reason")}
                  />
                  {errors.reason && (
                    <p className="text-sm text-destructive">{errors.reason.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {watch("reason")?.length || 0}/500 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isPending || !selectedAthlete}
                >
                  {isPending ? "Submitting..." : "Submit Nomination"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
