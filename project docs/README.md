# Gallo Shines - Professional Marine & Auto Detailing

A modern, professional Next.js website for Gallo Shines marine and auto detailing services.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Professional Design**: Elegant, responsive design optimized for the marine and auto detailing industry
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **SEO Ready**: Built-in SEO optimization with proper meta tags and structured data
- **Contact Forms**: Professional contact form with email integration
- **Mobile First**: Fully responsive design that works perfectly on all devices
- **Animations**: Smooth, professional animations using Framer Motion
- **Type Safe**: Full TypeScript implementation for better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- pnpm 8.0.0 or higher (recommended) or npm/yarn

### Installation

1. **Clone and setup the project**

   ```bash
   cd gallo
   pnpm install
   ```

2. **Environment Configuration**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   # Email Configuration (required for contact forms)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   CONTACT_EMAIL="info@galloshines.com"

   # Database (optional for now)
   DATABASE_URL="postgresql://username:password@localhost:5432/gallo_shines"
   ```

3. **Start Development Server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
gallo/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
├── prisma/                # Database schema (future use)
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🛠 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

### Code Quality

The project includes:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for pre-commit hooks
- **lint-staged** for staged file linting

## 🎨 Design System

### Brand Colors

- **Primary**: `#2E7CB8` - Main brand color
- **Accent**: `#4A9EE0` - Accent and highlight color
- **Heading**: `#183862` - Text headings
- **Navigation**: Gradient from `#1B1825` to `#183862`

### Typography

- **Font**: Barlow (Google Fonts)
- **Headings**: Bold weights with tight letter spacing
- **Body**: Regular weight with optimal line height

### Components

- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Hover effects with subtle shadows
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with smooth scrolling

## 🚢 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Configure Environment Variables**
   Add your environment variables in the Vercel dashboard

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📧 Email Configuration

For the contact form to work, configure your email settings:

### Gmail Setup

1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `SMTP_PASS`

### Other Email Providers

Update the SMTP settings in your `.env.local` file accordingly.

## 🗄️ Database (Optional)

The project includes Prisma schema for future database functionality:

1. **Setup Database**

   ```bash
   npx prisma migrate dev --name init
   ```

2. **Generate Prisma Client**

   ```bash
   npx prisma generate
   ```

3. **View Database**
   ```bash
   npx prisma studio
   ```

## 🔧 Customization

### Brand Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#4A9EE0', // Your accent color
    600: '#2E7CB8', // Your primary color
  }
}
```

### Content

- Update text content in component files
- Replace placeholder images in the gallery section
- Modify contact information in `ContactSection.tsx`

### Services

Edit the services array in `ServicesSection.tsx` to match your offerings.

## 📱 Features Implementation Status

### ✅ Completed (Phase 1 MVP)

- [x] Modern Next.js 14 setup with TypeScript
- [x] Professional responsive design
- [x] Brand-aligned color scheme and typography
- [x] Hero section with smooth animations
- [x] Services showcase with detailed descriptions
- [x] Pricing sections for auto detailing and pressure washing
- [x] About section highlighting expertise
- [x] Gallery section for before/after showcase
- [x] Customer testimonials
- [x] Contact form with email integration
- [x] Mobile-first responsive design
- [x] SEO optimization
- [x] Performance optimizations

### 🔄 Future Enhancements (Phase 2)

- [ ] Cloudinary integration for image optimization
- [ ] Online booking system (Calendly integration)
- [ ] Customer portal with authentication
- [ ] Payment processing (Stripe integration)
- [ ] CRM integration (HubSpot)
- [ ] Advanced analytics (Google Analytics 4)
- [ ] Performance monitoring (Sentry)

### 🚀 Advanced Features (Phase 3)

- [ ] Business intelligence dashboard
- [ ] Customer loyalty program
- [ ] Automated marketing workflows
- [ ] A/B testing framework
- [ ] Advanced caching with Redis

## 📞 Support

For questions about this implementation:

- Review the code comments for detailed explanations
- Check the tech stack architecture document
- Refer to Next.js and Tailwind CSS documentation

## 📄 License

This project is built for Gallo Shines marine and auto detailing services.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
