'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Trophy, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PresentationSlideProps {
  onComplete: (firstName: string) => void;
}

interface SlideContent {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  hasNameInput?: boolean;
}

const slides: SlideContent[] = [
  {
    id: 'welcome',
    title: 'Welcome to Overall 99',
    description:
      'The premier platform for athlete recruiting and NIL opportunities. Your journey to the next level starts here.',
    icon: <Trophy className="h-16 w-16 text-cyan-400" />,
  },
  {
    id: 'discover',
    title: 'Get Discovered',
    description:
      'Showcase your skills, stats, and highlights to coaches and recruiters nationwide. Build your athletic profile and stand out.',
    icon: <Users className="h-16 w-16 text-cyan-400" />,
  },
  {
    id: 'nil',
    title: 'NIL Opportunities',
    description:
      'Connect with brands looking for athletes like you. Unlock endorsement deals and sponsorship opportunities.',
    icon: <Zap className="h-16 w-16 text-cyan-400" />,
  },
  {
    id: 'name',
    title: "Let's get started",
    description: "First, tell us your name so we can personalize your experience.",
    icon: null,
    hasNameInput: true,
  },
];

export function PresentationSlide({ onComplete }: PresentationSlideProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [firstName, setFirstName] = React.useState('');

  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const handleNext = () => {
    if (isLastSlide) {
      if (firstName.trim()) {
        onComplete(firstName.trim());
      }
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && canProceed) {
      handleNext();
    }
  };

  const canProceed = isLastSlide ? firstName.trim().length > 0 : true;

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col">
      {/* Progress bar */}
      <div className="p-4">
        <Progress value={progress} className="h-1" />
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Icon */}
        {slide.icon && <div className="mb-8">{slide.icon}</div>}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          {slide.title}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          {slide.description}
        </p>

        {/* Name Input (only on last slide) */}
        {slide.hasNameInput && (
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="firstName" className="sr-only">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyDown={handleKeyDown}
              className="text-center text-lg h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              autoFocus
              autoComplete="given-name"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="p-6 flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentSlide === 0}
          className="text-muted-foreground hover:text-white hover:bg-white/10"
        >
          <ChevronLeft className="mr-1 h-4 w-4" aria-hidden="true" />
          Back
        </Button>

        {/* Slide indicators */}
        <div className="flex gap-2" role="tablist" aria-label="Slide navigation">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                idx === currentSlide ? 'bg-cyan-400' : 'bg-white/30 hover:bg-white/50'
              )}
              role="tab"
              aria-selected={idx === currentSlide}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          {isLastSlide ? 'Continue' : 'Next'}
          {!isLastSlide && <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />}
        </Button>
      </div>
    </div>
  );
}
