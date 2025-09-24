// Constants for the Gallo Shines application

export const COMPANY_INFO = {
  name: 'Gallo Shines',
  tagline: 'Professional Marine & Auto Detailing',
  description:
    'Expert pressure washing and detailing services that protect your investment with premium care, advanced techniques, and guaranteed satisfaction.',
  phone: '(555) 123-WASH',
  email: 'info@galloshines.com',
  address: 'Marina District & Surrounding Areas',
  hours: 'Mon-Sat 8AM-6PM, Sun 10AM-4PM',
  website: 'https://galloshines.com',
} as const;

export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  youtube: '#',
  googleBusiness: '#',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
] as const;

export const SERVICE_CATEGORIES = {
  MARINE: 'marine',
  AUTO: 'auto',
  PRESSURE_WASHING: 'pressure-washing',
  RV: 'rv',
  CERAMIC_COATING: 'ceramic-coating',
} as const;

export const AUTO_DETAILING_PACKAGES = [
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
] as const;

export const PRESSURE_WASHING_PACKAGES = [
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
] as const;

export const SERVICES_DATA = [
  {
    icon: '⚓',
    title: 'Marine Detailing',
    description:
      'Professional boat cleaning, hull maintenance, deck restoration, and marine-grade protection against saltwater and UV damage.',
    features: [
      'Boat exterior cleaning & waxing',
      'Interior detailing & protection',
      'Hull cleaning & maintenance',
      'Deck restoration & care',
    ],
    category: SERVICE_CATEGORIES.MARINE,
  },
  {
    icon: '🚗',
    title: 'Auto Detailing',
    description:
      'Premium automotive care including paint correction, ceramic coating, interior protection, and luxury vehicle specialization.',
    features: [
      'Paint correction & ceramic coating',
      'Interior deep cleaning & protection',
      'Engine bay detailing',
      'Luxury & exotic car expertise',
    ],
    category: SERVICE_CATEGORIES.AUTO,
  },
  {
    icon: '🏠',
    title: 'Pressure Washing',
    description:
      'Professional pressure washing for homes, RVs, and commercial properties using advanced equipment and eco-friendly solutions.',
    features: [
      'House exterior cleaning',
      'RV washing & maintenance',
      'Driveway & walkway cleaning',
      'Commercial property services',
    ],
    category: SERVICE_CATEGORIES.PRESSURE_WASHING,
  },
] as const;

export const TESTIMONIALS_DATA = [
  {
    text: "Outstanding work on our yacht! The team's attention to detail and marine expertise really shows. Our boat looks better than when we first bought it.",
    author: 'Sarah M., Yacht Owner',
    rating: 5,
  },
  {
    text: 'Professional ceramic coating service for my Tesla. The quality is exceptional and the customer service is top-notch. Highly recommended!',
    author: 'Michael R., Luxury Car Owner',
    rating: 5,
  },
] as const;

export const GALLERY_ITEMS = [
  {
    title: 'Marina Yacht Detailing',
    description: 'Complete hull cleaning, waxing, and protection service',
    placeholder: 'Boat Hull Restoration',
    category: 'marine',
  },
  {
    title: 'Ceramic Coating Application',
    description: 'Paint correction and premium ceramic coating protection',
    placeholder: 'Luxury Car Paint Correction',
    category: 'auto',
  },
  {
    title: 'RV Complete Detailing',
    description: 'Full exterior wash, wax, and interior cleaning service',
    placeholder: 'RV Exterior Cleaning',
    category: 'rv',
  },
  {
    title: 'Residential Pressure Washing',
    description: 'Complete home exterior and driveway cleaning',
    placeholder: 'House Pressure Washing',
    category: 'pressure-washing',
  },
] as const;

export const CONTACT_INFO = [
  {
    icon: '📞',
    label: 'Phone',
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone}`,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: '📍',
    label: 'Service Areas',
    value: COMPANY_INFO.address,
  },
  {
    icon: '🕒',
    label: 'Hours',
    value: COMPANY_INFO.hours,
  },
] as const;

export const WHY_CHOOSE_US = [
  'Certified technicians with specialized training',
  'Professional-grade equipment and premium products',
  'Comprehensive insurance and satisfaction guarantee',
  'On-site service for maximum convenience',
  'Dual expertise in marine and automotive detailing',
] as const;

export const FOOTER_SECTIONS = [
  {
    title: 'Gallo Shines',
    content: [
      'Professional pressure washing and detailing services for boats, cars, RVs, and houses.',
      'Licensed, insured, and committed to excellence.',
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Marine Detailing', href: '#services' },
      { name: 'Auto Detailing', href: '#services' },
      { name: 'RV Cleaning', href: '#services' },
      { name: 'Pressure Washing', href: '#services' },
      { name: 'Ceramic Coating', href: '#services' },
    ],
  },
  {
    title: 'Contact Info',
    content: [
      `Phone: ${COMPANY_INFO.phone}`,
      `Email: ${COMPANY_INFO.email}`,
      `Service Areas: ${COMPANY_INFO.address}`,
      `Hours: ${COMPANY_INFO.hours}`,
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { name: 'Facebook', href: SOCIAL_LINKS.facebook },
      { name: 'Instagram', href: SOCIAL_LINKS.instagram },
      { name: 'YouTube', href: SOCIAL_LINKS.youtube },
      { name: 'Google My Business', href: SOCIAL_LINKS.googleBusiness },
    ],
  },
] as const;

// SEO Keywords
export const SEO_KEYWORDS = [
  'marine detailing',
  'auto detailing',
  'boat cleaning',
  'car detailing',
  'ceramic coating',
  'paint protection',
  'pressure washing',
  'RV cleaning',
  'professional detailing',
  'yacht cleaning',
  'luxury car care',
  'marina district',
  'mobile detailing',
  'hull cleaning',
  'paint correction',
] as const;
