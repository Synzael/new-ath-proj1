import { Metadata } from 'next';
import { OnboardingWizard } from '@/components/onboarding';

export const metadata: Metadata = {
  title: 'Get Started',
  description: 'Begin your journey with Overall 99 - the premier platform for athlete success',
};

export default function OnboardingPage() {
  return <OnboardingWizard />;
}
