import { Suspense } from 'react';
import { Metadata } from 'next';
import { EventsList } from '@/components/events/events-list';
import { EventsFilters } from '@/components/events/events-filters';
import { LoadingPage } from '@/components/shared/loading';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Browse and register for CAM CAMP events and tournaments',
};

interface EventsPageProps {
  searchParams: Promise<{
    sport?: string;
    status?: string;
  }>;
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="mt-1 text-muted-foreground">
          CAM CAMP tournaments, showcases, and competitions with fan voting
        </p>
      </div>

      <div className="space-y-6">
        <EventsFilters />

        <Suspense fallback={<LoadingPage />}>
          <EventsList
            sport={params.sport}
            status={params.status}
          />
        </Suspense>
      </div>
    </div>
  );
}
