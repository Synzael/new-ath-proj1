'use client';

import { useEffect, useState, useTransition } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import {
  ArrowLeft,
  Camera,
  User,
  Trophy,
  GraduationCap,
  Link as LinkIcon,
  Save,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import { athleteProfileSchema, type AthleteProfileInput } from '@/lib/validations';
import { mapAthleteRecordToFormValues } from '@/lib/athlete-profile';
import { PROFILE_SPORTS, SPORT_POSITIONS, US_STATES } from '@/lib/profile-options';
import { getInitials } from '@/lib/utils';

export default function ProfileEditPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AthleteProfileInput>({
    resolver: zodResolver(athleteProfileSchema),
    defaultValues: {
      bio: '',
      sport: '',
      position: '',
      height: undefined,
      weight: undefined,
      school: '',
      graduationYear: undefined,
      gpa: undefined,
      city: '',
      state: '',
      instagram: '',
      twitter: '',
      tiktok: '',
      youtube: '',
    },
  });

  const selectedSport = watch('sport');
  const availablePositions = SPORT_POSITIONS[selectedSport] || [];

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      try {
        const response = await fetch('/api/athletes/me');

        if (response.status === 404) {
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to load profile');
        }

        const athlete = await response.json();

        if (!isMounted) {
          return;
        }

        reset(mapAthleteRecordToFormValues(athlete));
      } catch {
        toast.error('Could not load your current profile.');
      } finally {
        if (isMounted) {
          setIsLoadingProfile(false);
        }
      }
    };

    void loadProfile();

    return () => {
      isMounted = false;
    };
  }, [reset]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: AthleteProfileInput) => {
    startTransition(async () => {
      try {
        const response = await fetch('/api/athletes/me', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Failed to update profile');
        }

        toast.success('Profile updated successfully!');
        router.push('/dashboard');
      } catch {
        toast.error('Failed to update profile. Please try again.');
      }
    });
  };

  if (isLoadingProfile) {
    return (
      <div className="container max-w-4xl py-8">
        <Card>
          <CardHeader>
            <CardTitle>Loading profile</CardTitle>
            <CardDescription>Pulling your saved athlete details.</CardDescription>
          </CardHeader>
          <CardContent className="py-8">
            <div className="flex justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <p className="text-muted-foreground">Update your athlete profile information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Basic</span>
            </TabsTrigger>
            <TabsTrigger value="athletic" className="gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Athletic</span>
            </TabsTrigger>
            <TabsTrigger value="academic" className="gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Academic</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="gap-2">
              <LinkIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Social</span>
            </TabsTrigger>
          </TabsList>

          {/* Basic Info */}
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Your public profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Photo */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                      <AvatarImage src={imagePreview || undefined} />
                      <AvatarFallback className="text-2xl">
                        {getInitials(session?.user?.name || 'User')}
                      </AvatarFallback>
                    </Avatar>
                    <label
                      htmlFor="avatar"
                      className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Camera className="h-4 w-4" />
                      <input
                        id="avatar"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                  <div>
                    <h3 className="font-semibold">{session?.user?.name}</h3>
                    <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
                  </div>
                </div>

                <Separator />

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell scouts and coaches about yourself..."
                    rows={4}
                    {...register('bio')}
                  />
                  {errors.bio && <p className="text-sm text-destructive">{errors.bio.message}</p>}
                  <p className="text-xs text-muted-foreground">
                    {watch('bio')?.length || 0}/500 characters
                  </p>
                </div>

                {/* Location */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Los Angeles" {...register('city')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select
                      value={watch('state')}
                      onValueChange={(value) => setValue('state', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Athletic Info */}
          <TabsContent value="athletic">
            <Card>
              <CardHeader>
                <CardTitle>Athletic Information</CardTitle>
                <CardDescription>Your sport and physical attributes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="sport">Primary Sport</Label>
                    <Select
                      value={watch('sport')}
                      onValueChange={(value) => {
                        setValue('sport', value);
                        setValue('position', '');
                      }}
                    >
                      <SelectTrigger>
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
                    {errors.sport && (
                      <p className="text-sm text-destructive">{errors.sport.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Select
                      value={watch('position')}
                      onValueChange={(value) => setValue('position', value)}
                      disabled={!selectedSport || availablePositions.length === 0}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {availablePositions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="72"
                      {...register('height', { valueAsNumber: true })}
                    />
                    {errors.height && (
                      <p className="text-sm text-destructive">{errors.height.message}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      e.g., 72 inches = 6&apos;0&quot;
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="185"
                      {...register('weight', { valueAsNumber: true })}
                    />
                    {errors.weight && (
                      <p className="text-sm text-destructive">{errors.weight.message}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Academic Info */}
          <TabsContent value="academic">
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
                <CardDescription>Your school and academic achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="school">School Name</Label>
                  <Input id="school" placeholder="Oak Valley High School" {...register('school')} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Select
                      value={watch('graduationYear')?.toString()}
                      onValueChange={(value) => setValue('graduationYear', parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => 2024 + i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gpa">GPA</Label>
                    <Input
                      id="gpa"
                      type="number"
                      step="0.01"
                      min="0"
                      max="4.0"
                      placeholder="3.50"
                      {...register('gpa', { valueAsNumber: true })}
                    />
                    {errors.gpa && <p className="text-sm text-destructive">{errors.gpa.message}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Links */}
          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>Connect your social media accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram" className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Label>
                  <Input
                    id="instagram"
                    placeholder="https://instagram.com/username"
                    {...register('instagram')}
                  />
                  {errors.instagram && (
                    <p className="text-sm text-destructive">{errors.instagram.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter" className="flex items-center gap-2">
                    <Twitter className="h-4 w-4" />
                    Twitter / X
                  </Label>
                  <Input
                    id="twitter"
                    placeholder="https://twitter.com/username"
                    {...register('twitter')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tiktok">TikTok</Label>
                  <Input
                    id="tiktok"
                    placeholder="https://tiktok.com/@username"
                    {...register('tiktok')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtube" className="flex items-center gap-2">
                    <Youtube className="h-4 w-4" />
                    YouTube
                  </Label>
                  <Input
                    id="youtube"
                    placeholder="https://youtube.com/@channel"
                    {...register('youtube')}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="mt-6 flex items-center justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/dashboard">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isPending}>
            <Save className="mr-2 h-4 w-4" />
            {isPending ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </div>
  );
}
