import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Providers } from '@/components/providers';

vi.mock('next-auth/react', () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="session-provider">{children}</div>
  ),
}));

vi.mock('@/components/shared/theme-provider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

vi.mock('@/components/ui/sonner', () => ({
  Toaster: () => <div data-testid="toaster" />,
}));

describe('Providers', () => {
  it('renders children', () => {
    render(
      <Providers>
        <span>Hello World</span>
      </Providers>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('wraps with SessionProvider', () => {
    render(
      <Providers>
        <span>Child</span>
      </Providers>
    );
    expect(screen.getByTestId('session-provider')).toBeInTheDocument();
  });

  it('wraps with ThemeProvider', () => {
    render(
      <Providers>
        <span>Child</span>
      </Providers>
    );
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument();
  });

  it('includes Toaster', () => {
    render(
      <Providers>
        <span>Child</span>
      </Providers>
    );
    expect(screen.getByTestId('toaster')).toBeInTheDocument();
  });
});
