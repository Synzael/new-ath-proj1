'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingVideo } from './onboarding-video';
import { PresentationSlide } from './presentation-slide';
import { SportSelector } from './sport-selector';

type OnboardingPhase = 'video' | 'presentation' | 'sport-selection';

interface OnboardingFlowProps {
  compact?: boolean;
  onComplete?: () => void;
}

interface OnboardingState {
  phase: OnboardingPhase;
  firstName: string;
  selectedSport: string | null;
}

export function OnboardingFlow({ compact, onComplete }: OnboardingFlowProps = {}) {
  const router = useRouter();
  const [state, setState] = React.useState<OnboardingState>({
    phase: 'video',
    firstName: '',
    selectedSport: null,
  });
  const [error, setError] = React.useState<string | null>(null);

  const handleVideoComplete = () => {
    setState((prev) => ({ ...prev, phase: 'presentation' }));
  };

  const handlePresentationComplete = (firstName: string) => {
    setState((prev) => ({
      ...prev,
      firstName,
      phase: 'sport-selection',
    }));
  };

  const handleSportSelect = async (sport: string) => {
    setState((prev) => ({ ...prev, selectedSport: sport }));
    setError(null);

    try {
      const response = await fetch('/api/onboarding/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: state.firstName,
          sport,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to complete onboarding');
      }

      // Notify parent (modal) that flow is complete
      onComplete?.();

      // Navigate to dashboard on success
      router.push('/dashboard');
    } catch (err) {
      console.error('Onboarding completion error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
      // Reset selected sport so user can try again
      setState((prev) => ({ ...prev, selectedSport: null }));
    }
  };

  if (state.phase === 'video') {
    return <OnboardingVideo onComplete={handleVideoComplete} compact={compact} />;
  }

  if (state.phase === 'presentation') {
    return <PresentationSlide onComplete={handlePresentationComplete} compact={compact} />;
  }

  return (
    <>
      <SportSelector firstName={state.firstName} onSelect={handleSportSelect} compact={compact} />
      {error && (
        <div className="fixed bottom-4 left-4 right-4 mx-auto max-w-md bg-destructive/90 text-destructive-foreground px-4 py-3 rounded-lg text-center">
          {error}
        </div>
      )}
    </>
  );
}
