"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number; // 0-100
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showValue = false,
  interactive = false,
  onRatingChange,
  className,
}: StarRatingProps) {
  // Convert 0-100 rating to 0-maxStars scale
  const starRating = (rating / 100) * maxStars;
  const fullStars = Math.floor(starRating);
  const partialFill = starRating - fullStars;

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-5 w-5",
    lg: "h-7 w-7",
  };

  const handleClick = (starIndex: number) => {
    if (!interactive || !onRatingChange) return;
    // Convert star index back to 0-100 scale
    const newRating = ((starIndex + 1) / maxStars) * 100;
    onRatingChange(newRating);
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {Array.from({ length: maxStars }).map((_, index) => {
          const isFull = index < fullStars;
          const isPartial = index === fullStars && partialFill > 0;

          return (
            <button
              key={index}
              type="button"
              disabled={!interactive}
              onClick={() => handleClick(index)}
              className={cn(
                "relative",
                interactive && "cursor-pointer hover:scale-110 transition-transform",
                !interactive && "cursor-default"
              )}
              aria-label={`${index + 1} of ${maxStars} stars`}
            >
              {/* Background star (empty) */}
              <Star
                className={cn(
                  sizeClasses[size],
                  "text-muted-foreground/30"
                )}
                strokeWidth={1.5}
              />

              {/* Filled star overlay */}
              {(isFull || isPartial) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    width: isPartial ? `${partialFill * 100}%` : "100%",
                  }}
                >
                  <Star
                    className={cn(
                      sizeClasses[size],
                      "text-yellow-500 fill-yellow-500"
                    )}
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showValue && (
        <span className="ml-1 text-sm font-medium text-muted-foreground">
          {rating.toFixed(0)}
        </span>
      )}
    </div>
  );
}
