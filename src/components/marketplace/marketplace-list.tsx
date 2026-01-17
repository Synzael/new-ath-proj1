import { prisma } from '@/lib/prisma';
import { BrandCard } from './brand-card';
import { Card, CardContent } from '@/components/ui/card';

interface MarketplaceListProps {
  type?: string;
  industry?: string;
}

async function getBrands(industry?: string) {
  const where: Record<string, unknown> = {
    verified: true,
  };

  if (industry) {
    where.industry = industry;
  }

  const brands = await prisma.brand.findMany({
    where,
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      _count: {
        select: { offers: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return brands;
}

export async function MarketplaceList({ industry }: MarketplaceListProps) {
  const brands = await getBrands(industry);

  if (brands.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          No brands found matching your criteria
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {brands.map((brand) => (
        <BrandCard
          key={brand.id}
          brand={{
            ...brand,
            offerCount: brand._count.offers,
          }}
        />
      ))}
    </div>
  );
}
