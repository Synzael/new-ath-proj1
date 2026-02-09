import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SportSelector } from '@/components/onboarding/sport-selector';

describe('SportSelector', () => {
  it('displays personalized greeting with firstName', () => {
    render(<SportSelector firstName="John" onSelect={vi.fn()} />);

    expect(screen.getByText('John, what sport do you play?')).toBeInTheDocument();
  });

  it('renders all 12 sport options', () => {
    render(<SportSelector firstName="John" onSelect={vi.fn()} />);

    const sports = [
      'Baseball', 'Football', 'Basketball', 'Soccer',
      'Motocross', 'MMA', 'Boxing', 'Wrestling',
      'Volleyball', 'Golf', 'Skiing', 'Tennis',
    ];

    sports.forEach((sport) => {
      expect(screen.getByText(sport)).toBeInTheDocument();
    });
  });

  it('renders Coaches & Other Influencers button', () => {
    render(<SportSelector firstName="John" onSelect={vi.fn()} />);

    expect(screen.getByText('Coaches & Other Influencers')).toBeInTheDocument();
  });

  it('calls onSelect when a sport is clicked', () => {
    const onSelect = vi.fn();
    render(<SportSelector firstName="John" onSelect={onSelect} />);

    fireEvent.click(screen.getByText('Basketball'));

    expect(onSelect).toHaveBeenCalledWith('Basketball');
  });

  it('calls onSelect when Football is clicked', () => {
    const onSelect = vi.fn();
    render(<SportSelector firstName="John" onSelect={onSelect} />);

    fireEvent.click(screen.getByText('Football'));

    expect(onSelect).toHaveBeenCalledWith('Football');
  });

  it('calls onSelect for Coaches option', () => {
    const onSelect = vi.fn();
    render(<SportSelector firstName="John" onSelect={onSelect} />);

    fireEvent.click(screen.getByText('Coaches & Other Influencers'));

    expect(onSelect).toHaveBeenCalledWith('Coaches & Other Influencers');
  });

  it('disables buttons after selection', () => {
    const onSelect = vi.fn();
    render(<SportSelector firstName="John" onSelect={onSelect} />);

    fireEvent.click(screen.getByText('Basketball'));

    // After clicking, the buttons should be disabled
    expect(screen.getByText('Football')).toBeDisabled();
  });

  it('has accessible menu button', () => {
    render(<SportSelector firstName="John" onSelect={vi.fn()} />);

    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
  });

  it('displays greeting with different firstName', () => {
    render(<SportSelector firstName="Sarah" onSelect={vi.fn()} />);

    expect(screen.getByText('Sarah, what sport do you play?')).toBeInTheDocument();
  });
});
