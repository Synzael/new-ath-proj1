'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const sports = [
  'Basketball',
  'Football',
  'Soccer',
  'Baseball',
  'Volleyball',
  'Track & Field',
  'Swimming',
  'Tennis',
];

const limits = [25, 50, 100];

export function RankingsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleSportChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete('sport');
    } else {
      params.set('sport', value);
    }
    startTransition(() => {
      router.push(`/rankings?${params.toString()}`);
    });
  };

  const handleLimitChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', value);
    startTransition(() => {
      router.push(`/rankings?${params.toString()}`);
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sport:</span>
        <Select
          value={searchParams.get('sport') || 'all'}
          onValueChange={handleSportChange}
          disabled={isPending}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Sports" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sports</SelectItem>
            {sports.map((sport) => (
              <SelectItem key={sport} value={sport}>
                {sport}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Show:</span>
        <Select
          value={searchParams.get('limit') || '50'}
          onValueChange={handleLimitChange}
          disabled={isPending}
        >
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {limits.map((limit) => (
              <SelectItem key={limit} value={limit.toString()}>
                Top {limit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
