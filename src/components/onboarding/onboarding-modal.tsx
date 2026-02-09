'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { OnboardingFlow } from './onboarding-flow';

const STORAGE_KEY = 'overall99-onboarding-seen';

export function OnboardingModal() {
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const seen = localStorage.getItem(STORAGE_KEY);
    if (seen !== 'true') {
      setOpen(true);
    }
  }, []);

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
        className="w-[95vw] max-w-4xl max-h-[85vh] overflow-y-auto p-0 border-0 bg-transparent"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">Welcome to Overall 99</DialogTitle>
        <DialogDescription className="sr-only">
          Complete the onboarding flow or login to skip.
        </DialogDescription>
        <OnboardingFlow compact onComplete={handleFlowComplete} />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
          <Button
            variant="link"
            onClick={handleLoginToSkip}
            className="text-muted-foreground hover:text-white text-sm underline"
          >
            Login to skip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
