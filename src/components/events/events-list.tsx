import { prisma } from '@/lib/prisma';
import { EventCard } from './event-card';
import { Card, CardContent } from '@/components/ui/card';

interface EventsListProps {
  sport?: string;
  status?: string;
}

async function getEvents(sport?: string, status?: string) {
  const where: Record<string, unknown> = {};

  if (sport) {
    where.sport = sport;
  }

  if (status) {
    where.status = status;
  }

  const events = await prisma.event.findMany({
    where,
    include: {
      _count: {
        select: { participants: true },
      },
    },
    orderBy: { startDate: 'asc' },
  });

  return events;
}

export async function EventsList({ sport, status }: EventsListProps) {
  const events = await getEvents(sport, status);

  if (events.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          No events found matching your criteria
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={{
            ...event,
            participantCount: event._count.participants,
          }}
        />
      ))}
    </div>
  );
}
