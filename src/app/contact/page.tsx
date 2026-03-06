import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Overall 99 for support, recruiting platform help, and legal/privacy requests.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">Contact Overall 99</h1>
          <p className="text-muted-foreground">
            Reach out for athlete profile support, recruiter platform questions, partnership
            inquiries, or legal and privacy requests.
          </p>
        </header>

        <section className="space-y-3 rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">General Support</h2>
          <p className="text-muted-foreground">
            For account help, onboarding issues, and platform guidance, email
            [Insert Contact Email].
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">Legal and Privacy Requests</h2>
          <p className="text-muted-foreground">
            For terms, data rights, or privacy-related requests, contact [Insert Contact Email].
          </p>
          <p className="text-muted-foreground">Mailing Address: [Insert Mailing Address]</p>
        </section>
      </div>
    </main>
  );
}
