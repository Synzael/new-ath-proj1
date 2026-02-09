import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RankingsFilters } from '@/components/rankings/rankings-filters';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => new URLSearchParams(),
}));

describe('RankingsFilters', () => {
  it('renders sport filter label', () => {
    render(<RankingsFilters />);
    expect(screen.getByText('Sport:')).toBeInTheDocument();
  });

  it('renders show filter label', () => {
    render(<RankingsFilters />);
    expect(screen.getByText('Show:')).toBeInTheDocument();
  });

  it('renders filter select triggers', () => {
    render(<RankingsFilters />);
    const triggers = screen.getAllByRole('combobox');
    expect(triggers).toHaveLength(2);
  });
});
