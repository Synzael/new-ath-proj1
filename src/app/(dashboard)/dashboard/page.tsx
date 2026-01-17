import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { getCurrentUser, getUserWithProfile } from '@/lib/auth';
import { AthleteDashboard } from '@/components/dashboard/athlete-dashboard';
import { CoachDashboard } from '@/components/dashboard/coach-dashboard';
import { BrandDashboard } from '@/components/dashboard/brand-dashboard';
import { AdminDashboard } from '@/components/dashboard/admin-dashboard';
import { LoadingDashboard } from '@/components/shared/loading';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your personal dashboard',
};

async function DashboardContent() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  const userWithProfile = await getUserWithProfile();

  if (!userWithProfile) {
    redirect('/login');
  }

  switch (user.role) {
    case 'ATHLETE':
      return <AthleteDashboard user={userWithProfile} />;
    case 'COACH':
      return <CoachDashboard user={userWithProfile} />;
    case 'BRAND':
      return <BrandDashboard user={userWithProfile} />;
    case 'ADMIN':
      return <AdminDashboard user={userWithProfile} />;
    default:
      return <AthleteDashboard user={userWithProfile} />;
  }
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingDashboard />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
