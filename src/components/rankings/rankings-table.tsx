import Link from 'next/link';
import { Trophy } from 'lucide-react';
import { getTopAthletes } from '@/services/athlete.service';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getInitials } from '@/lib/utils';

interface RankingsTableProps {
  sport: string | null;
  limit: number;
}

export async function RankingsTable({ sport, limit }: RankingsTableProps) {
  const rankings = await getTopAthletes(sport, limit);

  if (rankings.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          No rankings available for this sport
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      {/* Header row */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-4 py-2 text-sm font-medium text-muted-foreground">
        <div className="col-span-1">Rank</div>
        <div className="col-span-5">Athlete</div>
        <div className="col-span-2">Sport</div>
        <div className="col-span-2">School</div>
        <div className="col-span-2 text-right">Rating</div>
      </div>

      {/* Rankings list with content-visibility for performance */}
      <div className="space-y-2">
        {rankings.map((athlete) => (
          <Link
            key={athlete.id}
            href={`/athletes/${athlete.id}`}
            className="content-auto block"
          >
            <Card className="transition-colors hover:bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 sm:grid sm:grid-cols-12">
                  {/* Rank */}
                  <div className="flex h-10 w-10 items-center justify-center sm:col-span-1">
                    {athlete.rank <= 3 ? (
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          athlete.rank === 1
                            ? 'bg-athlete-gold'
                            : athlete.rank === 2
                              ? 'bg-athlete-silver'
                              : 'bg-athlete-bronze'
                        }`}
                      >
                        <Trophy
                          className={`h-4 w-4 ${athlete.rank <= 2 ? 'text-black' : 'text-white'}`}
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-muted-foreground">
                        {athlete.rank}
                      </span>
                    )}
                  </div>

                  {/* Athlete info */}
                  <div className="flex flex-1 items-center gap-3 sm:col-span-5">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={athlete.image || undefined} alt={athlete.name} />
                      <AvatarFallback>{getInitials(athlete.name)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{athlete.name}</p>
                      <p className="text-sm text-muted-foreground sm:hidden">
                        {athlete.sport} • {athlete.position}
                      </p>
                    </div>
                  </div>

                  {/* Sport (hidden on mobile) */}
                  <div className="hidden sm:block sm:col-span-2">
                    <p className="truncate">{athlete.sport}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {athlete.position}
                    </p>
                  </div>

                  {/* School (hidden on mobile) */}
                  <div className="hidden sm:block sm:col-span-2">
                    <p className="truncate">{athlete.school || '-'}</p>
                    <p className="text-sm text-muted-foreground">
                      {athlete.state && `${athlete.state}`}
                      {athlete.classYear && ` • ${athlete.classYear}`}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="sm:col-span-2 sm:text-right">
                    <Badge
                      variant={
                        athlete.rank === 1
                          ? 'gold'
                          : athlete.rank === 2
                            ? 'silver'
                            : athlete.rank === 3
                              ? 'bronze'
                              : 'secondary'
                      }
                      className="text-base px-3 py-1"
                    >
                      {athlete.overallRating.toFixed(1)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
