import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AthleteFilters } from '@/components/athletes/athlete-filters';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => new URLSearchParams(),
}));

describe('AthleteFilters', () => {
  it('renders search input', () => {
    render(<AthleteFilters />);
    expect(screen.getByPlaceholderText('Search athletes...')).toBeInTheDocument();
  });

  it('renders sport filter', () => {
    render(<AthleteFilters />);
    expect(screen.getByLabelText('Sport')).toBeInTheDocument();
  });

  it('renders class year filter', () => {
    render(<AthleteFilters />);
    expect(screen.getByLabelText('Class Year')).toBeInTheDocument();
  });

  it('renders state filter', () => {
    render(<AthleteFilters />);
    expect(screen.getByLabelText('State')).toBeInTheDocument();
  });

  it('renders clear filters button', () => {
    render(<AthleteFilters />);
    expect(screen.getByText('Clear Filters')).toBeInTheDocument();
  });

  it('renders filters title', () => {
    render(<AthleteFilters />);
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });
});
