import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FloatingHome } from '@/components/shared/floating-home';

const mockPathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
}));

describe('FloatingHome', () => {
  it('renders nothing on homepage', () => {
    mockPathname.mockReturnValue('/');
    const { container } = render(<FloatingHome />);
    expect(container.firstChild).toBeNull();
  });

  it('renders home button on non-homepage', () => {
    mockPathname.mockReturnValue('/athletes');
    render(<FloatingHome />);
    expect(screen.getByLabelText('Go to homepage')).toBeInTheDocument();
  });
});
