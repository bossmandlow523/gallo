'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { scrollToElement } from '@/lib/utils';

const autoDetailingPackages = [
  {
    title: 'Compact Vehicle',
    price: 'From $125',
    features: [
      'Exterior wash & hand dry',
      'Interior vacuum & wipe-down',
      'Windows cleaned in & out',
    ],
  },
  {
    title: 'Mid Sized',
    price: 'From $150',
    features: [
      'Everything in Compact',
      'Light stain removal',
      'Plastic & vinyl protectant',
    ],
  },
  {
    title: 'Full Sized',
    price: 'From $180',
    features: [
      'Everything in Mid Sized',
      'Clay bar & decontamination',
      'Basic machine polish',
    ],
  },
  {
    title: 'RV Detail',
    price: 'From $160',
    features: [
      'Exterior wash & wax',
      'Bug & tar removal',
      'Basic interior clean',
    ],
  },
];

const pressureWashingPackages = [
  {
    title: 'Home Exterior Wash',
    price: '$150',
    features: [
      'Siding, soffits, fascia',
      'Driveway & walkway rinse',
      'Eco-friendly detergents',
    ],
  },
  {
    title: 'Business Exterior Wash',
    price: '$250',
    features: [
      'Frontage, sidewalks, entries',
      'Gum & stain treatment',
      'Flexible scheduling',
    ],
  },
];

export function CombinedPricing() {
  return (
    <section id="pricing" className="section hero-bg pattern-bg relative">
      <div className="container relative z-10">
        {/* Auto Detailing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-heading-xl text-white">Auto Detailing</h2>
          <p className="mb-12 text-white/80">
            Choose a package matched to your vehicle size.
          </p>
        </motion.div>

        <div className="grid-auto-fit mb-20 grid gap-6">
          {autoDetailingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="plan-card flex h-full flex-col border border-white/20 bg-white/95 shadow-2xl backdrop-blur-sm hover:shadow-cyan/25"
            >
              <div className="border-b border-border bg-muted px-6 py-5">
                <h3 className="bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 bg-clip-text font-bebas-neue text-3xl tracking-wide text-transparent drop-shadow-lg">
                  {pkg.title}
                </h3>
                <p className="mt-3 text-xl font-bold text-heading">
                  {pkg.price}
                </p>
              </div>

              <div className="flex-grow px-6 py-5">
                <ul className="space-y-2 text-muted-foreground">
                  {pkg.features.map((feature, featureIndex) => (
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
              </div>

              <div className="px-6 pb-6">
                <Button
                  className="w-full"
                  onClick={() => scrollToElement('#contact')}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MARINE DETAILING Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-heading-xl text-white">MARINE DETAILING</h2>
          <p className="mb-12 text-white/80">
            Transparent packages for residential and business exteriors.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {pressureWashingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="plan-card flex h-full flex-col border border-white/20 bg-white/95 shadow-2xl backdrop-blur-sm hover:shadow-cyan/25"
              >
                <div className="border-b border-border bg-muted px-6 py-5">
                  <h3 className="text-lg font-semibold text-heading">
                    {pkg.title}
                  </h3>
                  <p className="mt-3 text-2xl font-bold text-heading">
                    {pkg.price}
                  </p>
                </div>

                <div className="flex-grow px-6 py-5">
                  <ul className="space-y-2 text-muted-foreground">
                    {pkg.features.map((feature, featureIndex) => (
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
                </div>

                <div className="px-6 pb-6">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => scrollToElement('#contact')}
                  >
                    Get Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
