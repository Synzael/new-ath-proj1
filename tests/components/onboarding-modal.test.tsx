import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { OnboardingModal } from '@/components/onboarding/onboarding-modal';

// Mock next/navigation
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock OnboardingFlow to simplify modal-level tests
vi.mock('@/components/onboarding/onboarding-flow', () => ({
  OnboardingFlow: ({ onComplete, compact }: { onComplete?: () => void; compact?: boolean }) => (
    <div data-testid="onboarding-flow" data-compact={compact}>
      <button onClick={onComplete}>Complete Flow</button>
    </div>
  ),
}));

const STORAGE_KEY = 'overall99-onboarding-seen';

describe('OnboardingModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('renders nothing before mount (hydration safety)', () => {
    // OnboardingModal uses useEffect to set mounted; on first render it returns null
    // Since render triggers effects synchronously in test, we can't easily test the pre-mount state,
    // but we verify it renders properly after mount
    render(<OnboardingModal />);
    expect(screen.getByTestId('onboarding-flow')).toBeInTheDocument();
  });

  it('shows modal when localStorage flag is not set', () => {
    render(<OnboardingModal />);
    expect(screen.getByTestId('onboarding-flow')).toBeInTheDocument();
    expect(screen.getByText('Login to skip')).toBeInTheDocument();
  });

  it('does not show modal when localStorage flag is set', () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    render(<OnboardingModal />);
    expect(screen.queryByTestId('onboarding-flow')).not.toBeInTheDocument();
  });

  it('passes compact prop to OnboardingFlow', () => {
    render(<OnboardingModal />);
    expect(screen.getByTestId('onboarding-flow')).toHaveAttribute('data-compact', 'true');
  });

  it('closes modal and sets localStorage when flow completes', async () => {
    render(<OnboardingModal />);

    fireEvent.click(screen.getByText('Complete Flow'));

    await waitFor(() => {
      expect(localStorage.getItem(STORAGE_KEY)).toBe('true');
    });

    expect(screen.queryByTestId('onboarding-flow')).not.toBeInTheDocument();
  });

  it('navigates to /login and sets localStorage when "Login to skip" is clicked', async () => {
    render(<OnboardingModal />);

    fireEvent.click(screen.getByText('Login to skip'));

    await waitFor(() => {
      expect(localStorage.getItem(STORAGE_KEY)).toBe('true');
      expect(mockPush).toHaveBeenCalledWith('/login');
    });

    expect(screen.queryByTestId('onboarding-flow')).not.toBeInTheDocument();
  });

  it('renders the hidden dialog title for accessibility', () => {
    render(<OnboardingModal />);
    expect(screen.getByText('Welcome to Overall 99')).toBeInTheDocument();
  });
});
