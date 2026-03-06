import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ProfileCompletionForm } from '@/components/onboarding/profile-completion-form';
import { getUserWithProfile } from '@/lib/auth';
import { mapAthleteRecordToFormValues } from '@/lib/athlete-profile';

export const metadata: Metadata = {
  title: 'Complete Profile | Overall 99',
  description: 'Finish your MVP profile setup',
};

export default async function OnboardingPage() {
  const user = await getUserWithProfile();

  if (!user) {
    redirect('/login');
  }

  if (user.role === 'ADMIN') {
    redirect('/dashboard');
  }

  if (user.role === 'ATHLETE') {
    const athlete = mapAthleteRecordToFormValues(user.athlete);

    return (
      <ProfileCompletionForm
        role="ATHLETE"
        initialValues={{
          name: user.name ?? '',
          sport: athlete.sport,
          position: athlete.position ?? '',
          school: athlete.school ?? '',
          graduationYear: athlete.graduationYear?.toString() ?? '',
          city: athlete.city ?? '',
          state: athlete.state ?? '',
          bio: athlete.bio ?? '',
        }}
      />
    );
  }

  if (user.role === 'COACH') {
    return (
      <ProfileCompletionForm
        role="COACH"
        initialValues={{
          name: user.name ?? '',
          organization: user.coach?.school ?? user.coach?.team ?? '',
          sport: user.coach?.sport ?? '',
          roleTitle: user.coach?.position ?? '',
          bio: user.coach?.bio ?? '',
        }}
      />
    );
  }

  return (
    <ProfileCompletionForm
      role="BRAND"
      initialValues={{
        name: user.name ?? '',
        companyName: user.brand?.companyName ?? '',
        website: user.brand?.website ?? '',
        description: user.brand?.description ?? '',
      }}
    />
  );
}
