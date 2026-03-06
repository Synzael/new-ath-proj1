import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the terms governing use of the Overall 99 platform.',
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>
          <p className="text-muted-foreground">
            These Terms of Service govern your access to and use of Overall 99. By using the
            platform, you agree to these terms.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">User Conduct</h2>
          <p className="text-muted-foreground">
            Users must comply with applicable laws and platform rules, and must not upload unlawful,
            abusive, misleading, or infringing content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Athlete Profile Accuracy</h2>
          <p className="text-muted-foreground">
            Athletes and account holders are responsible for accurate representation of stats,
            measurables, eligibility details, and media. Misrepresentation may result in content
            removal, account restrictions, or suspension.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">No Scholarship or NIL Guarantee</h2>
          <p className="text-muted-foreground">
            Overall 99 provides discovery tools and informational ratings only. We do not guarantee
            college recruitment outcomes, scholarship offers, roster placement, or NIL deal
            completion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            To the maximum extent permitted by law, Overall 99 is not liable for indirect,
            incidental, or consequential damages arising from platform use, third-party conduct, or
            recruiting and NIL decisions made by users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p className="text-muted-foreground">
            These terms are governed by the laws of [Insert Jurisdiction], without regard to
            conflict of law principles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            Questions about these terms can be sent to [Insert Contact Email].
          </p>
        </section>
      </article>
    </main>
  );
}
