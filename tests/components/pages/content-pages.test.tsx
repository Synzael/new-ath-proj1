import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';
import PrivacyPage from '@/app/privacy/page';
import TermsPage from '@/app/terms/page';
import CookiesPage from '@/app/cookies/page';
import ContactPage from '@/app/contact/page';

describe('Content pages', () => {
  it('renders About page mission content', () => {
    render(<AboutPage />);

    expect(screen.getByRole('heading', { name: 'About Overall 99' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Our Mission' })).toBeInTheDocument();
    expect(screen.getByText(/connect athletes with college recruiters and NIL opportunities/i)).toBeInTheDocument();
  });

  it('renders Privacy page with minors and sharing clauses', () => {
    render(<PrivacyPage />);

    expect(screen.getByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Minors Under 18' })).toBeInTheDocument();
    expect(screen.getByText(/shared with registered recruiters/i)).toBeInTheDocument();
    expect(screen.getByText(/\[Insert Contact Email\]/)).toBeInTheDocument();
  });

  it('renders Terms page disclaimers', () => {
    render(<TermsPage />);

    expect(screen.getByRole('heading', { name: 'Terms of Service' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'No Scholarship or NIL Guarantee' })).toBeInTheDocument();
    expect(screen.getByText(/do not guarantee college recruitment outcomes/i)).toBeInTheDocument();
    expect(screen.getByText(/\[Insert Jurisdiction\]/)).toBeInTheDocument();
  });

  it('renders Cookie page essentials and analytics sections', () => {
    render(<CookiesPage />);

    expect(screen.getByRole('heading', { name: 'Cookie Policy' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Essential Cookies' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Analytics Cookies' })).toBeInTheDocument();
  });

  it('renders Contact page guidance and placeholders', () => {
    render(<ContactPage />);

    expect(screen.getByRole('heading', { name: 'Contact Overall 99' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'General Support' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Legal and Privacy Requests' })).toBeInTheDocument();
    expect(screen.getAllByText(/\[Insert Contact Email\]/)).toHaveLength(2);
  });
});
