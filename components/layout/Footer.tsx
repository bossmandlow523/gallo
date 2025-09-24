'use client';

import Link from 'next/link';

const footerSections = [
  {
    title: 'Gallo Shines',
    content: [
      'Professional pressure washing and detailing services for boats, cars, RVs, and houses.',
      'Licensed, insured, and committed to excellence.',
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Marine Detailing', href: '#services' },
      { name: 'Auto Detailing', href: '#services' },
      { name: 'RV Cleaning', href: '#services' },
      { name: 'MARINE DETAILING', href: '#services' },
      { name: 'Ceramic Coating', href: '#services' },
    ],
  },
  {
    title: 'Contact Info',
    content: [
      'Phone: (555) 123-WASH',
      'Email: info@galloshines.com',
      'Service Areas: Marina District',
      'Hours: Mon-Sat 8AM-6PM',
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'YouTube', href: '#' },
      { name: 'Google My Business', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gallo-nav text-white">
      <div className="section container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map(section => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-accent">
                {section.title}
              </h3>

              {section.content && (
                <div className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm text-white/90">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {section.links && (
                <div className="space-y-2">
                  {section.links.map(link => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="footer-link block text-sm"
                      onClick={e => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({
                            behavior: 'smooth',
                          });
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-nav-end pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Gallo Shines. All rights reserved. |{' '}
            <Link href="#" className="footer-link">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="#" className="footer-link">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
