"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Sport = "Baseball" | "Football" | "Basketball" | "Soccer" | "Golf";

interface SportOption {
  name: Sport;
  icon: string;
}

const sports: SportOption[] = [
  { name: "Baseball", icon: "⚾" },
  { name: "Football", icon: "🏈" },
  { name: "Basketball", icon: "🏀" },
  { name: "Soccer", icon: "⚽" },
  { name: "Golf", icon: "⛳" },
];

const menuOptions = [
  {
    title: "Schedule a Call",
    description: "Connect with our expert advisors for personalized guidance",
    icon: Calendar,
    href: "/schedule",
  },
  {
    title: "Maximize Retirement",
    description: "Plan for financial security beyond your playing days",
    icon: TrendingUp,
    href: "/retirement",
  },
  {
    title: "Start a Second Career",
    description: "Explore opportunities and build your post-sport future",
    icon: Briefcase,
    href: "/careers",
  },
];

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);

  const totalSteps = 5;

  const goToNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleSportSelect = useCallback((sport: Sport) => {
    setSelectedSport(sport);
  }, []);

  const handleBegin = useCallback(() => {
    setCurrentStep(2);
  }, []);

  const renderProgressIndicator = () => {
    if (currentStep === 1 || currentStep === 5) return null;

    return (
      <div className="flex justify-center gap-2 mb-8">
        {[2, 3, 4].map((step) => (
          <div
            key={step}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              step === currentStep
                ? "w-8 bg-primary"
                : step < currentStep
                  ? "w-2 bg-primary/60"
                  : "w-2 bg-muted"
            )}
          />
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep onBegin={handleBegin} />;
      case 2:
        return (
          <InfoStep
            title="Enhance Returns"
            subtitle="Maximize your earning potential during and after your career"
            onNext={goToNext}
            onPrevious={goToPrevious}
            showBack={false}
          />
        );
      case 3:
        return (
          <InfoStep
            title="The Average Sports Career is 3-4 Years"
            subtitle="Start planning for your future today"
            onNext={goToNext}
            onPrevious={goToPrevious}
            showBack={true}
          />
        );
      case 4:
        return (
          <SportSelectionStep
            selectedSport={selectedSport}
            onSelectSport={handleSportSelect}
            onNext={goToNext}
            onPrevious={goToPrevious}
          />
        );
      case 5:
        return (
          <ResultStep
            selectedSport={selectedSport}
            onBack={() => setCurrentStep(4)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background bg-gradient-radial flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {renderProgressIndicator()}
        <div className="glass-strong rounded-2xl p-6 sm:p-10 transition-all duration-500">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

// Step 1: Welcome Screen
function WelcomeStep({ onBegin }: { onBegin: () => void }) {
  return (
    <div className="text-center space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gradient-cyan mb-3">
          Welcome to Overall 99
        </h1>
        <p className="text-muted-foreground text-lg">
          Your journey to financial success starts here
        </p>
      </div>

      {/* Video Placeholder */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden glass border border-border">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
          <button
            className="w-20 h-20 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 flex items-center justify-center group glow-cyan"
            aria-label="Play video"
          >
            <Play
              className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
          2:30 • Introduction Video
        </div>
      </div>

      <Button
        onClick={onBegin}
        size="lg"
        className="btn-primary-glow text-primary-foreground font-semibold px-12 py-6 text-lg"
      >
        Begin Your Journey
      </Button>
    </div>
  );
}

// Steps 2 & 3: Informational Slides
function InfoStep({
  title,
  subtitle,
  onNext,
  onPrevious,
  showBack,
}: {
  title: string;
  subtitle: string;
  onNext: () => void;
  onPrevious: () => void;
  showBack: boolean;
}) {
  return (
    <div className="text-center space-y-8 py-8">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient-cyan leading-tight text-balance">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="flex justify-center gap-4 pt-8">
        {showBack && (
          <Button
            onClick={onPrevious}
            variant="outline"
            size="lg"
            className="glass border-border hover:bg-muted/50"
          >
            <ChevronLeft className="w-5 h-5 mr-2" aria-hidden="true" />
            Back
          </Button>
        )}
        <Button
          onClick={onNext}
          size="lg"
          className="btn-primary-glow text-primary-foreground font-semibold"
        >
          Continue
          <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

// Step 4: Sport Selection
function SportSelectionStep({
  selectedSport,
  onSelectSport,
  onNext,
  onPrevious,
}: {
  selectedSport: Sport | null;
  onSelectSport: (sport: Sport) => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          What sport do you play?
        </h2>
        <p className="text-muted-foreground">
          Select your primary sport to personalize your experience
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => onSelectSport(sport.name)}
            className={cn(
              "relative p-4 sm:p-6 rounded-xl transition-all duration-300 text-center group",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              selectedSport === sport.name
                ? "glass-strong border-2 border-primary glow-cyan scale-105"
                : "glass border border-border hover:border-primary/50 hover:scale-102"
            )}
            aria-pressed={selectedSport === sport.name}
          >
            <div className="text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform">
              {sport.icon}
            </div>
            <div
              className={cn(
                "font-semibold text-sm sm:text-base transition-colors",
                selectedSport === sport.name
                  ? "text-primary"
                  : "text-foreground"
              )}
            >
              {sport.name}
            </div>
            {selectedSport === sport.name && (
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary animate-pulse" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <Button
          onClick={onPrevious}
          variant="outline"
          size="lg"
          className="glass border-border hover:bg-muted/50"
        >
          <ChevronLeft className="w-5 h-5 mr-2" aria-hidden="true" />
          Back
        </Button>
        <Button
          onClick={onNext}
          size="lg"
          disabled={!selectedSport}
          className={cn(
            "font-semibold transition-all",
            selectedSport
              ? "btn-primary-glow text-primary-foreground"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          Continue
          <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

// Step 5: Dynamic Result / Dashboard
function ResultStep({
  selectedSport,
  onBack,
}: {
  selectedSport: Sport | null;
  onBack: () => void;
}) {
  const sportLower = selectedSport?.toLowerCase() || "sports";

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          Personalized for You
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 text-balance">
          We help{" "}
          <span className="text-gradient-cyan">{sportLower} athletes</span> just
          like you
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Choose how you&apos;d like to get started on your path to success
        </p>
      </div>

      <div className="grid gap-4">
        {menuOptions.map((option) => {
          const Icon = option.icon;
          return (
            <a
              key={option.title}
              href={option.href}
              className={cn(
                "group flex items-start gap-4 p-5 rounded-xl transition-all duration-300",
                "glass border border-border hover:border-primary/50",
                "hover:glow-cyan hover:scale-[1.02]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon
                  className="w-6 h-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {option.description}
                </p>
              </div>
              <ChevronRight
                className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="glass border-border hover:bg-muted/50"
        >
          <ChevronLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          Change Sport
        </Button>
        <Button
          asChild
          className="btn-primary-glow text-primary-foreground font-semibold"
        >
          <a href="/dashboard">Go to Dashboard</a>
        </Button>
      </div>
    </div>
  );
}

export default OnboardingWizard;
