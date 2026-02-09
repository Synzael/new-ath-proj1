import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AdminDashboard } from '@/components/dashboard/admin-dashboard';

const mockUser = {
  id: 'u1',
  name: 'Admin User',
  email: 'admin@example.com',
  image: null,
  role: 'ADMIN' as const,
  password: null,
  emailVerified: new Date(),
  onboardingComplete: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  athlete: null,
  coach: null,
  brand: null,
};

describe('AdminDashboard', () => {
  it('renders admin dashboard title', () => {
    render(<AdminDashboard user={mockUser} />);
    expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
  });

  it('renders stats grid', () => {
    render(<AdminDashboard user={mockUser} />);
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    // "Pending Verifications" appears in stats and section
    expect(screen.getAllByText('Pending Verifications').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Active Events')).toBeInTheDocument();
    expect(screen.getByText('Platform Health')).toBeInTheDocument();
  });

  it('renders stat values', () => {
    render(<AdminDashboard user={mockUser} />);
    expect(screen.getByText('15,234')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
  });

  it('renders pending verifications section', () => {
    render(<AdminDashboard user={mockUser} />);
    expect(screen.getByText('Coach Robert Smith')).toBeInTheDocument();
    expect(screen.getByText('SportWear Co')).toBeInTheDocument();
    expect(screen.getByText('PowerUp Energy')).toBeInTheDocument();
  });

  it('renders admin actions', () => {
    render(<AdminDashboard user={mockUser} />);
    expect(screen.getByText('Manage Users')).toBeInTheDocument();
    expect(screen.getByText('Verifications')).toBeInTheDocument();
    expect(screen.getByText('Manage Events')).toBeInTheDocument();
  });

  it('renders review buttons', () => {
    render(<AdminDashboard user={mockUser} />);
    const reviewButtons = screen.getAllByText('Review');
    expect(reviewButtons).toHaveLength(3);
  });
});
