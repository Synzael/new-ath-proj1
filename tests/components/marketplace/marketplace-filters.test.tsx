import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MarketplaceFilters } from '@/components/marketplace/marketplace-filters';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => new URLSearchParams(),
}));

describe('MarketplaceFilters', () => {
  it('renders industry filter label', () => {
    render(<MarketplaceFilters />);
    expect(screen.getByText('Industry:')).toBeInTheDocument();
  });

  it('renders type filter label', () => {
    render(<MarketplaceFilters />);
    expect(screen.getByText('Type:')).toBeInTheDocument();
  });

  it('renders filter select triggers', () => {
    render(<MarketplaceFilters />);
    const triggers = screen.getAllByRole('combobox');
    expect(triggers).toHaveLength(2);
  });
});
