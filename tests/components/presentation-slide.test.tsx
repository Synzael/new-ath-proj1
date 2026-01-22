import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
