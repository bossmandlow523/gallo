import type { Metadata } from 'next';
import { Barlow, Bebas_Neue, Crimson_Text, Italianno } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-text',
  display: 'swap',
});

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italianno',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Gallo Shines - Premium Marine & Auto Detailing',
    template: '%s | Gallo Shines',
  },
  description:
    'Professional marine and auto detailing services. Expert boat cleaning, car detailing, ceramic coating, and paint protection. Serving boats, cars, RVs, and houses.',
  keywords: [
    'marine detailing',
    'auto detailing',
    'boat cleaning',
    'car detailing',
    'ceramic coating',
    'paint protection',
    'pressure washing',
    'RV cleaning',
    'professional detailing',
  ],
  authors: [{ name: 'Gallo Shines' }],
  creator: 'Gallo Shines',
  publisher: 'Gallo Shines',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://galloshines.com',
    siteName: 'Gallo Shines',
    title: 'Gallo Shines - Premium Marine & Auto Detailing',
    description:
      'Professional marine and auto detailing services. Expert boat cleaning, car detailing, ceramic coating, and paint protection.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gallo Shines - Premium Marine & Auto Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallo Shines - Premium Marine & Auto Detailing',
    description:
      'Professional marine and auto detailing services. Expert boat cleaning, car detailing, ceramic coating, and paint protection.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${bebasNeue.variable} ${crimsonText.variable} ${italianno.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
