import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import { ProfileCompletionForm } from '@/components/onboarding/profile-completion-form';
import { getOnboardingDraft, ONBOARDING_DRAFT_STORAGE_KEY } from '@/lib/onboarding-draft';

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
    localStorage.clear();
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
    localStorage.setItem(
      ONBOARDING_DRAFT_STORAGE_KEY,
      JSON.stringify({
        version: 1,
        createdAt: Date.now(),
        firstName: 'Legacy Name',
        sport: 'Football',
      })
    );

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
    expect(localStorage.getItem(ONBOARDING_DRAFT_STORAGE_KEY)).toBeNull();
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

  it('hydrates empty athlete fields from guest onboarding draft', async () => {
    localStorage.setItem(
      ONBOARDING_DRAFT_STORAGE_KEY,
      JSON.stringify({
        version: 1,
        createdAt: Date.now(),
        name: 'Draft Name',
        sport: 'Soccer',
      })
    );

    let capturedPayload: Record<string, unknown> | null = null;
    server.use(
      http.post('/api/onboarding/complete', async ({ request }) => {
        capturedPayload = (await request.json()) as Record<string, unknown>;
        return HttpResponse.json({ success: true });
      })
    );

    expect(getOnboardingDraft()?.sport).toBe('Soccer');

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

    fireEvent.click(screen.getByRole('button', { name: 'Save and continue' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Full name')).toHaveValue('Draft Name');
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });

    expect(capturedPayload?.name).toBe('Draft Name');
    expect(capturedPayload?.sport).toBe('Soccer');
  });

  it('ignores expired onboarding draft', () => {
    localStorage.setItem(
      ONBOARDING_DRAFT_STORAGE_KEY,
      JSON.stringify({
        version: 1,
        createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000,
        name: 'Expired Draft',
        sport: 'Basketball',
      })
    );

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

    expect(screen.getByLabelText('Full name')).toHaveValue('');
    expect(localStorage.getItem(ONBOARDING_DRAFT_STORAGE_KEY)).toBeNull();
  });
});
