'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LoadingSpinner } from '@/components/shared/loading';
import { PROFILE_SPORTS, SPORT_POSITIONS, US_STATES } from '@/lib/profile-options';
import { clearOnboardingDraft, getOnboardingDraft } from '@/lib/onboarding-draft';
import type { UserRole } from '@/types';

type SupportedRole = Exclude<UserRole, 'ADMIN'>;

interface AthleteProfileCompletionValues {
  name: string;
  sport: string;
  position: string;
  school: string;
  graduationYear: string;
  city: string;
  state: string;
  bio: string;
}

interface CoachProfileCompletionValues {
  name: string;
  organization: string;
  sport: string;
  roleTitle: string;
  bio: string;
}

interface BrandProfileCompletionValues {
  name: string;
  companyName: string;
  website: string;
  description: string;
}

interface ProfileCompletionFormProps {
  role: SupportedRole;
  initialValues:
    | AthleteProfileCompletionValues
    | CoachProfileCompletionValues
    | BrandProfileCompletionValues;
}

function isBlank(value: string): boolean {
  return value.trim().length === 0;
}

export function ProfileCompletionForm({ role, initialValues }: ProfileCompletionFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState(initialValues);

  React.useEffect(() => {
    const draft = getOnboardingDraft();

    if (!draft) {
      return;
    }

    setFormData((current) => {
      const draftName = draft.name ?? draft.firstName;

      if (role === 'ATHLETE') {
        const athleteForm = current as AthleteProfileCompletionValues;
        return {
          ...athleteForm,
          name: isBlank(athleteForm.name) && draftName ? draftName : athleteForm.name,
          sport: isBlank(athleteForm.sport) && draft.sport ? draft.sport : athleteForm.sport,
        };
      }

      const roleForm = current as CoachProfileCompletionValues | BrandProfileCompletionValues;
      return {
        ...roleForm,
        name: isBlank(roleForm.name) && draftName ? draftName : roleForm.name,
      };
    });
  }, [role]);

  const selectedSport =
    role === 'ATHLETE' ? (formData as AthleteProfileCompletionValues).sport : '';
  const availablePositions = SPORT_POSITIONS[selectedSport] ?? [];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError(null);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((current) => ({ ...current, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const draft = getOnboardingDraft();
    const draftName = draft?.name ?? draft?.firstName;
    let submissionData = formData;

    if (role === 'ATHLETE') {
      const athleteForm = formData as AthleteProfileCompletionValues;
      submissionData = {
        ...athleteForm,
        name: isBlank(athleteForm.name) && draftName ? draftName : athleteForm.name,
        sport: isBlank(athleteForm.sport) && draft?.sport ? draft.sport : athleteForm.sport,
      };
    } else {
      const roleForm = formData as CoachProfileCompletionValues | BrandProfileCompletionValues;
      submissionData = {
        ...roleForm,
        name: isBlank(roleForm.name) && draftName ? draftName : roleForm.name,
      };
    }

    try {
      const response = await fetch('/api/onboarding/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to complete profile');
        return;
      }

      clearOnboardingDraft();
      router.push('/dashboard');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle>Complete your profile</CardTitle>
          <CardDescription>
            {role === 'ATHLETE'
              ? 'Add the details that power rankings and discovery.'
              : 'Add the essentials so your dashboard starts in a usable state.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error ? (
              <div
                className="rounded-md bg-destructive/10 p-3 text-sm text-destructive"
                role="alert"
              >
                {error}
              </div>
            ) : null}

            {role === 'ATHLETE' ? (
              <AthleteFields
                values={formData as AthleteProfileCompletionValues}
                positions={availablePositions}
                onInputChange={handleInputChange}
                onSelectChange={handleSelectChange}
              />
            ) : null}

            {role === 'COACH' ? (
              <CoachFields
                values={formData as CoachProfileCompletionValues}
                onInputChange={handleInputChange}
                onSelectChange={handleSelectChange}
              />
            ) : null}

            {role === 'BRAND' ? (
              <BrandFields
                values={formData as BrandProfileCompletionValues}
                onInputChange={handleInputChange}
              />
            ) : null}

            <div className="flex items-center justify-end gap-3">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <LoadingSpinner className="mr-2 h-4 w-4" />
                    Saving...
                  </>
                ) : (
                  'Save and continue'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function AthleteFields({
  values,
  positions,
  onInputChange,
  onSelectChange,
}: {
  values: AthleteProfileCompletionValues;
  positions: readonly string[];
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" value={values.name} onChange={onInputChange} required />
        </Field>
        <Field>
          <Label htmlFor="sport">Sport</Label>
          <Select value={values.sport} onValueChange={(value) => onSelectChange('sport', value)}>
            <SelectTrigger id="sport">
              <SelectValue placeholder="Select sport" />
            </SelectTrigger>
            <SelectContent>
              {PROFILE_SPORTS.map((sport) => (
                <SelectItem key={sport} value={sport}>
                  {sport}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="position">Position</Label>
          <Select
            value={values.position}
            onValueChange={(value) => onSelectChange('position', value)}
            disabled={positions.length === 0}
          >
            <SelectTrigger id="position">
              <SelectValue
                placeholder={positions.length > 0 ? 'Select position' : 'Choose sport first'}
              />
            </SelectTrigger>
            <SelectContent>
              {positions.map((position) => (
                <SelectItem key={position} value={position}>
                  {position}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <Label htmlFor="school">School</Label>
          <Input
            id="school"
            name="school"
            value={values.school}
            onChange={onInputChange}
            placeholder="Lincoln High"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field>
          <Label htmlFor="graduationYear">Graduation year</Label>
          <Input
            id="graduationYear"
            name="graduationYear"
            type="number"
            value={values.graduationYear}
            onChange={onInputChange}
            placeholder="2027"
          />
        </Field>
        <Field>
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" value={values.city} onChange={onInputChange} />
        </Field>
        <Field>
          <Label htmlFor="state">State</Label>
          <Select value={values.state} onValueChange={(value) => onSelectChange('state', value)}>
            <SelectTrigger id="state">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          value={values.bio}
          onChange={onInputChange}
          rows={5}
          placeholder="Share the details coaches should know first."
        />
      </Field>
    </>
  );
}

function CoachFields({
  values,
  onInputChange,
  onSelectChange,
}: {
  values: CoachProfileCompletionValues;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" value={values.name} onChange={onInputChange} required />
        </Field>
        <Field>
          <Label htmlFor="organization">Organization</Label>
          <Input
            id="organization"
            name="organization"
            value={values.organization}
            onChange={onInputChange}
            placeholder="Oak Valley High"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="sport">Sport</Label>
          <Select value={values.sport} onValueChange={(value) => onSelectChange('sport', value)}>
            <SelectTrigger id="sport">
              <SelectValue placeholder="Select sport" />
            </SelectTrigger>
            <SelectContent>
              {PROFILE_SPORTS.map((sport) => (
                <SelectItem key={sport} value={sport}>
                  {sport}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <Label htmlFor="roleTitle">Role</Label>
          <Input
            id="roleTitle"
            name="roleTitle"
            value={values.roleTitle}
            onChange={onInputChange}
            placeholder="Head Coach"
          />
        </Field>
      </div>

      <Field>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          value={values.bio}
          onChange={onInputChange}
          rows={5}
          placeholder="What should athletes know about your program?"
        />
      </Field>
    </>
  );
}

function BrandFields({
  values,
  onInputChange,
}: {
  values: BrandProfileCompletionValues;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="name">Contact name</Label>
          <Input id="name" name="name" value={values.name} onChange={onInputChange} required />
        </Field>
        <Field>
          <Label htmlFor="companyName">Company</Label>
          <Input
            id="companyName"
            name="companyName"
            value={values.companyName}
            onChange={onInputChange}
            required
          />
        </Field>
      </div>

      <Field>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          type="url"
          value={values.website}
          onChange={onInputChange}
          placeholder="https://example.com"
        />
      </Field>

      <Field>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={values.description}
          onChange={onInputChange}
          rows={5}
          placeholder="What kinds of athlete partnerships are you looking for?"
        />
      </Field>
    </>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}
