import type { Metadata } from 'next';
import { COMPANY_INFO, SEO_KEYWORDS } from '@/lib/constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description = COMPANY_INFO.description,
  keywords = SEO_KEYWORDS as unknown as string[],
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const siteTitle = title
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`;

  const metadata: Metadata = {
    title: siteTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: siteTitle,
      description,
      url: canonical || COMPANY_INFO.website,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonical || COMPANY_INFO.website,
    },
  };

  return metadata;
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.website,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marina District',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add actual coordinates when available
    },
    openingHours: 'Mo-Sa 08:00-18:00, Su 10:00-16:00',
    priceRange: '$125-$250',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        // Add actual coordinates when available
      },
      geoRadius: '50000', // 50km radius
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Marine Detailing',
          description: 'Professional boat cleaning and maintenance',
          category: 'Marine Services',
        },
        {
          '@type': 'Offer',
          name: 'Auto Detailing',
          description: 'Premium automotive care and protection',
          category: 'Automotive Services',
        },
        {
          '@type': 'Offer',
          name: 'Pressure Washing',
          description: 'Professional exterior cleaning services',
          category: 'Cleaning Services',
        },
      ],
    },
    sameAs: [
      // Add social media URLs when available
    ],
  };
}
