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
              className="group relative flex flex-col rounded-2xl border-2 border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#00f7ff]/50"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <div className="flex flex-1 flex-col">
                <motion.div
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00f7ff] text-2xl text-white shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6, ease: 'easeInOut' },
                  }}
                >
                  {service.icon}
                </motion.div>

                <motion.h3
                  className="mb-4 font-bebas-neue text-2xl tracking-wide text-[#00f7ff]"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {service.title}
                </motion.h3>

                <p className="mb-8 text-sm leading-relaxed text-white/90">
                  {service.description}
                </p>

                <ul className="flex-1 space-y-3 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00f7ff]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm leading-relaxed text-white/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
