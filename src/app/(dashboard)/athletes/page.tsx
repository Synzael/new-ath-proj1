import { Suspense } from 'react';
import { Metadata } from 'next';
import { AthleteList } from '@/components/athletes/athlete-list';
import { AthleteFilters } from '@/components/athletes/athlete-filters';
import { LoadingAthleteList } from '@/components/shared/loading';

export const metadata: Metadata = {
  title: 'Athletes',
  description: 'Discover and connect with top athletes',
};

interface AthletesPageProps {
  searchParams: Promise<{
    sport?: string;
    position?: string;
    state?: string;
    classYear?: string;
    search?: string;
    page?: string;
  }>;
}

export default async function AthletesPage({ searchParams }: AthletesPageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Athletes</h1>
        <p className="mt-1 text-muted-foreground">
          Discover talented athletes across all sports
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-muted" />}>
            <AthleteFilters />
          </Suspense>
        </aside>

        {/* Athletes List */}
        <main className="lg:col-span-3">
          <Suspense fallback={<LoadingAthleteList count={10} />}>
            <AthleteList
              filters={{
                sport: params.sport,
                position: params.position,
                state: params.state,
                classYear: params.classYear ? parseInt(params.classYear) : undefined,
                search: params.search,
              }}
              page={params.page ? parseInt(params.page) : 1}
            />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
