'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/forms/ContactForm';

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
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-heading-xl text-white">
              Get Your Free Quote Today
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Ready to give your boat, car, RV, or home the professional care it
              deserves? Contact us for a personalized quote and schedule your
              service.
            </p>

            <div className="space-y-6">
              <h3 className="text-heading-lg text-accent">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-xl" role="img">
                      {info.icon}
                    </span>
                    <div>
                      <span className="font-medium text-white">
                        {info.label}:
                      </span>{' '}
                      <span className="text-white/90">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
