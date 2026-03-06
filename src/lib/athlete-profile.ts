import type { Athlete, SocialLink } from '@prisma/client';
import type { AthleteProfileInput } from '@/lib/validations';

export const socialPlatformByField = {
  instagram: 'Instagram',
  twitter: 'Twitter',
  tiktok: 'TikTok',
  youtube: 'YouTube',
} as const;

type SocialField = keyof typeof socialPlatformByField;

type AthleteProfileRecord = Pick<
  Athlete,
  | 'bio'
  | 'sport'
  | 'position'
  | 'height'
  | 'weight'
  | 'school'
  | 'classYear'
  | 'gpa'
  | 'city'
  | 'state'
> & {
  socialLinks?: Array<Pick<SocialLink, 'platform' | 'url'>>;
};

function getSocialLinkUrl(
  socialLinks: Array<Pick<SocialLink, 'platform' | 'url'>> | undefined,
  platform: string
) {
  return socialLinks?.find((link) => link.platform === platform)?.url ?? '';
}

export function mapAthleteRecordToFormValues(
  athlete: AthleteProfileRecord | null | undefined
): AthleteProfileInput {
  return {
    bio: athlete?.bio ?? '',
    sport: athlete?.sport ?? '',
    position: athlete?.position ?? '',
    height: athlete?.height ?? undefined,
    weight: athlete?.weight ?? undefined,
    school: athlete?.school ?? '',
    graduationYear: athlete?.classYear ?? undefined,
    gpa: athlete?.gpa ?? undefined,
    city: athlete?.city ?? '',
    state: athlete?.state ?? '',
    instagram: getSocialLinkUrl(athlete?.socialLinks, socialPlatformByField.instagram),
    twitter: getSocialLinkUrl(athlete?.socialLinks, socialPlatformByField.twitter),
    tiktok: getSocialLinkUrl(athlete?.socialLinks, socialPlatformByField.tiktok),
    youtube: getSocialLinkUrl(athlete?.socialLinks, socialPlatformByField.youtube),
  };
}

export function splitAthleteProfileInput(input: Partial<AthleteProfileInput>) {
  const { graduationYear, instagram, twitter, tiktok, youtube, ...athleteFields } = input;

  const socialLinks: Array<{
    field: SocialField;
    platform: string;
    url: string | undefined;
  }> = [
    { field: 'instagram' as const, platform: socialPlatformByField.instagram, url: instagram },
    { field: 'twitter' as const, platform: socialPlatformByField.twitter, url: twitter },
    { field: 'tiktok' as const, platform: socialPlatformByField.tiktok, url: tiktok },
    { field: 'youtube' as const, platform: socialPlatformByField.youtube, url: youtube },
  ].filter(({ field }) => Object.prototype.hasOwnProperty.call(input, field));

  const athleteData = {
    ...athleteFields,
    ...(Object.prototype.hasOwnProperty.call(input, 'graduationYear')
      ? { classYear: graduationYear }
      : {}),
  };

  return {
    athleteData,
    socialLinks,
  };
}
