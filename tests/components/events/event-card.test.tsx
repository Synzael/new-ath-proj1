import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EventCard } from '@/components/events/event-card';

const baseEvent = {
  id: 'e1',
  name: 'Summer Showcase',
  description: 'A great summer event',
  type: 'SHOWCASE' as const,
  sport: 'Basketball',
  location: 'Los Angeles, CA',
  startDate: new Date('2025-07-01'),
  endDate: new Date('2025-07-03'),
  maxParticipants: 100,
  status: 'UPCOMING' as const,
  imageUrl: null,
  participantCount: 45,
};

describe('EventCard', () => {
  it('renders event name', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText('Summer Showcase')).toBeInTheDocument();
  });

  it('renders sport', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText('Basketball')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText('A great summer event')).toBeInTheDocument();
  });

  it('renders location', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument();
  });

  it('renders participant count and spots left', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText(/45 registered/)).toBeInTheDocument();
    expect(screen.getByText(/55 spots left/)).toBeInTheDocument();
  });

  it('shows Full when no spots left', () => {
    render(<EventCard event={{ ...baseEvent, participantCount: 100 }} />);
    expect(screen.getByText(/Full/)).toBeInTheDocument();
  });

  it('renders View Details button for non-voting events', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText('View Details')).toBeInTheDocument();
  });

  it('renders Vote Now button for VOTING events', () => {
    render(<EventCard event={{ ...baseEvent, status: 'VOTING' as const }} />);
    expect(screen.getByText('Vote Now')).toBeInTheDocument();
  });

  it('renders status badge', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText('UPCOMING')).toBeInTheDocument();
  });

  it('renders without image', () => {
    render(<EventCard event={baseEvent} />);
    expect(screen.getByText('Summer Showcase')).toBeInTheDocument();
  });

  it('renders without description', () => {
    render(<EventCard event={{ ...baseEvent, description: null }} />);
    expect(screen.getByText('Summer Showcase')).toBeInTheDocument();
  });

  it('renders without location', () => {
    render(<EventCard event={{ ...baseEvent, location: null }} />);
    expect(screen.getByText('Summer Showcase')).toBeInTheDocument();
  });

  it('renders without maxParticipants', () => {
    render(<EventCard event={{ ...baseEvent, maxParticipants: null }} />);
    expect(screen.getByText(/45 registered/)).toBeInTheDocument();
  });

  it('links to event detail page', () => {
    render(<EventCard event={baseEvent} />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/events/e1');
  });
});
