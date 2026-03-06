'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingVideo } from './onboarding-video';
import { PresentationSlide } from './presentation-slide';
import { SportSelector } from './sport-selector';
import { saveOnboardingDraft } from '@/lib/onboarding-draft';

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

  const handleSportSelect = (sport: string) => {
    setState((prev) => ({ ...prev, selectedSport: sport }));

    saveOnboardingDraft({
      name: state.firstName,
      firstName: state.firstName,
      sport,
    });

    // Notify parent (modal) that flow is complete
    onComplete?.();

    // Continue to account creation
    router.push('/register');
  };

  if (state.phase === 'video') {
    return <OnboardingVideo onComplete={handleVideoComplete} compact={compact} />;
  }

  if (state.phase === 'presentation') {
    return <PresentationSlide onComplete={handlePresentationComplete} compact={compact} />;
  }

  return (
    <SportSelector firstName={state.firstName} onSelect={handleSportSelect} compact={compact} />
  );
}
