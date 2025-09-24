'use client';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

interface GalloPricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  isPopular: boolean;
}

interface GalloPricingProps {
  plans: GalloPricingPlan[];
  title?: string;
  description?: string;
}

export function GalloPricing({
  plans,
  title = 'Choose Your Package',
  description = 'Professional detailing services tailored to your vehicle size and needs',
}: GalloPricingProps) {
  const handleBookNow = () => {
    scrollToElement('#contact');
  };

  return (
    <div className="py-16">
      <div className="mb-16 space-y-6 text-center">
        <h2 className="font-bebas-neue text-5xl tracking-wide text-white md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            className={cn(
              'relative flex flex-col rounded-2xl border-2 bg-white/10 p-8 text-center backdrop-blur-sm',
              plan.isPopular
                ? 'scale-105 border-[#00f7ff] shadow-[0_0_30px_rgba(0,247,255,0.3)]'
                : 'border-white/20 transition-all duration-300 hover:border-[#00f7ff]/50'
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-gradient-to-r from-[#00f7ff] to-[#4A9EE0] px-6 py-2">
                <Star className="mr-2 h-4 w-4 fill-current text-white" />
                <span className="font-bebas-neue text-sm tracking-wide text-white">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="flex flex-1 flex-col">
              <h3 className="mb-4 font-bebas-neue text-2xl tracking-wide text-[#00f7ff]">
                {plan.name}
              </h3>

              <div className="mb-6">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  {plan.price}
                </div>
                <div className="text-sm font-medium uppercase tracking-wide text-white/60">
                  {plan.period}
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-left">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00f7ff]" />
                    <span className="text-sm leading-relaxed text-white/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleBookNow}
                className={cn(
                  'w-full font-bebas-neue text-lg tracking-wider transition-all duration-300',
                  plan.isPopular
                    ? 'border-0 bg-gradient-to-r from-[#00f7ff] to-[#4A9EE0] text-white hover:shadow-[0_8px_20px_rgba(0,247,255,0.4)]'
                    : 'border-2 border-[#00f7ff] bg-transparent text-[#00f7ff] hover:bg-[#00f7ff] hover:text-white'
                )}
              >
                {plan.buttonText}
              </Button>

              <p className="mt-4 text-xs leading-relaxed text-white/60">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
