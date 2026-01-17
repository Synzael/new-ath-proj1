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

const industries = [
  'Athletic Apparel',
  'Beverages',
  'Sports Equipment',
  'Nutrition',
  'Technology',
  'Entertainment',
  'Automotive',
  'Financial Services',
];

const offerTypes = [
  { value: 'SPONSORSHIP', label: 'Sponsorship' },
  { value: 'ENDORSEMENT', label: 'Endorsement' },
  { value: 'APPEARANCE', label: 'Appearance' },
  { value: 'SOCIAL_MEDIA', label: 'Social Media' },
  { value: 'MERCHANDISE', label: 'Merchandise' },
];

export function MarketplaceFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    startTransition(() => {
      router.push(`/marketplace?${params.toString()}`);
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Industry:</span>
        <Select
          value={searchParams.get('industry') || 'all'}
          onValueChange={(value) => handleFilterChange('industry', value)}
          disabled={isPending}
        >
          <SelectTrigger className="w-44">
            <SelectValue placeholder="All Industries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Type:</span>
        <Select
          value={searchParams.get('type') || 'all'}
          onValueChange={(value) => handleFilterChange('type', value)}
          disabled={isPending}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {offerTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
