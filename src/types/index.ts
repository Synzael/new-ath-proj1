import type { User, Athlete, Coach, Brand, Rating, Event, Offer } from '@prisma/client';

// Re-export Prisma types
export type { User, Athlete, Coach, Brand, Rating, Event, Offer };

// User roles
export type UserRole = 'ATHLETE' | 'COACH' | 'BRAND' | 'ADMIN';

// Session user type (what's available in the session)
export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role: UserRole;
}

// Extended user with relations
export interface UserWithRelations extends User {
  athlete?: AthleteWithRelations | null;
  coach?: Coach | null;
  brand?: Brand | null;
}

// Athlete with all relations
export interface AthleteWithRelations extends Athlete {
  user: User;
  performanceStats: PerformanceStat[];
  videos: Video[];
  socialLinks: SocialLink[];
  ratings: Rating[];
}

// Athlete summary for listings
export interface AthleteSummary {
  id: string;
  userId: string;
  name: string;
  image: string | null;
  sport: string;
  position: string | null;
  school: string | null;
  state: string | null;
  classYear: number | null;
  overallRating: number | null;
  percentile: number | null;
}

// Performance stat type
export interface PerformanceStat {
  id: string;
  athleteId: string;
  name: string;
  value: number;
  unit: string;
  category: string;
  recordedAt: Date;
  verified: boolean;
}

// Video type
export interface Video {
  id: string;
  athleteId: string;
  title: string;
  url: string;
  thumbnailUrl: string | null;
  duration: number | null;
  category: string;
  description: string | null;
  featured: boolean;
  viewCount: number;
}

// Social link type
export interface SocialLink {
  id: string;
  athleteId: string;
  platform: string;
  url: string;
  followers: number | null;
}

// Rating calculation input
export interface RatingInput {
  performanceStats: PerformanceStat[];
  height: number | null;
  weight: number | null;
  gpa: number | null;
  socialFollowers: number;
  evaluationScores: number[];
}

// Rating calculation result
export interface RatingResult {
  performanceScore: number;
  physicalScore: number;
  academicScore: number;
  socialScore: number;
  evaluationScore: number;
  overallScore: number;
  percentile: number;
}

// Ranking entry
export interface RankingEntry {
  rank: number;
  athlete: AthleteSummary;
  score: number;
  trend: 'up' | 'down' | 'stable';
  previousRank: number | null;
}

// Event types
export interface EventWithParticipants extends Event {
  participants: EventParticipant[];
  brackets: Bracket[];
}

export interface EventParticipant {
  id: string;
  eventId: string;
  athleteId: string;
  status: 'REGISTERED' | 'CONFIRMED' | 'CHECKED_IN' | 'ELIMINATED' | 'ADVANCED' | 'WINNER';
  seedRank: number | null;
  finalRank: number | null;
  votes: number;
  athlete?: AthleteSummary;
}

export interface Bracket {
  id: string;
  eventId: string;
  name: string;
  round: number;
  matchups: Matchup[];
}

export interface Matchup {
  id: string;
  bracketId: string;
  round: number;
  position: number;
  athlete1Id: string | null;
  athlete2Id: string | null;
  winnerId: string | null;
  athlete1Votes: number;
  athlete2Votes: number;
  votingOpen: boolean;
  votingEndsAt: Date | null;
  athlete1?: EventParticipant;
  athlete2?: EventParticipant;
}

// Marketplace types
export interface OfferSummary {
  id: string;
  brandId: string;
  brandName: string;
  brandLogo: string | null;
  title: string;
  type: OfferType;
  status: OfferStatus;
  value: number | null;
  createdAt: Date;
}

export type OfferType =
  | 'SPONSORSHIP'
  | 'ENDORSEMENT'
  | 'APPEARANCE'
  | 'SOCIAL_MEDIA'
  | 'MERCHANDISE'
  | 'OTHER';

export type OfferStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED' | 'COMPLETED';

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export interface AthleteProfileFormData {
  bio: string | null;
  dateOfBirth: string | null;
  height: number | null;
  weight: number | null;
  sport: string;
  position: string | null;
  school: string | null;
  classYear: number | null;
  city: string | null;
  state: string | null;
  gpa: number | null;
  satScore: number | null;
  actScore: number | null;
}

// Filter types
export interface AthleteFilters {
  sport?: string;
  position?: string;
  state?: string;
  classYear?: number;
  minRating?: number;
  maxRating?: number;
  search?: string;
}

export interface EventFilters {
  sport?: string;
  type?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}
