import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrandDashboard } from '@/components/dashboard/brand-dashboard';

const mockUser = {
  id: 'u1',
  name: 'Brand Manager',
  email: 'brand@example.com',
  image: null,
  role: 'BRAND' as const,
  password: null,
  emailVerified: new Date(),
  onboardingComplete: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  athlete: null,
  coach: null,
  brand: {
    id: 'b1',
    userId: 'u1',
    companyName: 'SportWear Co',
    industry: 'Athletic Apparel',
    website: 'https://sportwear.co',
    description: 'A sports brand',
    verified: true,
    logo: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

const mockUserUnverified = {
  ...mockUser,
  brand: { ...mockUser.brand, verified: false },
};

describe('BrandDashboard', () => {
  it('renders welcome with company name', () => {
    render(<BrandDashboard user={mockUser} />);
    expect(screen.getByText(/Welcome, SportWear Co!/)).toBeInTheDocument();
  });

  it('renders stats grid', () => {
    render(<BrandDashboard user={mockUser} />);
    expect(screen.getByText('Active Deals')).toBeInTheDocument();
    expect(screen.getByText('Total Investment')).toBeInTheDocument();
    expect(screen.getByText('Athletes Reached')).toBeInTheDocument();
    expect(screen.getByText('Engagement Rate')).toBeInTheDocument();
  });

  it('renders active campaigns', () => {
    render(<BrandDashboard user={mockUser} />);
    expect(screen.getByText('Active Campaigns')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('renders quick actions', () => {
    render(<BrandDashboard user={mockUser} />);
    expect(screen.getByText('Find Athletes')).toBeInTheDocument();
    expect(screen.getByText('Create Offer')).toBeInTheDocument();
    expect(screen.getByText('Top Athletes')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
  });

  it('shows verification pending for unverified brands', () => {
    render(<BrandDashboard user={mockUserUnverified} />);
    expect(screen.getByText('Verification Pending')).toBeInTheDocument();
    // "Pending" appears in both verification banner and campaigns
    expect(screen.getAllByText('Pending').length).toBeGreaterThanOrEqual(1);
  });

  it('does not show verification alert for verified brands', () => {
    render(<BrandDashboard user={mockUser} />);
    expect(screen.queryByText('Verification Pending')).not.toBeInTheDocument();
  });
});
