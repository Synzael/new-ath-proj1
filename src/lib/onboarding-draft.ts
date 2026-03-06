export interface GuestOnboardingDraftV1 {
  version: 1;
  createdAt: number;
  name?: string;
  firstName?: string;
  sport?: string;
}

export const ONBOARDING_DRAFT_STORAGE_KEY = 'overall99-onboarding-draft-v1';
export const ONBOARDING_DRAFT_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function normalizeString(value: unknown): string | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmedValue = value.trim();
  return trimmedValue.length > 0 ? trimmedValue : undefined;
}

function isValidDraft(value: unknown): value is GuestOnboardingDraftV1 {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const draft = value as Partial<GuestOnboardingDraftV1>;

  return draft.version === 1 && typeof draft.createdAt === 'number';
}

export function getOnboardingDraft(): GuestOnboardingDraftV1 | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const rawValue = localStorage.getItem(ONBOARDING_DRAFT_STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    const parsedValue: unknown = JSON.parse(rawValue);

    if (!isValidDraft(parsedValue)) {
      clearOnboardingDraft();
      return null;
    }

    if (Date.now() - parsedValue.createdAt > ONBOARDING_DRAFT_TTL_MS) {
      clearOnboardingDraft();
      return null;
    }

    return {
      version: 1,
      createdAt: parsedValue.createdAt,
      name: normalizeString(parsedValue.name),
      firstName: normalizeString(parsedValue.firstName),
      sport: normalizeString(parsedValue.sport),
    };
  } catch {
    clearOnboardingDraft();
    return null;
  }
}

export function saveOnboardingDraft(
  draft: Pick<GuestOnboardingDraftV1, 'name' | 'firstName' | 'sport'>
): void {
  if (typeof window === 'undefined') {
    return;
  }

  const payload: GuestOnboardingDraftV1 = {
    version: 1,
    createdAt: Date.now(),
    name: normalizeString(draft.name),
    firstName: normalizeString(draft.firstName),
    sport: normalizeString(draft.sport),
  };

  localStorage.setItem(ONBOARDING_DRAFT_STORAGE_KEY, JSON.stringify(payload));
}

export function clearOnboardingDraft(): void {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(ONBOARDING_DRAFT_STORAGE_KEY);
}
