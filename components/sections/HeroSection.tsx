'use client';

import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { HeroCarousel } from '@/components/ui/HeroCarousel';
import { scrollToElement } from '@/lib/utils';

export function HeroSection() {
  const heroImages = ['/hero-1.png'];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center text-white"
    >
      <HeroCarousel images={heroImages} />
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Subheadline - We Come to You */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span
              className="inline-block rounded-full border-2 bg-accent/20 px-6 py-2 font-bebas-neue text-xl tracking-wide backdrop-blur-sm"
              style={{ borderColor: '#00f7ff', color: '#00f7ff' }}
            >
              We Come to You!
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 leading-tight text-white"
          >
            <span className="block text-5xl font-bold md:text-7xl lg:text-8xl">
              <span className="bg-gallo-button bg-clip-text text-transparent">
                Mobile
              </span>
            </span>
            <span className="mt-2 block text-4xl font-bold md:text-6xl lg:text-7xl">
              Marine & Auto Detailing
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-lg text-white opacity-90 md:text-xl"
          >
            Get the 5-star service you deserve! Expert pressure washing and
            detailing services that protect your investment with premium care,
            advanced techniques, and guaranteed satisfaction.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center"
          >
            <AnimatedButton
              variant="primary"
              onClick={() => scrollToElement('#contact')}
            >
              BOOK NOW
            </AnimatedButton>

            {/* Phone CTA for mobile prominence */}
            <a
              href="tel:(555) 123-WASH"
              className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gallo-button">
                <span className="text-lg text-white">📞</span>
              </div>
              <div className="text-left">
                <div className="text-sm text-white/70">Call or Text</div>
                <div className="text-lg font-semibold text-white">
                  (555) 123-WASH
                </div>
              </div>
            </a>

            <AnimatedButton
              variant="secondary"
              onClick={() => scrollToElement('#services')}
            >
              VIEW SERVICES
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="h-6 w-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
