import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrandCard } from '@/components/marketplace/brand-card';

const baseBrand = {
  id: 'b1',
  companyName: 'SportWear Co',
  industry: 'Athletic Apparel',
  website: 'https://sportwear.co',
  description: 'Premium sports apparel brand',
  logo: null,
  verified: true,
  offerCount: 5,
  user: { name: 'Brand Manager', image: null },
};

describe('BrandCard', () => {
  it('renders company name', () => {
    render(<BrandCard brand={baseBrand} />);
    expect(screen.getByText('SportWear Co')).toBeInTheDocument();
  });

  it('renders industry badge', () => {
    render(<BrandCard brand={baseBrand} />);
    expect(screen.getByText('Athletic Apparel')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<BrandCard brand={baseBrand} />);
    expect(screen.getByText('Premium sports apparel brand')).toBeInTheDocument();
  });

  it('renders offer count', () => {
    render(<BrandCard brand={baseBrand} />);
    expect(screen.getByText('5 active offers')).toBeInTheDocument();
  });

  it('renders verified icon for verified brands', () => {
    render(<BrandCard brand={baseBrand} />);
    expect(screen.getByLabelText('Verified')).toBeInTheDocument();
  });

  it('does not render verified icon for unverified brands', () => {
    render(<BrandCard brand={{ ...baseBrand, verified: false }} />);
    expect(screen.queryByLabelText('Verified')).not.toBeInTheDocument();
  });

  it('renders View Offers button', () => {
    render(<BrandCard brand={baseBrand} />);
    expect(screen.getByText('View Offers')).toBeInTheDocument();
  });

  it('renders website link when present', () => {
    render(<BrandCard brand={baseBrand} />);
    expect(screen.getByLabelText('Visit website')).toBeInTheDocument();
  });

  it('does not render website link when absent', () => {
    render(<BrandCard brand={{ ...baseBrand, website: null }} />);
    expect(screen.queryByLabelText('Visit website')).not.toBeInTheDocument();
  });

  it('handles missing optional fields', () => {
    render(<BrandCard brand={{ ...baseBrand, industry: null, description: null }} />);
    expect(screen.getByText('SportWear Co')).toBeInTheDocument();
  });

  it('links to brand marketplace page', () => {
    render(<BrandCard brand={baseBrand} />);
    const viewOffersLink = screen.getByText('View Offers').closest('a');
    expect(viewOffersLink?.getAttribute('href')).toBe('/marketplace/b1');
  });
});
