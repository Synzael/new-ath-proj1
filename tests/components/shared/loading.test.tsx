import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  LoadingSpinner,
  LoadingPage,
  LoadingCard,
  LoadingAthleteCard,
  LoadingAthleteList,
  LoadingDashboard,
} from '@/components/shared/loading';

describe('Loading Components', () => {
  describe('LoadingSpinner', () => {
    it('renders with loading role', () => {
      render(<LoadingSpinner />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders with sr-only text', () => {
      render(<LoadingSpinner />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('accepts custom className', () => {
      render(<LoadingSpinner className="custom-class" />);
      const spinner = screen.getByRole('status');
      expect(spinner.className).toContain('custom-class');
    });
  });

  describe('LoadingPage', () => {
    it('renders a spinner', () => {
      render(<LoadingPage />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });
  });

  describe('LoadingCard', () => {
    it('renders card structure', () => {
      const { container } = render(<LoadingCard />);
      expect(container.firstChild).toBeTruthy();
      expect(container.innerHTML.length).toBeGreaterThan(0);
    });
  });

  describe('LoadingAthleteCard', () => {
    it('renders card structure', () => {
      const { container } = render(<LoadingAthleteCard />);
      expect(container.firstChild).toBeTruthy();
      expect(container.innerHTML.length).toBeGreaterThan(0);
    });
  });

  describe('LoadingAthleteList', () => {
    it('renders default 5 cards', () => {
      const { container } = render(<LoadingAthleteList />);
      expect(container.firstChild?.childNodes.length).toBe(5);
    });

    it('renders custom count', () => {
      const { container } = render(<LoadingAthleteList count={3} />);
      expect(container.firstChild?.childNodes.length).toBe(3);
    });
  });

  describe('LoadingDashboard', () => {
    it('renders dashboard skeleton structure', () => {
      const { container } = render(<LoadingDashboard />);
      expect(container.firstChild).toBeTruthy();
      expect(container.firstChild?.childNodes.length).toBeGreaterThan(0);
    });
  });
});
