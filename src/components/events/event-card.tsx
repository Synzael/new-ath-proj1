import Link from 'next/link';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import type { EventStatus, EventType } from '@prisma/client';

interface EventCardProps {
  event: {
    id: string;
    name: string;
    description: string | null;
    type: EventType;
    sport: string;
    location: string | null;
    startDate: Date;
    endDate: Date;
    maxParticipants: number | null;
    status: EventStatus;
    imageUrl: string | null;
    participantCount: number;
  };
}

const statusColors: Record<EventStatus, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  UPCOMING: 'default',
  ACTIVE: 'secondary',
  VOTING: 'default',
  COMPLETED: 'outline',
  CANCELLED: 'destructive',
};

const typeLabels: Record<EventType, string> = {
  CAMP: 'Camp',
  TOURNAMENT: 'Tournament',
  SHOWCASE: 'Showcase',
  COMBINE: 'Combine',
  TRYOUT: 'Tryout',
};

export function EventCard({ event }: EventCardProps) {
  const spotsLeft = event.maxParticipants
    ? event.maxParticipants - event.participantCount
    : null;

  return (
    <Card className="flex flex-col overflow-hidden">
      {/* Event Image */}
      {event.imageUrl && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-2 flex gap-2">
            <Badge variant={statusColors[event.status]}>{event.status}</Badge>
            <Badge variant="outline" className="bg-background/80">
              {typeLabels[event.type]}
            </Badge>
          </div>
        </div>
      )}

      <CardHeader className={event.imageUrl ? 'pt-4' : ''}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-lg">{event.name}</h3>
            <p className="text-sm text-muted-foreground">{event.sport}</p>
          </div>
          {!event.imageUrl && (
            <Badge variant={statusColors[event.status]}>{event.status}</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        {event.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {event.description}
          </p>
        )}

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>
              {formatDate(event.startDate)} - {formatDate(event.endDate)}
            </span>
          </div>

          {event.location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{event.location}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>
              {event.participantCount} registered
              {spotsLeft !== null && spotsLeft > 0 && ` • ${spotsLeft} spots left`}
              {spotsLeft !== null && spotsLeft <= 0 && ' • Full'}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link href={`/events/${event.id}`} className="w-full">
          <Button className="w-full" variant={event.status === 'VOTING' ? 'default' : 'outline'}>
            {event.status === 'VOTING' ? (
              <>
                <Trophy className="mr-2 h-4 w-4" aria-hidden="true" />
                Vote Now
              </>
            ) : (
              'View Details'
            )}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
