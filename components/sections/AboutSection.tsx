'use client';

import { motion } from 'framer-motion';

const benefits = [
  'Certified technicians with specialized training',
  'Professional-grade equipment and premium products',
  'Comprehensive insurance and satisfaction guarantee',
  'On-site service for maximum convenience',
  'Dual expertise in marine and automotive detailing',
];

export function AboutSection() {
  return (
    <section id="about" className="section relative">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <div className="flex h-96 items-center justify-center rounded-xl bg-gallo-button text-lg font-medium text-white lg:h-[400px]">
              [Professional Service Team Photo]
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <h2 className="mb-6 text-heading-xl">
              Expert Care for Your Valuable Investments
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Gallo Shines combines precision, power, and premium service to
                deliver exceptional detailing results. Our specialized knowledge
                of marine environments and luxury vehicles ensures your
                investments receive the professional care they deserve.
              </p>

              <p>
                With years of experience and commitment to excellence, we use
                only the finest products and techniques to protect, restore, and
                enhance your boats, cars, RVs, and property.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-heading-md">Why Choose Gallo Shines?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg
                      className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
