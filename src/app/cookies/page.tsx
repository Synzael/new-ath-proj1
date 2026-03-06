import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Understand how Overall 99 uses cookies and similar technologies.',
};

export default function CookiesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground">Last Updated: [Insert Date]</p>
          <p className="text-muted-foreground">
            This Cookie Policy explains how Overall 99 uses cookies and similar technologies to run
            and improve the platform.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Essential Cookies</h2>
          <p className="text-muted-foreground">
            Essential cookies are required for core site functionality, including authentication,
            security controls, and session management.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Analytics Cookies</h2>
          <p className="text-muted-foreground">
            Analytics cookies help us understand traffic, feature usage, and platform performance so
            we can improve user experience over time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Your Choices</h2>
          <p className="text-muted-foreground">
            You can control cookies through browser settings and related consent tools where
            available. Disabling certain cookies may impact platform functionality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            Questions about this Cookie Policy can be sent to [Insert Contact Email].
          </p>
        </section>
      </article>
    </main>
  );
}
