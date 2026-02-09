import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OnboardingVideo } from '@/components/onboarding/onboarding-video';

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
});

describe('OnboardingVideo', () => {
  it('renders a video element', () => {
    render(<OnboardingVideo onComplete={vi.fn()} />);
    const video = screen.getByLabelText('Onboarding introduction video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/onboardingvideo.mp4');
  });

  it('renders a Skip button', () => {
    render(<OnboardingVideo onComplete={vi.fn()} />);
    expect(screen.getByText('Skip')).toBeInTheDocument();
  });

  it('calls onComplete when Skip is clicked', () => {
    const onComplete = vi.fn();
    render(<OnboardingVideo onComplete={onComplete} />);
    fireEvent.click(screen.getByText('Skip'));
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('calls onComplete when video ends', () => {
    const onComplete = vi.fn();
    render(<OnboardingVideo onComplete={onComplete} />);
    const video = screen.getByLabelText('Onboarding introduction video');
    fireEvent.ended(video);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('hides Skip button after video ends', () => {
    render(<OnboardingVideo onComplete={vi.fn()} />);
    const video = screen.getByLabelText('Onboarding introduction video');
    fireEvent.ended(video);
    expect(screen.queryByText('Skip')).not.toBeInTheDocument();
  });

  it('has playsInline attribute for mobile support', () => {
    render(<OnboardingVideo onComplete={vi.fn()} />);
    const video = screen.getByLabelText('Onboarding introduction video');
    expect(video).toHaveAttribute('playsinline');
  });

  it('has controls attribute', () => {
    render(<OnboardingVideo onComplete={vi.fn()} />);
    const video = screen.getByLabelText('Onboarding introduction video');
    expect(video.hasAttribute('controls')).toBe(true);
  });

  it('attempts autoplay on mount', () => {
    render(<OnboardingVideo onComplete={vi.fn()} />);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it('mutes and retries when autoplay is blocked', async () => {
    const playMock = vi.spyOn(HTMLMediaElement.prototype, 'play')
      .mockImplementationOnce(() => Promise.reject(new Error('Autoplay blocked')))
      .mockImplementationOnce(() => Promise.resolve());

    render(<OnboardingVideo onComplete={vi.fn()} />);

    // Wait for the catch handler to run
    await vi.waitFor(() => {
      expect(playMock).toHaveBeenCalledTimes(2);
    });
  });
});
