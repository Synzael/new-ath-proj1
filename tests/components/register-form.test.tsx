import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import { RegisterForm } from '@/components/auth/register-form';
import { ONBOARDING_DRAFT_STORAGE_KEY } from '@/lib/onboarding-draft';

// Mock next/navigation
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock next-auth/react
const mockSignIn = vi.fn();
vi.mock('next-auth/react', () => ({
  signIn: (...args: unknown[]) => mockSignIn(...args),
}));

function fillRegistrationForm(
  overrides: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  } = {}
) {
  const {
    name = 'John Doe',
    email = 'john@example.com',
    password = 'password123',
    confirmPassword,
  } = overrides;
  fireEvent.change(screen.getByLabelText('Full Name'), {
    target: { value: name },
  });
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: email },
  });
  fireEvent.change(screen.getByLabelText(/^Password$/), {
    target: { value: password },
  });
  fireEvent.change(screen.getByLabelText('Confirm Password'), {
    target: { value: confirmPassword ?? password },
  });
}

describe('RegisterForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    mockSignIn.mockResolvedValue({ error: null });
  });

  it('renders all form fields', () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText(/^Password$/)).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();
  });

  it('renders role selector', () => {
    render(<RegisterForm />);

    expect(screen.getByText('I am a...')).toBeInTheDocument();
  });

  it('updates name input value', () => {
    render(<RegisterForm />);

    const nameInput = screen.getByLabelText('Full Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    expect(nameInput).toHaveValue('John Doe');
  });

  it('prefills name from onboarding draft when field is empty', () => {
    localStorage.setItem(
      ONBOARDING_DRAFT_STORAGE_KEY,
      JSON.stringify({
        version: 1,
        createdAt: Date.now(),
        firstName: 'Draft Athlete',
        sport: 'Football',
      })
    );

    render(<RegisterForm />);

    expect(screen.getByLabelText('Full Name')).toHaveValue('Draft Athlete');
  });

  it('updates email input value', () => {
    render(<RegisterForm />);

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    expect(emailInput).toHaveValue('john@example.com');
  });

  it('shows error for mismatched passwords', async () => {
    render(<RegisterForm />);

    fillRegistrationForm({ confirmPassword: 'different' });
    fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Passwords do not match');
    });
  });

  it('shows error for short password', async () => {
    render(<RegisterForm />);

    fillRegistrationForm({ password: '1234567', confirmPassword: '1234567' });
    fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Password must be at least 8 characters');
    });
  });

  it('redirects to onboarding on successful registration', async () => {
    render(<RegisterForm />);

    fillRegistrationForm();
    fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/onboarding');
    });
  });

  it('shows error on registration API failure', async () => {
    server.use(
      http.post('/api/auth/register', () => {
        return HttpResponse.json({ error: 'User with this email already exists' }, { status: 400 });
      })
    );

    render(<RegisterForm />);

    fillRegistrationForm({ email: 'existing@example.com' });
    fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('User with this email already exists');
    });
  });

  it('shows loading state while registering', async () => {
    server.use(
      http.post('/api/auth/register', async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return HttpResponse.json({ id: '123' });
      })
    );

    render(<RegisterForm />);

    fillRegistrationForm();
    fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

    await waitFor(() => {
      expect(screen.getByText('Creating account...')).toBeInTheDocument();
    });
  });

  it('shows password requirement hint', () => {
    render(<RegisterForm />);

    expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
  });

  it('shows links to terms and privacy', () => {
    render(<RegisterForm />);

    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('falls back to login page on auto-login failure', async () => {
    mockSignIn.mockResolvedValue({ error: 'SignInError' });

    render(<RegisterForm />);

    fillRegistrationForm();
    fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/login?registered=true');
    });
  });
});
