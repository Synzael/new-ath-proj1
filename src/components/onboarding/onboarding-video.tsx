'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

interface OnboardingVideoProps {
  onComplete: () => void;
}

export function OnboardingVideo({ onComplete }: OnboardingVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hasEnded, setHasEnded] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play();
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setHasEnded(true);
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center relative">
      <video
        ref={videoRef}
        src="/onboardingvideo.mp4"
        playsInline
        controls
        className="w-full max-w-4xl rounded-xl"
        onEnded={handleVideoEnd}
        aria-label="Onboarding introduction video"
      >
        <p>Your browser does not support the video element.</p>
      </video>

      {!hasEnded && (
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            onClick={onComplete}
            className="text-muted-foreground hover:text-white hover:bg-white/10"
          >
            Skip
          </Button>
        </div>
      )}
    </div>
  );
}
