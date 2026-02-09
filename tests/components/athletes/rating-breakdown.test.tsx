import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RatingBreakdown } from '@/components/athletes/rating-breakdown';

const defaultProps = {
  overallScore: 85,
  performanceScore: 90,
  physicalScore: 80,
  academicScore: 75,
  socialScore: 60,
  evaluationScore: 70,
};

describe('RatingBreakdown', () => {
  it('renders overall score', () => {
    render(<RatingBreakdown {...defaultProps} />);
    expect(screen.getByText('85.0')).toBeInTheDocument();
  });

  it('renders "Rating Breakdown" title', () => {
    render(<RatingBreakdown {...defaultProps} />);
    expect(screen.getByText('Rating Breakdown')).toBeInTheDocument();
  });

  it('renders all category labels', () => {
    render(<RatingBreakdown {...defaultProps} />);
    // Each label appears twice (in the breakdown and in the legend)
    expect(screen.getAllByText('Performance').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Physical').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Academic').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Social').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Evaluation').length).toBeGreaterThanOrEqual(1);
  });

  it('renders weight percentages', () => {
    render(<RatingBreakdown {...defaultProps} />);
    expect(screen.getByText('(40%)')).toBeInTheDocument();
    expect(screen.getByText('(20%)')).toBeInTheDocument();
    expect(screen.getAllByText('(15%)').length).toBe(2);
    expect(screen.getByText('(10%)')).toBeInTheDocument();
  });

  it('renders category scores', () => {
    render(<RatingBreakdown {...defaultProps} />);
    expect(screen.getByText('90')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
    expect(screen.getByText('75')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
    expect(screen.getByText('70')).toBeInTheDocument();
  });

  it('renders score label for elite (90+)', () => {
    render(<RatingBreakdown {...defaultProps} overallScore={95} />);
    expect(screen.getByText('Elite')).toBeInTheDocument();
  });

  it('renders score label for excellent (75+)', () => {
    render(<RatingBreakdown {...defaultProps} overallScore={85} />);
    expect(screen.getByText('Excellent')).toBeInTheDocument();
  });

  it('renders score label for good (60+)', () => {
    render(<RatingBreakdown {...defaultProps} overallScore={65} />);
    expect(screen.getByText('Good')).toBeInTheDocument();
  });

  it('renders score label for average (40+)', () => {
    render(<RatingBreakdown {...defaultProps} overallScore={45} />);
    expect(screen.getByText('Average')).toBeInTheDocument();
  });

  it('renders score label for developing (<40)', () => {
    render(<RatingBreakdown {...defaultProps} overallScore={30} />);
    expect(screen.getByText('Developing')).toBeInTheDocument();
  });

  it('renders category descriptions', () => {
    render(<RatingBreakdown {...defaultProps} />);
    expect(screen.getByText('Athletic stats & achievements')).toBeInTheDocument();
    expect(screen.getByText('Height, weight, athleticism')).toBeInTheDocument();
    expect(screen.getByText('GPA & academic standing')).toBeInTheDocument();
    expect(screen.getByText('Following & engagement')).toBeInTheDocument();
    expect(screen.getByText('Coach & scout ratings')).toBeInTheDocument();
  });

  it('renders weight visualization', () => {
    render(<RatingBreakdown {...defaultProps} />);
    expect(screen.getByText('Overall score weighting:')).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    const { container } = render(<RatingBreakdown {...defaultProps} className="custom" />);
    expect(container.firstChild?.className).toContain('custom');
  });
});
