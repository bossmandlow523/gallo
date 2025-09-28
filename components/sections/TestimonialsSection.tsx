'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const featuredTestimonial = {
  text: "Finally found a good detailer in Bradenton! Jesus from Gallo Shines came to my house and spent like 3 hours on my Porsche Panamera. His helper Nick was super polite too. They got every bit of dog hair out and the outside is shiny as hell. My husband was shocked when he saw it. These guys know what they're doing for sure.",
  author: 'Lisa M.',
  title: 'Bradenton Resident',
  image: '',
};

const testimonials = [
  {
    text: 'Jesus came out and detailed my car yesterday - wow! It looks amazing. My seats were trashed from the kids spilling stuff everywhere but he got it all out. Super nice guy and reasonable price. Definitely calling him again.',
    author: 'Mike R.',
    title: 'Satisfied Customer',
    image: '',
  },
  {
    text: "Had Jesus and Nick from Gallo Shines detail my truck and my wife's SUV. Both guys were really cool and did great work. Nick was cracking jokes the whole time which made it fun. Our cars were gross from beach trips but they look brand new now. Worth every penny!",
    author: 'Tom K.',
    title: 'Local Family',
    image: '',
  },
  {
    text: "Jesus did an awesome job on my Honda! I was embarrassed how dirty it was inside - sunscreen stains, sand everywhere from living here in Sarasota. He didn't judge at all and just got to work. Car looks and smells so much better. Really professional service.",
    author: 'Sarah D.',
    title: 'Sarasota Resident',
    image: '',
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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-12 font-bebas-neue text-5xl uppercase tracking-wide text-white drop-shadow-lg md:text-6xl">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4"
          >
            <div className="relative h-60 w-full overflow-hidden rounded-md lg:h-80">
              <Image
                src="/porsche-testimonial.png"
                alt="Detailed red Porsche Panamera"
                fill
                className="object-cover"
              />
            </div>
            <Card className="col-span-2 flex items-center justify-center border-white/30 bg-white/20 p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                <q className="text-xl font-medium text-white lg:text-3xl">
                  {featuredTestimonial.text}
                </q>
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-white">
                    {featuredTestimonial.author}
                  </p>
                  <p className="text-white/70">{featuredTestimonial.title}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Additional Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-white/30 bg-white/20 backdrop-blur-sm"
              >
                <CardContent className="px-6 pt-6 leading-7">
                  <q className="text-base font-medium text-white">
                    {testimonial.text}
                  </q>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4 leading-5">
                    <Avatar className="size-9 rounded-full ring-1 ring-white/30">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-gallo-button text-sm font-semibold text-white">
                        {testimonial.author.charAt(0)}
                      </div>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-white/70">{testimonial.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
