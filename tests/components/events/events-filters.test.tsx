import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EventsFilters } from '@/components/events/events-filters';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => new URLSearchParams(),
}));

describe('EventsFilters', () => {
  it('renders sport filter label', () => {
    render(<EventsFilters />);
    expect(screen.getByText('Sport:')).toBeInTheDocument();
  });

  it('renders status filter label', () => {
    render(<EventsFilters />);
    expect(screen.getByText('Status:')).toBeInTheDocument();
  });

  it('renders filter select triggers', () => {
    render(<EventsFilters />);
    const triggers = screen.getAllByRole('combobox');
    expect(triggers).toHaveLength(2);
  });
});
