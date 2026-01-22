import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import { OnboardingFlow } from '@/components/onboarding/onboarding-flow';

// Mock next/navigation
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('OnboardingFlow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders presentation phase initially', () => {
    render(<OnboardingFlow />);

    expect(screen.getByText('Welcome to Overall 99')).toBeInTheDocument();
  });

  it('transitions to sport selection after presentation', async () => {
    render(<OnboardingFlow />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    // Enter name
    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: 'John' } });

    // Click Continue
    fireEvent.click(screen.getByText('Continue'));

    // Should now show sport selector with personalized greeting
    await waitFor(() => {
      expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
    });
  });

  it('redirects to dashboard on successful completion', async () => {
    render(<OnboardingFlow />);

    // Complete presentation
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);
    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(screen.getByText('Continue'));

    // Wait for sport selector
    await waitFor(() => {
      expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
    });

    // Select a sport
    fireEvent.click(screen.getByText('Football'));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('shows error message on API failure', async () => {
    server.use(
      http.post('/api/onboarding/complete', () => {
        return HttpResponse.json({ error: 'Server error' }, { status: 400 });
      })
    );

    render(<OnboardingFlow />);

    // Complete presentation
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);
    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(screen.getByText('Continue'));

    // Wait for sport selector
    await waitFor(() => {
      expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
    });

    // Select a sport
    fireEvent.click(screen.getByText('Soccer'));

    await waitFor(() => {
      expect(screen.getByText('Server error')).toBeInTheDocument();
    });
  });

  it('preserves firstName across phase transition', async () => {
    render(<OnboardingFlow />);

    // Complete presentation with specific name
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);
    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: 'Sarah' } });
    fireEvent.click(screen.getByText('Continue'));

    // Verify name is used in sport selector
    await waitFor(() => {
      expect(screen.getByText('Sarah, what sport do you play?')).toBeInTheDocument();
    });
  });
});
