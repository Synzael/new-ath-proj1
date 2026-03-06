import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read how Overall 99 collects, uses, and protects athlete and recruiter information.',
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>
          <p className="text-muted-foreground">
            This Privacy Policy explains how Overall 99 collects, uses, stores, and shares personal
            information when you use our platform.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              Profile information such as name, sport, position, school, graduation year, location,
              stats, and uploaded videos.
            </li>
            <li>
              Account and contact information, including email address and login credentials.
            </li>
            <li>
              Usage and analytics data, including device, browser, interaction events, and platform
              performance metrics.
            </li>
            <li>
              Optional NIL-related contact or financial details when submitted through opportunity
              workflows.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">How We Use Information</h2>
          <p className="text-muted-foreground">
            We use collected information to operate athlete profiles, provide rankings and discovery
            features, improve platform performance, support communications, and maintain account
            security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">How We Share Information</h2>
          <p className="text-muted-foreground">
            Athlete profile information may be shared with registered recruiters and other approved
            platform users for recruiting and evaluation purposes. We may also share data with
            service providers that support hosting, analytics, security, and operations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Minors Under 18</h2>
          <p className="text-muted-foreground">
            Because many users are high school athletes, we take additional care with data that may
            relate to minors under age 18. Parents or guardians may contact us to request review,
            correction, or deletion of a minor&apos;s personal information where applicable by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data Rights and Contact</h2>
          <p className="text-muted-foreground">
            To request access, correction, deletion, or other privacy support, contact us at
            [Insert Contact Email].
          </p>
          <p className="text-muted-foreground">Mailing Address: [Insert Mailing Address]</p>
        </section>
      </article>
    </main>
  );
}
