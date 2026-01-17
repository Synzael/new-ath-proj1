import Link from 'next/link';
import { ArrowRight, Trophy, Users, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Trophy,
    title: 'Athlete Profiles',
    description:
      'Showcase your skills, stats, and highlight videos to coaches and scouts worldwide.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Rankings',
    description:
      'Our proprietary rating system evaluates athletes across performance, academics, and more.',
  },
  {
    icon: Users,
    title: 'CAM CAMP Events',
    description:
      'Compete in bracket-style tournaments with fan voting and get discovered by top programs.',
  },
  {
    icon: DollarSign,
    title: 'NIL Marketplace',
    description:
      'Connect with brands and secure NIL deals that match your personal brand and values.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 animated-gradient opacity-10" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Your Journey to{' '}
              <span className="gradient-text">Athletic Excellence</span>{' '}
              Starts Here
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              The premier platform connecting elite high school and college athletes with
              coaches, scouts, and NIL opportunities. Build your profile, showcase your
              talent, and get recruited.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Create Your Profile
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/rankings">
                <Button size="lg" variant="outline">
                  View Rankings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform provides comprehensive tools for athlete development and recruiting.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '50K+', label: 'Athletes' },
              { value: '2K+', label: 'Coaches' },
              { value: '500+', label: 'Brands' },
              { value: '$10M+', label: 'NIL Deals' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Join thousands of athletes who are already using our platform to advance their careers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="gap-2">
                Create Free Account
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
