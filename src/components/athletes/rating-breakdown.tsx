"use client";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RatingBreakdownProps {
  overallScore: number;
  performanceScore: number;
  physicalScore: number;
  academicScore: number;
  socialScore: number;
  evaluationScore: number;
  className?: string;
}

const ratingCategories = [
  {
    key: "performanceScore" as const,
    label: "Performance",
    weight: 40,
    description: "Athletic stats & achievements",
    color: "bg-cyan-500",
  },
  {
    key: "physicalScore" as const,
    label: "Physical",
    weight: 20,
    description: "Height, weight, athleticism",
    color: "bg-emerald-500",
  },
  {
    key: "academicScore" as const,
    label: "Academic",
    weight: 15,
    description: "GPA & academic standing",
    color: "bg-amber-500",
  },
  {
    key: "socialScore" as const,
    label: "Social",
    weight: 15,
    description: "Following & engagement",
    color: "bg-purple-500",
  },
  {
    key: "evaluationScore" as const,
    label: "Evaluation",
    weight: 10,
    description: "Coach & scout ratings",
    color: "bg-rose-500",
  },
];

function getScoreColor(score: number): string {
  if (score >= 90) return "text-emerald-500";
  if (score >= 75) return "text-cyan-500";
  if (score >= 60) return "text-amber-500";
  if (score >= 40) return "text-orange-500";
  return "text-rose-500";
}

function getScoreLabel(score: number): string {
  if (score >= 90) return "Elite";
  if (score >= 75) return "Excellent";
  if (score >= 60) return "Good";
  if (score >= 40) return "Average";
  return "Developing";
}

export function RatingBreakdown({
  overallScore,
  performanceScore,
  physicalScore,
  academicScore,
  socialScore,
  evaluationScore,
  className,
}: RatingBreakdownProps) {
  const scores = {
    performanceScore,
    physicalScore,
    academicScore,
    socialScore,
    evaluationScore,
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Rating Breakdown</CardTitle>
            <CardDescription>
              Comprehensive athlete evaluation metrics
            </CardDescription>
          </div>
          <div className="text-right">
            <div
              className={cn(
                "text-4xl font-bold",
                getScoreColor(overallScore)
              )}
            >
              {overallScore.toFixed(1)}
            </div>
            <div className="text-sm text-muted-foreground">
              {getScoreLabel(overallScore)}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {ratingCategories.map((category) => {
          const score = scores[category.key];
          return (
            <div key={category.key} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium">{category.label}</span>
                  <span className="ml-2 text-muted-foreground">
                    ({category.weight}%)
                  </span>
                </div>
                <span className={cn("font-semibold", getScoreColor(score))}>
                  {score.toFixed(0)}
                </span>
              </div>
              <div className="relative">
                <Progress
                  value={score}
                  className="h-2"
                />
                <div
                  className={cn(
                    "absolute inset-0 h-2 rounded-full opacity-80",
                    category.color
                  )}
                  style={{ width: `${score}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {category.description}
              </p>
            </div>
          );
        })}

        {/* Weight visualization */}
        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground mb-2">
            Overall score weighting:
          </p>
          <div className="flex h-2 rounded-full overflow-hidden">
            {ratingCategories.map((category) => (
              <div
                key={category.key}
                className={cn(category.color, "opacity-80")}
                style={{ width: `${category.weight}%` }}
                title={`${category.label}: ${category.weight}%`}
              />
            ))}
          </div>
          <div className="flex text-xs text-muted-foreground mt-1 gap-3 flex-wrap">
            {ratingCategories.map((category) => (
              <div key={category.key} className="flex items-center gap-1">
                <div
                  className={cn("w-2 h-2 rounded-full", category.color)}
                />
                <span>{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
