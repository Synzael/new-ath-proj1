import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { OnboardingFlow } from '@/components/onboarding/onboarding-flow';
import { getOnboardingDraft, ONBOARDING_DRAFT_STORAGE_KEY } from '@/lib/onboarding-draft';

const mockPush = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

function skipVideo() {
  fireEvent.click(screen.getByText('Skip'));
}

function completePresentation(firstName: string) {
  const indicators = screen.getAllByRole('tab');
  fireEvent.click(indicators[3]);

  const input = screen.getByPlaceholderText('Enter your first name');
  fireEvent.change(input, { target: { value: firstName } });
  fireEvent.click(screen.getByText('Continue'));
}

describe('OnboardingFlow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
  });

  it('renders video phase initially', () => {
    render(<OnboardingFlow />);
    expect(screen.getByLabelText('Onboarding introduction video')).toBeInTheDocument();
  });

  it('transitions from video to presentation when Skip is clicked', () => {
    render(<OnboardingFlow />);
    skipVideo();
    expect(screen.getByText('Welcome to Overall 99')).toBeInTheDocument();
  });

  it('transitions to sport selection after presentation', async () => {
    render(<OnboardingFlow />);
    skipVideo();
    completePresentation('John');

    await waitFor(() => {
      expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
    });
  });

  it('stores onboarding draft and redirects to register on completion', async () => {
    render(<OnboardingFlow />);
    skipVideo();
    completePresentation('John');

    await waitFor(() => {
      expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Football'));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/register');
    });

    const draft = getOnboardingDraft();
    expect(draft?.firstName).toBe('John');
    expect(draft?.name).toBe('John');
    expect(draft?.sport).toBe('Football');
  });

  it('does not call onboarding API in guest mode', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch');

    render(<OnboardingFlow />);
    skipVideo();
    completePresentation('John');

    await waitFor(() => {
      expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Soccer'));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/register');
    });

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('does not show unauthorized error on completion', async () => {
    render(<OnboardingFlow />);
    skipVideo();
    completePresentation('John');

    await waitFor(() => {
      expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Basketball'));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/register');
    });

    expect(screen.queryByText('Unauthorized')).not.toBeInTheDocument();
  });

  it('calls onComplete callback after draft capture', async () => {
    const onComplete = vi.fn();

    render(<OnboardingFlow onComplete={onComplete} />);
    skipVideo();
    completePresentation('Sarah');

    await waitFor(() => {
      expect(screen.getByText('Sarah, what sport do you play?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Volleyball'));

    await waitFor(() => {
      expect(onComplete).toHaveBeenCalledTimes(1);
    });
  });

  it('uses compact sizing when compact prop is passed', () => {
    const { container } = render(<OnboardingFlow compact />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('min-h-[400px]');
    expect(wrapper.className).not.toContain('min-h-screen');
  });

  it('writes draft key to localStorage', async () => {
    render(<OnboardingFlow />);
    skipVideo();
    completePresentation('Mia');

    await waitFor(() => {
      expect(screen.getByText('Mia, what sport do you play?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Tennis'));

    await waitFor(() => {
      expect(localStorage.getItem(ONBOARDING_DRAFT_STORAGE_KEY)).toBeTruthy();
    });
  });
});
