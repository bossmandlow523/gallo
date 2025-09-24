'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SERVICES_DATA } from '@/lib/constants';

export function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.9', 'end 0.1'],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section ref={sectionRef} id="services" className="section relative">
      <div className="container relative z-10">
        <motion.div
          style={{
            y: headerY,
            opacity: headerOpacity,
            scale: headerScale,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-12 font-bebas-neue text-5xl uppercase tracking-wide text-white drop-shadow-lg md:text-6xl">
            OUR SPECIALIZED SERVICES
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              viewport={{ once: true, margin: '-10%' }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="service-card group"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gallo-button-cyan text-2xl text-white shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6, ease: 'easeInOut' },
                }}
              >
                {service.icon}
              </motion.div>

              <motion.h3
                className="mb-4 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 bg-clip-text font-bebas-neue text-3xl tracking-wide text-transparent drop-shadow-lg"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {service.title}
              </motion.h3>

              <p className="mb-6 text-muted-foreground">
                {service.description}
              </p>

              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
