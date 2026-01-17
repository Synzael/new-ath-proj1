import { Suspense } from 'react';
import { Metadata } from 'next';
import { MarketplaceList } from '@/components/marketplace/marketplace-list';
import { MarketplaceFilters } from '@/components/marketplace/marketplace-filters';
import { LoadingPage } from '@/components/shared/loading';

export const metadata: Metadata = {
  title: 'NIL Marketplace',
  description: 'Explore NIL deals and partnership opportunities',
};

interface MarketplacePageProps {
  searchParams: Promise<{
    type?: string;
    industry?: string;
  }>;
}

export default async function MarketplacePage({ searchParams }: MarketplacePageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">NIL Marketplace</h1>
        <p className="mt-1 text-muted-foreground">
          Connect with brands and explore NIL opportunities
        </p>
      </div>

      <div className="space-y-6">
        <MarketplaceFilters />

        <Suspense fallback={<LoadingPage />}>
          <MarketplaceList
            type={params.type}
            industry={params.industry}
          />
        </Suspense>
      </div>
    </div>
  );
}
