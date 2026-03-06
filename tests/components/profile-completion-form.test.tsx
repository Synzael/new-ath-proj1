import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import { ProfileCompletionForm } from '@/components/onboarding/profile-completion-form';

const mockPush = vi.fn();
const mockRefresh = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    refresh: mockRefresh,
  }),
}));

describe('ProfileCompletionForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders athlete MVP fields', () => {
    render(
      <ProfileCompletionForm
        role="ATHLETE"
        initialValues={{
          name: '',
          sport: '',
          position: '',
          school: '',
          graduationYear: '',
          city: '',
          state: '',
          bio: '',
        }}
      />
    );

    expect(screen.getByLabelText('Full name')).toBeInTheDocument();
    expect(screen.getByLabelText('Sport')).toBeInTheDocument();
    expect(screen.getByLabelText('Position')).toBeInTheDocument();
    expect(screen.getByLabelText('School')).toBeInTheDocument();
    expect(screen.getByLabelText('Graduation year')).toBeInTheDocument();
    expect(screen.getByLabelText('Bio')).toBeInTheDocument();
  });

  it('submits athlete data and redirects to dashboard', async () => {
    render(
      <ProfileCompletionForm
        role="ATHLETE"
        initialValues={{
          name: 'John Doe',
          sport: 'Basketball',
          position: '',
          school: 'Lincoln High',
          graduationYear: '2027',
          city: 'Los Angeles',
          state: 'CA',
          bio: 'Lead guard.',
        }}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Save and continue' }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
    expect(mockRefresh).toHaveBeenCalled();
  });

  it('shows API errors inline', async () => {
    server.use(
      http.post('/api/onboarding/complete', () =>
        HttpResponse.json({ error: 'Sport is required' }, { status: 400 })
      )
    );

    render(
      <ProfileCompletionForm
        role="ATHLETE"
        initialValues={{
          name: 'John Doe',
          sport: '',
          position: '',
          school: '',
          graduationYear: '',
          city: '',
          state: '',
          bio: '',
        }}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Save and continue' }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Sport is required');
    });
  });

  it('renders coach-specific fields', () => {
    render(
      <ProfileCompletionForm
        role="COACH"
        initialValues={{
          name: '',
          organization: '',
          sport: '',
          roleTitle: '',
          bio: '',
        }}
      />
    );

    expect(screen.getByLabelText('Organization')).toBeInTheDocument();
    expect(screen.getByLabelText('Role')).toBeInTheDocument();
    expect(screen.queryByLabelText('Graduation year')).not.toBeInTheDocument();
  });
});
