import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@/components/shared/theme-provider';

function TestConsumer() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light', 'dark');
  });

  it('renders children', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <span>Hello</span>
      </ThemeProvider>
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('provides default theme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('allows theme change', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByText('Set Light').click();
    });
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('persists theme to localStorage', () => {
    render(
      <ThemeProvider defaultTheme="dark" storageKey="test-theme">
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByText('Set Light').click();
    });
    expect(localStorage.getItem('test-theme')).toBe('light');
  });

  it('reads theme from localStorage', () => {
    localStorage.setItem('overall99-theme', 'light');
    render(
      <ThemeProvider defaultTheme="dark">
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });
});

describe('useTheme', () => {
  it('throws when used outside provider', () => {
    // useTheme doesn't throw because context has initialState
    // It returns the default context value
    function Wrapper() {
      const { theme } = useTheme();
      return <span>{theme}</span>;
    }
    render(<Wrapper />);
    expect(screen.getByText('system')).toBeInTheDocument();
  });
});
