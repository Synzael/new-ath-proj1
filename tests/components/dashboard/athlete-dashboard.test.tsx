import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AthleteDashboard } from '@/components/dashboard/athlete-dashboard';

const mockUser = {
  id: 'u1',
  name: 'John Doe',
  email: 'john@example.com',
  image: null,
  role: 'ATHLETE' as const,
  password: null,
  emailVerified: new Date(),
  onboardingComplete: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  athlete: {
    id: 'a1',
    userId: 'u1',
    bio: 'Test bio',
    sport: 'Basketball',
    position: 'Guard',
    school: null,
    classYear: null,
    height: 74,
    weight: 200,
    gpa: 3.5,
    satScore: null,
    actScore: null,
    city: null,
    state: null,
    dateOfBirth: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    ratings: [{
      id: 'r1',
      athleteId: 'a1',
      overallScore: 85,
      performanceScore: 90,
      physicalScore: 80,
      academicScore: 75,
      socialScore: 60,
      evaluationScore: 70,
      percentile: 88,
      calculatedAt: new Date(),
    }],
  },
  coach: null,
  brand: null,
};

const mockUserNoRating = {
  ...mockUser,
  athlete: {
    ...mockUser.athlete,
    ratings: [],
  },
};

const mockUserNoBio = {
  ...mockUser,
  athlete: {
    ...mockUser.athlete,
    bio: null,
  },
};

describe('AthleteDashboard', () => {
  it('renders welcome message with first name', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.getByText(/Welcome back, John!/)).toBeInTheDocument();
  });

  it('renders stats grid', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.getByText('Overall Rating')).toBeInTheDocument();
    expect(screen.getByText('Profile Views')).toBeInTheDocument();
    // "Upcoming Events" and "NIL Offers" appear in both stats and sections
    expect(screen.getAllByText('Upcoming Events').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('NIL Offers').length).toBeGreaterThanOrEqual(1);
  });

  it('renders rating value when available', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.getByText('85.0')).toBeInTheDocument();
  });

  it('shows N/A when no rating', () => {
    render(<AthleteDashboard user={mockUserNoRating} />);
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });

  it('renders rating breakdown with scores', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.getByText('Performance (40%)')).toBeInTheDocument();
    expect(screen.getByText('Physical (20%)')).toBeInTheDocument();
    expect(screen.getByText('Academic (15%)')).toBeInTheDocument();
  });

  it('shows no rating message when no data', () => {
    render(<AthleteDashboard user={mockUserNoRating} />);
    expect(screen.getByText('No rating data available yet')).toBeInTheDocument();
  });

  it('shows profile completion alert when no bio', () => {
    render(<AthleteDashboard user={mockUserNoBio} />);
    expect(screen.getByText('Complete your profile')).toBeInTheDocument();
  });

  it('does not show completion alert when bio exists', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.queryByText('Complete your profile')).not.toBeInTheDocument();
  });

  it('renders quick actions', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.getByText('Edit Profile')).toBeInTheDocument();
    expect(screen.getByText('Upload Video')).toBeInTheDocument();
    expect(screen.getByText('View Rankings')).toBeInTheDocument();
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
  });

  it('renders recent activity', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
    expect(screen.getByText('Coach Smith viewed your profile')).toBeInTheDocument();
  });

  it('renders upcoming events', () => {
    render(<AthleteDashboard user={mockUser} />);
    expect(screen.getByText('Summer Basketball Showcase')).toBeInTheDocument();
    expect(screen.getByText('Registered')).toBeInTheDocument();
  });
});
