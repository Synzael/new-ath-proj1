import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { PresentationSlide } from '@/components/onboarding/presentation-slide';

describe('PresentationSlide', () => {
  it('renders first slide with welcome message', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    expect(screen.getByText('Welcome to Overall 99')).toBeInTheDocument();
    expect(screen.getByText(/premier platform/i)).toBeInTheDocument();
  });

  it('renders progress bar', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows Back and Next buttons', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('disables Back button on first slide', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    expect(screen.getByText('Back').closest('button')).toBeDisabled();
  });

  it('navigates to next slide on Next click', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    fireEvent.click(screen.getByText('Next'));

    expect(screen.getByText('Get Discovered')).toBeInTheDocument();
  });

  it('enables Back button after navigating forward', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    fireEvent.click(screen.getByText('Next'));

    expect(screen.getByText('Back').closest('button')).not.toBeDisabled();
  });

  it('navigates back on Back click', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    // Go forward
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Get Discovered')).toBeInTheDocument();

    // Go back
    fireEvent.click(screen.getByText('Back'));
    expect(screen.getByText('Welcome to Overall 99')).toBeInTheDocument();
  });

  it('shows slide indicators', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    const indicators = screen.getAllByRole('tab');
    expect(indicators).toHaveLength(4);
  });

  it('navigates to slide when clicking indicator', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[2]); // Click 3rd slide indicator

    expect(screen.getByText('NIL Opportunities')).toBeInTheDocument();
  });

  it('shows name input on last slide', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    expect(screen.getByPlaceholderText('Enter your first name')).toBeInTheDocument();
    expect(screen.getByText("Let's get started")).toBeInTheDocument();
  });

  it('shows Continue button on last slide', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('disables Continue when name is empty', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    expect(screen.getByText('Continue').closest('button')).toBeDisabled();
  });

  it('enables Continue when name is entered', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: 'John' } });

    expect(screen.getByText('Continue').closest('button')).not.toBeDisabled();
  });

  it('calls onComplete with firstName when Continue clicked', () => {
    const onComplete = vi.fn();
    render(<PresentationSlide onComplete={onComplete} />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    // Enter name
    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: 'John' } });

    // Click Continue
    fireEvent.click(screen.getByText('Continue'));

    expect(onComplete).toHaveBeenCalledWith('John');
  });

  it('trims whitespace from firstName', () => {
    const onComplete = vi.fn();
    render(<PresentationSlide onComplete={onComplete} />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    // Enter name with whitespace
    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: '  Sarah  ' } });

    // Click Continue
    fireEvent.click(screen.getByText('Continue'));

    expect(onComplete).toHaveBeenCalledWith('Sarah');
  });

  it('does not call onComplete with empty name', () => {
    const onComplete = vi.fn();
    render(<PresentationSlide onComplete={onComplete} />);

    // Navigate to last slide
    const indicators = screen.getAllByRole('tab');
    fireEvent.click(indicators[3]);

    // Leave name empty
    const input = screen.getByPlaceholderText('Enter your first name');
    fireEvent.change(input, { target: { value: '   ' } });

    // Continue should be disabled
    expect(screen.getByText('Continue').closest('button')).toBeDisabled();
  });
});

describe('PresentationSlide compact mode', () => {
  it('uses compact sizing when compact prop is true', () => {
    const { container } = render(<PresentationSlide onComplete={vi.fn()} compact />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('min-h-[400px]');
    expect(wrapper.className).not.toContain('min-h-screen');
  });

  it('uses full-screen sizing when compact is false', () => {
    const { container } = render(<PresentationSlide onComplete={vi.fn()} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('min-h-screen');
  });
});

describe('PresentationSlide autoplay', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('auto-advances to next slide after interval', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);
    expect(screen.getByText('Welcome to Overall 99')).toBeInTheDocument();

    act(() => { vi.advanceTimersByTime(5000); });

    expect(screen.getByText('Get Discovered')).toBeInTheDocument();
  });

  it('auto-advances through multiple slides', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    act(() => { vi.advanceTimersByTime(5000); });
    expect(screen.getByText('Get Discovered')).toBeInTheDocument();

    act(() => { vi.advanceTimersByTime(5000); });
    expect(screen.getByText('NIL Opportunities')).toBeInTheDocument();
  });

  it('does NOT auto-advance on the last slide', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    // Advance through 3 slides to reach last (name input)
    act(() => { vi.advanceTimersByTime(5000); }); // slide 0 -> 1
    act(() => { vi.advanceTimersByTime(5000); }); // slide 1 -> 2
    act(() => { vi.advanceTimersByTime(5000); }); // slide 2 -> 3

    expect(screen.getByText("Let's get started")).toBeInTheDocument();

    // Wait extra time
    act(() => { vi.advanceTimersByTime(10000); });

    // Should still be on the last slide
    expect(screen.getByText("Let's get started")).toBeInTheDocument();
  });

  it('resets timer when user manually navigates', () => {
    render(<PresentationSlide onComplete={vi.fn()} />);

    // Wait 3 seconds (should NOT auto-advance yet)
    act(() => { vi.advanceTimersByTime(3000); });
    expect(screen.getByText('Welcome to Overall 99')).toBeInTheDocument();

    // Manually click Next
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Get Discovered')).toBeInTheDocument();

    // Timer should reset -- 3 more seconds should NOT advance
    act(() => { vi.advanceTimersByTime(3000); });
    expect(screen.getByText('Get Discovered')).toBeInTheDocument();

    // Full 5 seconds after manual nav SHOULD advance
    act(() => { vi.advanceTimersByTime(2000); });
    expect(screen.getByText('NIL Opportunities')).toBeInTheDocument();
  });

  it('accepts custom autoPlayInterval prop', () => {
    render(<PresentationSlide onComplete={vi.fn()} autoPlayInterval={3000} />);

    act(() => { vi.advanceTimersByTime(3000); });
    expect(screen.getByText('Get Discovered')).toBeInTheDocument();
  });

  it('cleans up timer on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');
    const { unmount } = render(<PresentationSlide onComplete={vi.fn()} />);

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });
});
