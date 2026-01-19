import { Metadata } from 'next';
import { OnboardingFlow } from '@/components/onboarding/onboarding-flow';

export const metadata: Metadata = {
  title: 'Welcome | Overall 99',
  description: 'Complete your Overall 99 profile setup',
};

export default function OnboardingPage() {
  return <OnboardingFlow />;
}
