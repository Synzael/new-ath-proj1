'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { OnboardingFlow } from './onboarding-flow';

const STORAGE_KEY = 'overall99-onboarding-seen';

export function OnboardingModal() {
  const { status } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) {
      return;
    }

    const seen = localStorage.getItem(STORAGE_KEY);
    if (seen === 'true') {
      setOpen(false);
      return;
    }

    if (status === 'authenticated') {
      localStorage.setItem(STORAGE_KEY, 'true');
      setOpen(false);
      router.push('/onboarding');
      return;
    }

    if (status === 'unauthenticated') {
      setOpen(true);
    }
  }, [mounted, router, status]);

  const handleFlowComplete = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setOpen(false);
  };

  const handleLoginToSkip = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setOpen(false);
    router.push('/login');
  };

  if (!mounted) return null;

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="max-h-[85vh] w-[95vw] max-w-4xl overflow-y-auto border-0 bg-transparent p-0"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">Welcome to Overall 99</DialogTitle>
        <DialogDescription className="sr-only">
          Complete the onboarding flow or login to skip.
        </DialogDescription>
        <OnboardingFlow compact onComplete={handleFlowComplete} />
        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center">
          <Button
            variant="link"
            onClick={handleLoginToSkip}
            className="text-sm text-muted-foreground underline hover:text-white"
          >
            Login to skip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
