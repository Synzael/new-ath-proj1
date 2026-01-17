import Link from 'next/link';
import { MapPin, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getInitials, formatPercent } from '@/lib/utils';
import type { AthleteSummary } from '@/types';

interface AthleteCardProps {
  athlete: AthleteSummary;
}

export function AthleteCard({ athlete }: AthleteCardProps) {
  const ratingBadgeVariant = athlete.percentile
    ? athlete.percentile >= 90
      ? 'gold'
      : athlete.percentile >= 75
        ? 'silver'
        : athlete.percentile >= 50
          ? 'bronze'
          : 'secondary'
    : 'secondary';

  return (
    <Link href={`/athletes/${athlete.id}`}>
      <Card className="transition-all hover:shadow-md hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src={athlete.image || undefined} alt={athlete.name} />
              <AvatarFallback>{getInitials(athlete.name)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{athlete.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {athlete.sport}
                    {athlete.position && ` • ${athlete.position}`}
                  </p>
                </div>
                {athlete.overallRating && (
                  <Badge variant={ratingBadgeVariant} className="shrink-0">
                    {athlete.overallRating.toFixed(1)}
                  </Badge>
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {athlete.school && (
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3 w-3" aria-hidden="true" />
                    {athlete.school}
                  </span>
                )}
                {athlete.state && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {athlete.state}
                  </span>
                )}
                {athlete.classYear && (
                  <span>Class of {athlete.classYear}</span>
                )}
              </div>
              {athlete.percentile && (
                <p className="mt-2 text-xs text-primary">
                  Top {formatPercent(100 - athlete.percentile)} in their sport
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
