import { Suspense } from 'react';
import { Metadata } from 'next';
import { RankingsTable } from '@/components/rankings/rankings-table';
import { RankingsFilters } from '@/components/rankings/rankings-filters';
import { LoadingPage } from '@/components/shared/loading';

export const metadata: Metadata = {
  title: 'Rankings',
  description: 'View top-ranked athletes across all sports',
};

interface RankingsPageProps {
  searchParams: Promise<{
    sport?: string;
    limit?: string;
  }>;
}

export default async function RankingsPage({ searchParams }: RankingsPageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Rankings</h1>
        <p className="mt-1 text-muted-foreground">
          These leaderboards highlight top talent across sports, regions, and positions based on
          our proprietary Overall 99 rating, with updates as new verified data is submitted.
        </p>
      </div>

      <div className="space-y-6">
        <RankingsFilters />

        <Suspense fallback={<LoadingPage />}>
          <RankingsTable
            sport={params.sport || null}
            limit={params.limit ? parseInt(params.limit) : 50}
          />
        </Suspense>
      </div>
    </div>
  );
}
