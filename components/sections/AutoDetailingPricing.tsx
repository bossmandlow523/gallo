'use client';

// Removed unused imports
import { GalloPricing } from '@/components/ui/GalloPricing';

const galloAutoDetailingPlans = [
  {
    name: 'COMPACT VEHICLE',
    price: 'From $125',
    period: 'per service',
    features: [
      'Exterior wash & hand dry',
      'Interior vacuum & wipe-down',
      'Windows cleaned in & out',
      'Tire shine & rim cleaning',
      'Basic interior wipe down',
    ],
    description: 'Perfect for small cars and daily commuters',
    buttonText: 'BOOK NOW',
    isPopular: false,
  },
  {
    name: 'MID SIZED',
    price: 'From $150',
    period: 'per service',
    features: [
      'Everything in Compact',
      'Light stain removal',
      'Plastic & vinyl protectant',
      'Dashboard conditioning',
      'Door jamb cleaning',
    ],
    description: 'Ideal for sedans and small SUVs',
    buttonText: 'BOOK NOW',
    isPopular: true,
  },
  {
    name: 'FULL SIZED',
    price: 'From $180',
    period: 'per service',
    features: [
      'Everything in Mid Sized',
      'Clay bar & decontamination',
      'Basic machine polish',
      'Leather conditioning',
      'Engine bay cleaning',
    ],
    description: 'For large SUVs and trucks',
    buttonText: 'BOOK NOW',
    isPopular: false,
  },
  {
    name: 'RV DETAIL',
    price: 'From $160',
    period: 'per service',
    features: [
      'Exterior wash & wax',
      'Bug & tar removal',
      'Basic interior clean',
      'Awning cleaning',
      'Storage compartment wipe',
    ],
    description: 'Specialized RV and motorhome care',
    buttonText: 'BOOK NOW',
    isPopular: false,
  },
];

const galloMarineDetailingPlans = [
  {
    name: 'BASIC BOAT WASH',
    price: 'From $200',
    period: 'per service',
    features: [
      'Hull wash & rinse',
      'Deck cleaning',
      'Basic interior vacuum',
      'Windows & mirrors',
      'Fender cleaning',
    ],
    description: 'Essential cleaning for smaller vessels',
    buttonText: 'BOOK NOW',
    isPopular: false,
  },
  {
    name: 'PREMIUM MARINE',
    price: 'From $350',
    period: 'per service',
    features: [
      'Everything in Basic',
      'Hull waxing & protection',
      'Interior deep clean',
      'Stainless steel polish',
      'Canvas & vinyl treatment',
      'Engine compartment clean',
    ],
    description: 'Complete care for your investment',
    buttonText: 'BOOK NOW',
    isPopular: true,
  },
  {
    name: 'LUXURY YACHT',
    price: 'From $500',
    period: 'per service',
    features: [
      'Everything in Premium',
      'Multi-stage paint correction',
      'Ceramic coating application',
      'Teak deck restoration',
      'Leather conditioning',
      'Chrome & brass polishing',
    ],
    description: 'White-glove service for luxury vessels',
    buttonText: 'BOOK NOW',
    isPopular: false,
  },
  {
    name: 'MAINTENANCE PLAN',
    price: 'From $150',
    period: 'monthly',
    features: [
      'Bi-weekly washdowns',
      'Monthly wax application',
      'Interior maintenance',
      'Priority scheduling',
      'Storm damage inspection',
    ],
    description: 'Keep your boat show-ready year-round',
    buttonText: 'BOOK NOW',
    isPopular: false,
  },
];

export function AutoDetailingPricing() {
  return (
    <section id="pricing" className="section relative overflow-hidden">
      {/* Hero Gradient Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-gradient-34.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10">
        <GalloPricing
          plans={galloAutoDetailingPlans}
          title="Auto Detailing"
          description="Choose a package matched to your vehicle size"
        />

        <GalloPricing
          plans={galloMarineDetailingPlans}
          title="MARINE DETAILING"
          description="Professional marine care for boats, yachts, and watercraft"
        />
      </div>
    </section>
  );
}
