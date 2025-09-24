'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto md:h-12',
    lg: 'h-12 w-auto md:h-16',
  };

  return (
    <Image
      src="/logo.png"
      alt="Gallo Shines - MARINE DETAILING and Detailing"
      width={400}
      height={120}
      className={`${sizeClasses[size]} ${className} object-contain`}
      style={{
        background: 'transparent',
        border: 'none',
      }}
      priority
    />
  );
}
