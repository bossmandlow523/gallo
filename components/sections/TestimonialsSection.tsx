'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Outstanding work on our yacht! The team's attention to detail and marine expertise really shows. Our boat looks better than when we first bought it.",
    author: 'Sarah M., Yacht Owner',
  },
  {
    text: 'Professional ceramic coating service for my Tesla. The quality is exceptional and the customer service is top-notch. Highly recommended!',
    author: 'Michael R., Luxury Car Owner',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-12 font-bebas-neue text-5xl uppercase tracking-wide text-white drop-shadow-lg md:text-6xl">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-accent"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <p className="mb-6 text-lg italic leading-relaxed text-heading">
                {testimonial.text}
              </p>

              <p className="font-semibold text-accent">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
