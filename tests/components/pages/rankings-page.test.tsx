import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RankingsPage from '@/app/(dashboard)/rankings/page';

vi.mock('@/components/rankings/rankings-filters', () => ({
  RankingsFilters: () => <div>Mock Rankings Filters</div>,
}));

vi.mock('@/components/rankings/rankings-table', () => ({
  RankingsTable: () => <div>Mock Rankings Table</div>,
}));

vi.mock('@/components/shared/loading', () => ({
  LoadingPage: () => <div>Mock Loading</div>,
}));

describe('Rankings page', () => {
  it('renders the updated rankings intro copy', async () => {
    const page = await RankingsPage({ searchParams: Promise.resolve({}) });
    render(page);

    expect(screen.getByRole('heading', { name: 'Rankings' })).toBeInTheDocument();
    expect(
      screen.getByText(
        /leaderboards highlight top talent across sports, regions, and positions based on our proprietary Overall 99 rating/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Mock Rankings Filters')).toBeInTheDocument();
  });
});
