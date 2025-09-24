import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gallo Shines Brand Colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#4A9EE0', // accent color
          600: '#2E7CB8', // primary brand color
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#183862', // heading color
        },
        secondary: {
          50: '#f8fafc',
          100: '#F1F5F9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Navigation gradient colors
        'nav-start': '#1B1825',
        'nav-end': '#183862',
        // Neutral colors
        background: '#FFFFFF',
        foreground: '#4A4A4A',
        muted: {
          DEFAULT: '#F7F7F7',
          foreground: '#6B7280',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937',
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#4A9EE0',
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#4A9EE0',
          foreground: '#FFFFFF',
        },
        cyan: {
          DEFAULT: '#00f7ff',
          foreground: '#FFFFFF',
        },
        heading: '#183862',
      },
      fontFamily: {
        sans: [
          'var(--font-barlow)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        'bebas-neue': ['var(--font-bebas-neue)', 'cursive'],
        'crimson-text': ['var(--font-crimson-text)', 'serif'],
        italianno: ['var(--font-italianno)', 'cursive'],
        display: ['var(--font-bebas-neue)', 'cursive'],
        heading: ['var(--font-bebas-neue)', 'cursive'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['28px', { lineHeight: '1.3' }],
        'heading-md': ['24px', { lineHeight: '1.3' }],
        'heading-sm': ['20px', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        gallo: '8px',
      },
      boxShadow: {
        'gallo-card': '0 4px 12px rgba(0,0,0,0.1)',
        'gallo-card-hover': '0 8px 24px rgba(0,0,0,0.15)',
        'gallo-button': '0 8px 20px rgba(74, 158, 224, 0.3)',
        'gallo-form': '0 0 0 3px rgba(74, 158, 224, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gallo-hero':
          'linear-gradient(135deg, #1B1825 0%, #183862 30%, #2E7CB8 60%, #00f7ff 100%)',
        'gallo-hero-alt':
          'linear-gradient(45deg, #00f7ff 0%, #4A9EE0 50%, #2E7CB8 100%)',
        'gallo-nav':
          'linear-gradient(135deg, #1B1825 0%, #183862 70%, #00f7ff 100%)',
        'gallo-button': 'linear-gradient(135deg, #4A9EE0, #00f7ff)',
        'gallo-button-cyan': 'linear-gradient(135deg, #00f7ff, #4A9EE0)',
        'gallo-accent': 'linear-gradient(135deg, #2E7CB8, #00f7ff)',
        'gallo-pattern':
          'radial-gradient(24px 24px at 24px 24px, rgba(0,247,255,0.12) 0, rgba(0,247,255,0.12) 2px, transparent 3px), radial-gradient(24px 24px at 72px 72px, rgba(74,158,224,0.12) 0, rgba(74,158,224,0.12) 2px, transparent 3px)',
      },
      backgroundSize: {
        'gallo-pattern': '96px 96px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
