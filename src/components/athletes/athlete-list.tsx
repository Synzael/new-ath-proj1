import Link from 'next/link';
import { getAthletes } from '@/services/athlete.service';
import { AthleteCard } from './athlete-card';
import { Button } from '@/components/ui/button';
import type { AthleteFilters } from '@/types';

interface AthleteListProps {
  filters: AthleteFilters;
  page: number;
}

export async function AthleteList({ filters, page }: AthleteListProps) {
  const result = await getAthletes(filters, page, 12);

  if (result.data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
        <h3 className="text-lg font-medium">No athletes found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {result.data.length} of {result.total} athletes
      </p>

      {/* Athletes grid with content-visibility for performance */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {result.data.map((athlete) => (
          <div key={athlete.id} className="content-auto">
            <AthleteCard athlete={athlete} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {result.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          {page > 1 && (
            <Link
              href={`/athletes?page=${page - 1}${filters.sport ? `&sport=${filters.sport}` : ''}${filters.search ? `&search=${filters.search}` : ''}`}
            >
              <Button variant="outline">Previous</Button>
            </Link>
          )}
          <span className="text-sm text-muted-foreground">
            Page {page} of {result.totalPages}
          </span>
          {page < result.totalPages && (
            <Link
              href={`/athletes?page=${page + 1}${filters.sport ? `&sport=${filters.sport}` : ''}${filters.search ? `&search=${filters.search}` : ''}`}
            >
              <Button variant="outline">Next</Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
