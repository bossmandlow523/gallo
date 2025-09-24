'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

import { NAVIGATION_ITEMS } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
      style={
        isScrolled
          ? {
              background:
                'linear-gradient(135deg, rgba(27, 24, 37, 0.4) 0%, rgba(24, 56, 98, 0.4) 70%, rgba(0, 247, 255, 0.35) 100%)',
            }
          : undefined
      }
    >
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center p-1.5">
            <Logo size="md" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {NAVIGATION_ITEMS.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link font-bebas-neue text-sm uppercase tracking-wide"
              onClick={e => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="primary"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Let&apos;s Talk
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-nav-start px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 flex items-center p-1.5">
                  <Logo size="sm" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {NAVIGATION_ITEMS.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 font-bebas-neue text-base uppercase leading-7 tracking-wide text-white hover:bg-white/10"
                        onClick={e => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          setTimeout(() => {
                            document.querySelector(item.href)?.scrollIntoView({
                              behavior: 'smooth',
                            });
                          }, 300);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="py-6">
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          document.querySelector('#contact')?.scrollIntoView({
                            behavior: 'smooth',
                          });
                        }, 300);
                      }}
                    >
                      Let&apos;s Talk
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
