import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StarRating } from '@/components/athletes/star-rating';

describe('StarRating', () => {
  it('renders 5 star buttons by default', () => {
    render(<StarRating rating={50} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  it('renders custom number of stars', () => {
    render(<StarRating rating={50} maxStars={3} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });

  it('shows value when showValue is true', () => {
    render(<StarRating rating={75} showValue />);
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('does not show value by default', () => {
    render(<StarRating rating={75} />);
    expect(screen.queryByText('75')).not.toBeInTheDocument();
  });

  it('has disabled buttons when not interactive', () => {
    render(<StarRating rating={50} />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  it('has enabled buttons when interactive', () => {
    render(<StarRating rating={50} interactive onRatingChange={() => {}} />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => {
      expect(btn).not.toBeDisabled();
    });
  });

  it('calls onRatingChange when clicked in interactive mode', () => {
    const onChange = vi.fn();
    render(<StarRating rating={50} interactive onRatingChange={onChange} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[2]); // Click 3rd star
    expect(onChange).toHaveBeenCalledWith(60); // (3/5) * 100
  });

  it('does not call onRatingChange when not interactive', () => {
    const onChange = vi.fn();
    render(<StarRating rating={50} onRatingChange={onChange} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders aria labels for each star', () => {
    render(<StarRating rating={50} />);
    expect(screen.getByLabelText('1 of 5 stars')).toBeInTheDocument();
    expect(screen.getByLabelText('5 of 5 stars')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container } = render(<StarRating rating={50} size="lg" />);
    expect(container.innerHTML).toContain('h-7');
  });

  it('accepts custom className', () => {
    const { container } = render(<StarRating rating={50} className="custom" />);
    expect(container.firstChild?.className).toContain('custom');
  });
});
