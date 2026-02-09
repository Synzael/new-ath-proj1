import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CoachDashboard } from '@/components/dashboard/coach-dashboard';

const mockUser = {
  id: 'u1',
  name: 'Coach Robert',
  email: 'coach@example.com',
  image: null,
  role: 'COACH' as const,
  password: null,
  emailVerified: new Date(),
  onboardingComplete: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  athlete: null,
  coach: {
    id: 'c1',
    userId: 'u1',
    school: 'State University',
    sport: 'Basketball',
    title: 'Head Coach',
    verified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  brand: null,
};

describe('CoachDashboard', () => {
  it('renders welcome message', () => {
    render(<CoachDashboard user={mockUser} />);
    expect(screen.getByText(/Welcome, Coach Robert!/)).toBeInTheDocument();
  });

  it('renders school and sport info', () => {
    render(<CoachDashboard user={mockUser} />);
    expect(screen.getByText(/State University/)).toBeInTheDocument();
    expect(screen.getByText(/Basketball/)).toBeInTheDocument();
  });

  it('renders stats grid', () => {
    render(<CoachDashboard user={mockUser} />);
    // "Saved Athletes" appears in stats and section
    expect(screen.getAllByText('Saved Athletes').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Profile Searches')).toBeInTheDocument();
    expect(screen.getByText('Messages Sent')).toBeInTheDocument();
    expect(screen.getByText('Athletes Viewed')).toBeInTheDocument();
  });

  it('renders saved athletes section', () => {
    render(<CoachDashboard user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Michael Johnson')).toBeInTheDocument();
  });

  it('renders quick actions', () => {
    render(<CoachDashboard user={mockUser} />);
    expect(screen.getByText('Search Athletes')).toBeInTheDocument();
    expect(screen.getByText('View Rankings')).toBeInTheDocument();
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
  });
});
