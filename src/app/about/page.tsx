import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Overall 99 and our mission for athletes, recruiters, and NIL opportunities.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">About Overall 99</h1>
          <p className="text-muted-foreground">
            Build Their Legacy. Overall 99 is a sports technology platform designed to connect
            athletes with college recruiters and NIL opportunities through transparent, credible
            athlete profiles.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            We help student-athletes present their full story with verified metrics, game film,
            academics, and development context so college programs can evaluate potential with more
            confidence.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Bridging the Recruiting Gap</h2>
          <p className="text-muted-foreground">
            Many athletes have the talent to compete at the next level but lack visibility.
            Overall 99 gives athletes a structured profile, a consistent rating framework, and a
            searchable presence that helps coaches discover prospects by sport, position, and
            region.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Safe NIL Opportunities</h2>
          <p className="text-muted-foreground">
            We support responsible NIL discovery by creating a transparent space where athletes,
            families, and organizations can identify potential fits. Our goal is to make early
            opportunity matching clearer and safer while respecting eligibility and compliance
            expectations.
          </p>
        </section>
      </div>
    </main>
  );
}
