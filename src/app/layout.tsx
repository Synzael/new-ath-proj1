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
    default: 'AthletePlatform - Athlete Recruiting & NIL',
    template: '%s | AthletePlatform',
  },
  description:
    'The premier platform for athlete recruiting and NIL opportunities. Connect athletes with coaches, scouts, and brands.',
  keywords: ['athlete', 'recruiting', 'NIL', 'sports', 'college', 'high school'],
  authors: [{ name: 'AthletePlatform' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://athleteplatform.com',
    siteName: 'AthletePlatform',
    title: 'AthletePlatform - Athlete Recruiting & NIL',
    description:
      'The premier platform for athlete recruiting and NIL opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AthletePlatform - Athlete Recruiting & NIL',
    description:
      'The premier platform for athlete recruiting and NIL opportunities.',
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
