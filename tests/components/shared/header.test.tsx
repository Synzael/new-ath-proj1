import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/shared/header';
import type { SessionUser } from '@/types';

const mockSignOut = vi.fn();

vi.mock('next/navigation', () => ({
  usePathname: () => '/dashboard',
}));

vi.mock('next-auth/react', () => ({
  signOut: (...args: unknown[]) => mockSignOut(...args),
}));

vi.mock('@/components/shared/theme-provider', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: vi.fn(),
  }),
}));

const mockUser: SessionUser = {
  id: 'u1',
  email: 'john@example.com',
  name: 'John Doe',
  image: null,
  role: 'ATHLETE',
};

describe('Header', () => {
  it('renders logo', () => {
    render(<Header user={null} />);
    expect(screen.getByText('Overall 99')).toBeInTheDocument();
  });

  it('renders sign in and get started when no user', () => {
    render(<Header user={null} />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders user name when logged in', () => {
    render(<Header user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders navigation links for logged in users', () => {
    render(<Header user={mockUser} />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Athletes')).toBeInTheDocument();
    expect(screen.getByText('Rankings')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('NIL Marketplace')).toBeInTheDocument();
  });

  it('does not render nav links when no user', () => {
    render(<Header user={null} />);
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<Header user={mockUser} />);
    expect(screen.getByLabelText(/Switch to .* mode/)).toBeInTheDocument();
  });

  it('renders sign out button for logged in users', () => {
    render(<Header user={mockUser} />);
    expect(screen.getByLabelText('Sign out')).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<Header user={mockUser} />);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('renders user initials in avatar fallback', () => {
    render(<Header user={mockUser} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
