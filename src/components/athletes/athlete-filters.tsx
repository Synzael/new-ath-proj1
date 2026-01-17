'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { debounce } from '@/lib/utils';
import { useCallback, useState, useTransition } from 'react';

const sports = [
  'Basketball',
  'Football',
  'Soccer',
  'Baseball',
  'Volleyball',
  'Track & Field',
  'Swimming',
  'Tennis',
  'Golf',
  'Wrestling',
];

const classYears = [2024, 2025, 2026, 2027, 2028];

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

export function AthleteFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== 'all') {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      params.delete('page'); // Reset page when filters change
      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = (name: string, value: string) => {
    startTransition(() => {
      router.push(`/athletes?${createQueryString(name, value)}`);
    });
  };

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      handleFilterChange('search', value);
    }, 300),
    [handleFilterChange]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  const handleClearFilters = () => {
    setSearchValue('');
    startTransition(() => {
      router.push('/athletes');
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              id="search"
              placeholder="Search athletes..."
              className="pl-9"
              value={searchValue}
              onChange={handleSearchChange}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Sport */}
        <div className="space-y-2">
          <Label htmlFor="sport">Sport</Label>
          <Select
            value={searchParams.get('sport') || 'all'}
            onValueChange={(value) => handleFilterChange('sport', value)}
          >
            <SelectTrigger id="sport">
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

        {/* Class Year */}
        <div className="space-y-2">
          <Label htmlFor="classYear">Class Year</Label>
          <Select
            value={searchParams.get('classYear') || 'all'}
            onValueChange={(value) => handleFilterChange('classYear', value)}
          >
            <SelectTrigger id="classYear">
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {classYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  Class of {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* State */}
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Select
            value={searchParams.get('state') || 'all'}
            onValueChange={(value) => handleFilterChange('state', value)}
          >
            <SelectTrigger id="state">
              <SelectValue placeholder="All States" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          className="w-full"
          onClick={handleClearFilters}
          disabled={isPending}
        >
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
}
