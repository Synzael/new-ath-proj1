'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SportSelectorProps {
  firstName: string;
  onSelect: (sport: string) => void;
  compact?: boolean;
}

const sports = [
  'Baseball',
  'Football',
  'Basketball',
  'Soccer',
  'Motocross',
  'MMA',
  'Boxing',
  'Wrestling',
  'Volleyball',
  'Golf',
  'Skiing',
  'Tennis',
] as const;

export function SportSelector({ firstName, onSelect, compact }: SportSelectorProps) {
  const [selectedSport, setSelectedSport] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSportClick = (sport: string) => {
    setSelectedSport(sport);
    setIsSubmitting(true);
    onSelect(sport);
  };

  return (
    <div className={cn(
      'bg-gradient-dark flex flex-col',
      compact ? 'h-full min-h-[400px]' : 'min-h-screen'
    )}>
      {/* Header */}
      <header className="flex items-center justify-end p-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Title */}
      <div className="px-6 pt-4 pb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
          {firstName}, what sport do you play?
        </h1>
      </div>

      {/* Sport Grid */}
      <div className="flex-1 px-4 pb-6">
        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => handleSportClick(sport)}
              disabled={isSubmitting}
              className={cn(
                'aspect-[4/3] rounded-xl bg-white text-slate-900 font-medium text-sm md:text-base',
                'flex items-center justify-center p-2 text-center',
                'transition-all duration-200 hover:scale-105 hover:shadow-lg',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
                'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
                selectedSport === sport && 'ring-2 ring-cyan-400 scale-105'
              )}
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Coaches & Other Influencers Button */}
        <div className="mt-6 max-w-2xl mx-auto">
          <button
            onClick={() => handleSportClick('Coaches & Other Influencers')}
            disabled={isSubmitting}
            className={cn(
              'w-full py-4 rounded-xl bg-white text-slate-900 font-medium text-base md:text-lg',
              'transition-all duration-200 hover:scale-[1.02] hover:shadow-lg',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
              'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
              selectedSport === 'Coaches & Other Influencers' &&
                'ring-2 ring-cyan-400 scale-[1.02]'
            )}
          >
            Coaches & Other Influencers
          </button>
        </div>
      </div>
    </div>
  );
}
