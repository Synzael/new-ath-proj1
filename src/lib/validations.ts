import { z } from 'zod';

const optionalString = (max?: number) => {
  let schema = z.string().trim();
  if (typeof max === 'number') {
    schema = schema.max(max);
  }

  return z.preprocess((value) => {
    if (typeof value !== 'string') {
      return value;
    }

    const trimmedValue = value.trim();
    return trimmedValue === '' ? undefined : trimmedValue;
  }, schema.optional());
};

const optionalUrl = z.preprocess((value) => {
  if (typeof value !== 'string') {
    return value;
  }

  const trimmedValue = value.trim();
  return trimmedValue === '' ? undefined : trimmedValue;
}, z.string().url('Please enter a valid URL').optional());

const optionalNumber = (schema: z.ZodNumber) =>
  z.preprocess((value) => {
    if (value === '' || value === null || value === undefined) {
      return undefined;
    }

    if (typeof value === 'number' && Number.isNaN(value)) {
      return undefined;
    }

    if (typeof value === 'string') {
      const parsedValue = Number(value);
      return Number.isNaN(parsedValue) ? undefined : parsedValue;
    }

    return value;
  }, schema.optional());

// Auth validations
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    confirmPassword: z.string(),
    role: z.enum(['ATHLETE', 'COACH', 'BRAND']).default('ATHLETE'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// Athlete profile validations
export const athleteProfileSchema = z.object({
  bio: optionalString(500),
  sport: z.string().min(1, 'Sport is required'),
  position: optionalString(),
  height: optionalNumber(z.number().min(48).max(96)),
  weight: optionalNumber(z.number().min(80).max(400)),
  school: optionalString(),
  graduationYear: optionalNumber(z.number().int().min(2020).max(2035)),
  gpa: optionalNumber(z.number().min(0).max(4.0)),
  city: optionalString(),
  state: optionalString(),
  instagram: optionalUrl,
  twitter: optionalUrl,
  tiktok: optionalUrl,
  youtube: optionalUrl,
});

export const athleteOnboardingSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  sport: z.string().min(1, 'Sport is required'),
  position: optionalString(),
  school: optionalString(),
  graduationYear: optionalNumber(z.number().int().min(2020).max(2035)),
  city: optionalString(),
  state: optionalString(),
  bio: optionalString(500),
});

export const coachOnboardingSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  organization: optionalString(),
  sport: z.string().min(1, 'Sport is required'),
  roleTitle: optionalString(),
  bio: optionalString(500),
});

export const brandOnboardingSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  companyName: z.string().trim().min(2, 'Company name must be at least 2 characters'),
  website: optionalUrl,
  description: optionalString(500),
});

// Performance stat validation
export const performanceStatSchema = z.object({
  name: z.string().min(1, 'Stat name is required'),
  value: z.number(),
  unit: z.string().min(1, 'Unit is required'),
  category: z.enum(['Speed', 'Strength', 'Agility', 'Vertical', 'Endurance', 'Other']),
  verified: z.boolean().default(false),
});

// Video validation
export const videoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  url: z.string().url('Please enter a valid URL'),
  thumbnailUrl: z.string().url().optional(),
  category: z.enum(['Highlights', 'Training', 'Game', 'Interview', 'Other']),
  featured: z.boolean().default(false),
});

// Event validation
export const eventSchema = z.object({
  name: z.string().min(1, 'Event name is required').max(100),
  description: z.string().max(1000).optional(),
  type: z.enum(['CAMP', 'TOURNAMENT', 'SHOWCASE', 'COMBINE']),
  sport: z.string().min(1, 'Sport is required'),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string().optional(),
  maxParticipants: z.number().min(1).optional(),
  registrationDeadline: z.date().optional(),
});

// Vote validation
export const voteSchema = z.object({
  athleteId: z.string().min(1, 'Athlete ID is required'),
  eventId: z.string().min(1, 'Event ID is required'),
});

// Offer validation (NIL marketplace)
export const offerSchema = z.object({
  athleteId: z.string().min(1, 'Athlete ID is required'),
  type: z.enum(['SPONSORSHIP', 'APPEARANCE', 'ENDORSEMENT', 'SOCIAL_MEDIA', 'OTHER']),
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
  sortBy: z.enum(['rating', 'name', 'recent']).default('rating'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
});

// Type exports
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type AthleteProfileInput = z.infer<typeof athleteProfileSchema>;
export type AthleteOnboardingInput = z.infer<typeof athleteOnboardingSchema>;
export type CoachOnboardingInput = z.infer<typeof coachOnboardingSchema>;
export type BrandOnboardingInput = z.infer<typeof brandOnboardingSchema>;
export type PerformanceStatInput = z.infer<typeof performanceStatSchema>;
export type VideoInput = z.infer<typeof videoSchema>;
export type EventInput = z.infer<typeof eventSchema>;
export type VoteInput = z.infer<typeof voteSchema>;
export type OfferInput = z.infer<typeof offerSchema>;
export type AthleteSearchInput = z.infer<typeof athleteSearchSchema>;
