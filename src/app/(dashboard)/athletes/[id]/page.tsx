import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAthleteById } from '@/services/athlete.service';
import { AthleteProfile } from '@/components/athletes/athlete-profile';
import { LoadingPage } from '@/components/shared/loading';

interface AthletePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: AthletePageProps): Promise<Metadata> {
  const { id } = await params;
  const athlete = await getAthleteById(id);

  if (!athlete) {
    return { title: 'Athlete Not Found' };
  }

  return {
    title: athlete.user.name || 'Athlete Profile',
    description: athlete.bio || `${athlete.sport} - ${athlete.position}`,
  };
}

async function AthleteContent({ id }: { id: string }) {
  const athlete = await getAthleteById(id);

  if (!athlete) {
    notFound();
  }

  return <AthleteProfile athlete={athlete} />;
}

export default async function AthletePage({ params }: AthletePageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingPage />}>
        <AthleteContent id={id} />
      </Suspense>
    </div>
  );
}
