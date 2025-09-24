import { HeroSection } from '@/components/sections/HeroSection';
import { AutoDetailingPricing } from '@/components/sections/AutoDetailingPricing';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AutoDetailingPricing />
      {/* Unified heroblack background container for services through contact */}
      <div className="relative">
        {/* Single heroblack background layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/heroblack.png")',
          }}
        />

        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
}
