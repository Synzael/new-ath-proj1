import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should display login page', async ({ page }) => {
    await page.goto('/login');

    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test('should display register page', async ({ page }) => {
    await page.goto('/register');

    await expect(page.getByRole('heading', { name: 'Create an account' })).toBeVisible();
    await expect(page.getByLabel('Full Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
  });

  test('should navigate between login and register', async ({ page }) => {
    await page.goto('/login');

    await page.getByRole('link', { name: 'Create one now' }).click();
    await expect(page).toHaveURL('/register');

    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('/login');
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Email').fill('invalid@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByRole('alert')).toContainText('Invalid email or password');
  });

  test('should show validation errors on register', async ({ page }) => {
    await page.goto('/register');

    // Try to submit with mismatched passwords
    await page.getByLabel('Full Name').fill('Test User');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password', { exact: true }).fill('password123');
    await page.getByLabel('Confirm Password').fill('different');
    await page.getByRole('button', { name: 'Create Account' }).click();

    await expect(page.getByRole('alert')).toContainText('Passwords do not match');
  });
});

test.describe('Homepage', () => {
  test('should display homepage content', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Athletic Excellence');
    await expect(page.getByRole('link', { name: 'Create Your Profile' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Rankings' })).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check for main navigation links
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();

    // Check theme toggle accessibility
    const themeButton = page.getByRole('button', { name: /switch to/i });
    await expect(themeButton).toBeVisible();
    await expect(themeButton).toHaveAttribute('aria-label');
  });
});

test.describe('Rankings Page', () => {
  test('should display rankings page', async ({ page }) => {
    await page.goto('/rankings');

    await expect(page.getByRole('heading', { name: 'Rankings' })).toBeVisible();
  });
});
