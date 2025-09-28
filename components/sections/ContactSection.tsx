'use client';

import { motion } from 'framer-motion';
import BookingWidget from '@/components/ui/BookingWidget';
import { ScheduleButton } from '@/components/ui/ScheduleButton';

const contactInfo = [
  {
    icon: '📞',
    label: 'Phone',
    value: '(555) 123-WASH',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@galloshines.com',
  },
  {
    icon: '📍',
    label: 'Service Areas',
    value: 'Marina District & Surrounding Areas',
  },
  {
    icon: '🕒',
    label: 'Hours',
    value: 'Mon-Sat 8AM-6PM, Sun 10AM-4PM',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section relative text-white">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <h2 className="mb-6 font-bebas-neue text-5xl tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] md:text-6xl">
            BOOK YOUR SERVICE TODAY
          </h2>
          <p className="text-xl leading-relaxed text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
            Ready to give your boat, car, RV, or home the professional care it
            deserves? Schedule your appointment instantly or contact us for a
            personalized quote.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - CTA and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Enhanced CTA Section */}
            <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/70 p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm">
              <h3 className="mb-4 font-bebas-neue text-3xl tracking-wide text-white drop-shadow-lg">
                Quick Mobile Booking
              </h3>
              <p className="mb-6 text-gray-200 drop-shadow-sm">
                Perfect for mobile users - opens in a new window for easy
                booking
              </p>
              <ScheduleButton className="w-full sm:w-auto" />
            </div>

            {/* Contact Information */}
            <div className="rounded-2xl border border-gray-700/50 bg-gray-900/70 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <h3 className="mb-6 font-bebas-neue text-2xl tracking-wide text-[#00f7ff] drop-shadow-lg">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 rounded-lg border border-gray-600/30 bg-gray-800/50 p-4 transition-all duration-300 hover:bg-gray-700/60"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00f7ff]/30 text-xl shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-white drop-shadow-sm">
                        {info.label}
                      </div>
                      <div className="font-medium text-gray-200 drop-shadow-sm">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Booking Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <div className="inline-block rounded-2xl border border-gray-700/50 bg-gray-900/70 px-8 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                <h3 className="mb-2 font-bebas-neue text-3xl tracking-wide text-white drop-shadow-lg">
                  Schedule Online
                </h3>
                <p className="text-white/90 drop-shadow-sm">
                  Book your appointment directly below - select your service,
                  date, and time
                </p>
              </div>
            </div>
            <BookingWidget />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl border border-gray-700/50 bg-gray-900/60 px-8 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm">
            <p className="text-lg text-gray-200 drop-shadow-sm">
              Questions? Call us at{' '}
              <a
                href="tel:555-123-WASH"
                className="font-semibold text-[#00f7ff] drop-shadow-sm transition-colors hover:text-white"
              >
                (555) 123-WASH
              </a>{' '}
              or email{' '}
              <a
                href="mailto:info@galloshines.com"
                className="font-semibold text-[#00f7ff] drop-shadow-sm transition-colors hover:text-white"
              >
                info@galloshines.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
