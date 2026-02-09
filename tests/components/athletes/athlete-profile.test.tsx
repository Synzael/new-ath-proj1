import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AthleteProfile } from '@/components/athletes/athlete-profile';

const fullAthlete = {
  id: 'a1',
  bio: 'A talented guard with great court vision.',
  sport: 'Basketball',
  position: 'Point Guard',
  school: 'Lincoln High',
  state: 'CA',
  city: 'Los Angeles',
  classYear: 2025,
  height: 74,
  weight: 185,
  gpa: 3.8,
  dateOfBirth: new Date('2007-06-15'),
  user: { id: 'u1', name: 'John Doe', image: null },
  performanceStats: [
    { id: 's1', name: '40-yard dash', value: 4.5, unit: 's', category: 'Speed', verified: true },
    { id: 's2', name: 'Bench Press', value: 225, unit: 'lbs', category: 'Strength', verified: false },
  ],
  videos: [
    { id: 'v1', title: 'Game Highlights', url: 'https://example.com/v1', thumbnailUrl: null, category: 'Game', viewCount: 1500, featured: true },
    { id: 'v2', title: 'Training Session', url: 'https://example.com/v2', thumbnailUrl: 'https://example.com/thumb.jpg', category: 'Training', viewCount: 500, featured: false },
  ],
  socialLinks: [
    { id: 'sl1', platform: 'Instagram', url: 'https://instagram.com/john', followers: 5000 },
    { id: 'sl2', platform: 'Twitter', url: 'https://twitter.com/john', followers: 3000 },
  ],
  ratings: [{
    performanceScore: 85,
    physicalScore: 78,
    academicScore: 92,
    socialScore: 65,
    evaluationScore: 80,
    overallScore: 82.5,
    percentile: 88,
  }],
};

const minimalAthlete = {
  id: 'a2',
  bio: null,
  sport: 'Soccer',
  position: null,
  school: null,
  state: null,
  city: null,
  classYear: null,
  height: null,
  weight: null,
  gpa: null,
  dateOfBirth: null,
  user: { id: 'u2', name: 'Jane Smith', image: null },
  performanceStats: [],
  videos: [],
  socialLinks: [],
  ratings: [],
};

describe('AthleteProfile', () => {
  it('renders athlete name', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders sport and position', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText(/Basketball/)).toBeInTheDocument();
    expect(screen.getByText(/Point Guard/)).toBeInTheDocument();
  });

  it('renders bio', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('A talented guard with great court vision.')).toBeInTheDocument();
  });

  it('renders school', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Lincoln High')).toBeInTheDocument();
  });

  it('renders location', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument();
  });

  it('renders class year', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Class of 2025')).toBeInTheDocument();
  });

  it('renders overall rating badge', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('82.5')).toBeInTheDocument();
  });

  it('renders rating breakdown scores', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Performance (40%)')).toBeInTheDocument();
    expect(screen.getByText('Physical (20%)')).toBeInTheDocument();
  });

  it('renders physical profile', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Physical Profile')).toBeInTheDocument();
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('GPA')).toBeInTheDocument();
    expect(screen.getByText('3.80')).toBeInTheDocument();
  });

  it('renders social media section', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('renders back to athletes link', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Back to Athletes')).toBeInTheDocument();
  });

  it('renders tab navigation', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Videos')).toBeInTheDocument();
  });

  it('renders initials when no image', () => {
    render(<AthleteProfile athlete={fullAthlete} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders minimal athlete without optional fields', () => {
    render(<AthleteProfile athlete={minimalAthlete} />);
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Soccer')).toBeInTheDocument();
  });

  it('shows no rating message when no ratings', () => {
    render(<AthleteProfile athlete={minimalAthlete} />);
    expect(screen.getByText('No rating data available')).toBeInTheDocument();
  });
});
