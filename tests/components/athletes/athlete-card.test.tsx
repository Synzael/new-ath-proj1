import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AthleteCard } from '@/components/athletes/athlete-card';
import type { AthleteSummary } from '@/types';

const baseAthlete: AthleteSummary = {
  id: 'a1',
  userId: 'u1',
  name: 'John Doe',
  image: null,
  sport: 'Basketball',
  position: 'Guard',
  school: 'Lincoln High',
  state: 'CA',
  classYear: 2025,
  overallRating: 85,
  percentile: 92,
};

describe('AthleteCard', () => {
  it('renders athlete name', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders sport and position', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText(/Basketball/)).toBeInTheDocument();
    expect(screen.getByText(/Guard/)).toBeInTheDocument();
  });

  it('renders school', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText('Lincoln High')).toBeInTheDocument();
  });

  it('renders state', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText('CA')).toBeInTheDocument();
  });

  it('renders class year', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText('Class of 2025')).toBeInTheDocument();
  });

  it('renders rating badge', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText('85.0')).toBeInTheDocument();
  });

  it('renders percentile info', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText(/Top .* in their sport/)).toBeInTheDocument();
  });

  it('renders initials when no image', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles athlete without optional fields', () => {
    const minimal: AthleteSummary = {
      id: 'a2',
      userId: 'u2',
      name: 'Jane',
      image: null,
      sport: 'Soccer',
      position: null,
      school: null,
      state: null,
      classYear: null,
      overallRating: null,
      percentile: null,
    };
    render(<AthleteCard athlete={minimal} />);
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Soccer')).toBeInTheDocument();
    expect(screen.queryByText(/Class of/)).not.toBeInTheDocument();
  });

  it('uses gold variant for 90+ percentile', () => {
    render(<AthleteCard athlete={{ ...baseAthlete, percentile: 95 }} />);
    expect(screen.getByText('85.0')).toBeInTheDocument();
  });

  it('uses silver variant for 75+ percentile', () => {
    render(<AthleteCard athlete={{ ...baseAthlete, percentile: 80 }} />);
    expect(screen.getByText('85.0')).toBeInTheDocument();
  });

  it('uses bronze variant for 50+ percentile', () => {
    render(<AthleteCard athlete={{ ...baseAthlete, percentile: 55 }} />);
    expect(screen.getByText('85.0')).toBeInTheDocument();
  });

  it('uses secondary variant for low percentile', () => {
    render(<AthleteCard athlete={{ ...baseAthlete, percentile: 30 }} />);
    expect(screen.getByText('85.0')).toBeInTheDocument();
  });

  it('links to athlete detail page', () => {
    render(<AthleteCard athlete={baseAthlete} />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/athletes/a1');
  });
});
