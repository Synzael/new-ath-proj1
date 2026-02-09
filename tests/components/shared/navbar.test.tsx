import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/shared/navbar';

const mockSignOut = vi.fn();
vi.mock('next-auth/react', () => ({
  useSession: vi.fn(),
  signOut: (...args: unknown[]) => mockSignOut(...args),
}));

import { useSession } from 'next-auth/react';
const mockUseSession = useSession as unknown as ReturnType<typeof vi.fn>;

describe('Navbar', () => {
  it('renders logo', () => {
    mockUseSession.mockReturnValue({ data: null, status: 'unauthenticated' });
    render(<Navbar />);
    expect(screen.getByText('Overall 99')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    mockUseSession.mockReturnValue({ data: null, status: 'unauthenticated' });
    render(<Navbar />);
    expect(screen.getByText('Athletes')).toBeInTheDocument();
    expect(screen.getByText('Rankings')).toBeInTheDocument();
    expect(screen.getByText('NIL Marketplace')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
  });

  it('renders sign in and get started buttons when unauthenticated', () => {
    mockUseSession.mockReturnValue({ data: null, status: 'unauthenticated' });
    render(<Navbar />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    mockUseSession.mockReturnValue({ data: null, status: 'loading' });
    const { container } = render(<Navbar />);
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders user menu when authenticated', () => {
    mockUseSession.mockReturnValue({
      data: {
        user: { name: 'John Doe', email: 'john@example.com', image: null },
      },
      status: 'authenticated',
    });
    render(<Navbar />);
    expect(screen.getByLabelText('Open user menu')).toBeInTheDocument();
  });

  it('renders dashboard link when authenticated', () => {
    mockUseSession.mockReturnValue({
      data: {
        user: { name: 'John Doe', email: 'john@example.com', image: null },
      },
      status: 'authenticated',
    });
    render(<Navbar />);
    const dashboardLinks = screen.getAllByText('Dashboard');
    expect(dashboardLinks.length).toBeGreaterThan(0);
  });

  it('renders mobile menu button', () => {
    mockUseSession.mockReturnValue({ data: null, status: 'unauthenticated' });
    render(<Navbar />);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});
