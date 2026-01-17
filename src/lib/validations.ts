import { z } from "zod";

// Auth validations
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string(),
    role: z.enum(["ATHLETE", "COACH", "BRAND"]).default("ATHLETE"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Athlete profile validations
export const athleteProfileSchema = z.object({
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  sport: z.string().min(1, "Sport is required"),
  position: z.string().optional(),
  height: z.number().min(48).max(96).optional(),
  weight: z.number().min(80).max(400).optional(),
  school: z.string().optional(),
  graduationYear: z.number().min(2020).max(2035).optional(),
  gpa: z.number().min(0).max(4.0).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  instagram: z.string().url().optional().or(z.literal("")),
  twitter: z.string().url().optional().or(z.literal("")),
  tiktok: z.string().url().optional().or(z.literal("")),
  youtube: z.string().url().optional().or(z.literal("")),
});

// Performance stat validation
export const performanceStatSchema = z.object({
  name: z.string().min(1, "Stat name is required"),
  value: z.number(),
  unit: z.string().min(1, "Unit is required"),
  category: z.enum(["Speed", "Strength", "Agility", "Vertical", "Endurance", "Other"]),
  verified: z.boolean().default(false),
});

// Video validation
export const videoSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  url: z.string().url("Please enter a valid URL"),
  thumbnailUrl: z.string().url().optional(),
  category: z.enum(["Highlights", "Training", "Game", "Interview", "Other"]),
  featured: z.boolean().default(false),
});

// Event validation
export const eventSchema = z.object({
  name: z.string().min(1, "Event name is required").max(100),
  description: z.string().max(1000).optional(),
  type: z.enum(["CAMP", "TOURNAMENT", "SHOWCASE", "COMBINE"]),
  sport: z.string().min(1, "Sport is required"),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string().optional(),
  maxParticipants: z.number().min(1).optional(),
  registrationDeadline: z.date().optional(),
});

// Vote validation
export const voteSchema = z.object({
  athleteId: z.string().min(1, "Athlete ID is required"),
  eventId: z.string().min(1, "Event ID is required"),
});

// Offer validation (NIL marketplace)
export const offerSchema = z.object({
  athleteId: z.string().min(1, "Athlete ID is required"),
  type: z.enum(["SPONSORSHIP", "APPEARANCE", "ENDORSEMENT", "SOCIAL_MEDIA", "OTHER"]),
  amount: z.number().min(0),
  description: z.string().max(2000).optional(),
  terms: z.string().max(5000).optional(),
  expiresAt: z.date().optional(),
});

// Search/filter validation
export const athleteSearchSchema = z.object({
  query: z.string().optional(),
  sport: z.string().optional(),
  position: z.string().optional(),
  state: z.string().optional(),
  minRating: z.number().min(0).max(100).optional(),
  maxRating: z.number().min(0).max(100).optional(),
  graduationYear: z.number().optional(),
  sortBy: z.enum(["rating", "name", "recent"]).default("rating"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
});

// Type exports
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type AthleteProfileInput = z.infer<typeof athleteProfileSchema>;
export type PerformanceStatInput = z.infer<typeof performanceStatSchema>;
export type VideoInput = z.infer<typeof videoSchema>;
export type EventInput = z.infer<typeof eventSchema>;
export type VoteInput = z.infer<typeof voteSchema>;
export type OfferInput = z.infer<typeof offerSchema>;
export type AthleteSearchInput = z.infer<typeof athleteSearchSchema>;
