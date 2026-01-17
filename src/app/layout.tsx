import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { FloatingHome } from '@/components/shared/floating-home';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Overall 99 - Build Their Legacy',
    template: '%s | Overall 99',
  },
  description:
    'The premier platform connecting athletes with college recruiters and NIL opportunities. Get discovered based on your performance, not just your highlight reel.',
  keywords: ['athlete', 'recruiting', 'NIL', 'sports', 'college', 'high school', 'ratings', 'Overall 99'],
  authors: [{ name: 'Overall 99' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://overall99.com',
    siteName: 'Overall 99',
    title: 'Overall 99 - Build Their Legacy',
    description:
      'The premier platform connecting athletes with college recruiters and NIL opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overall 99 - Build Their Legacy',
    description:
      'The premier platform connecting athletes with college recruiters and NIL opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingHome />
          </div>
        </Providers>
      </body>
    </html>
  );
}
