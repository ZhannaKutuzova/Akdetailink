# Overview

This is a mobile auto detailing business website for AK Detailing Service LLC, serving the Las Vegas Valley area. The application is a full-stack web application that showcases specialized car detailing services (paint correction and ceramic coating) and provides a contact form for customer inquiries. The site functions as a professional business website with service descriptions, pricing information, and lead generation capabilities.

## Recent Changes (October 2025)
- **Thank You Page (Latest)**: Added post-submission confirmation page
  - Created ThankYou.tsx page with success confirmation design
  - Automatic redirect from contact form after successful submission
  - Quick contact options (Call Now, Email Us buttons)
  - Social media links (Instagram, WhatsApp)
  - Navigation buttons (Back to Home, View Pricing)
  - Service preview cards (6 clickable service cards)
  - SEO optimized with unique meta tags
  - E2E tested and verified working correctly
- **SEO Optimization**: Comprehensive SEO implementation with dynamic meta tags for all pages
  - Created SEO utility function (lib/seo.ts) for managing meta tags
  - Added unique titles (≤60 characters) and descriptions (≤160 characters) to all pages
  - Implemented Open Graph tags for social media sharing
  - Optimized with Las Vegas car detailing keywords for local search
  - All pages tested and verified working correctly
- **Service Restoration**: Restored "Wash & Wax", "Premium Wash", and "Interior Detail" services to all pages
- **Complete Service Portfolio**: Website now displays all 5 core services: Wash & Wax, Premium Wash, Interior Detail, Paint Correction, and Ceramic Coating
- **Updated Navigation & Pricing**: All navigation menus, pricing tables, service cards, and routes updated to include all services

## Business Information
- **Name**: AK Detailing Service LLC
- **Tagline**: Premium mobile paint correction & detailing
- **Phone**: +1 (702) 518-6014
- **Email**: akdetailingservislv@gmail.com
- **Service Areas**: Summerlin, Henderson, Spring Valley, Enterprise, Las Vegas Valley, North Las Vegas
- **Hours**: Monday-Friday 8:00 AM - 7:00 PM, Saturday-Sunday 9:00 AM - 5:00 PM
- **Social Media**: Instagram (@akdetailingservices), Facebook, WhatsApp, Telegram
- **Features**: Mobile on-site service, Same-day completion

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Styling**: Tailwind CSS with custom CSS variables for theming, Inter font family
- **Form Handling**: React Hook Form with Zod for validation
- **Build Tool**: Vite with custom configuration for development and production builds
- **UX Features**: Loading spinner on app startup, exit-intent banner with 15% discount offer
- **SEO**: Dynamic meta tags with updateMetaTags utility, unique titles/descriptions per page, Open Graph support

## Backend Architecture - Production Ready ✅
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with contact form submission and admin endpoints
- **Database**: PostgreSQL with Drizzle ORM and Neon Database serverless connection
- **Security**: Rate limiting (5 requests/15min), honeypot protection, admin API key authentication
- **Health Checks**: `/healthz` (basic), `/readyz` (database connectivity)
- **Error Handling**: Centralized error middleware with proper HTTP status codes and Zod validation

## Data Storage Solutions - Implemented ✅
- **Production**: PostgreSQL database with Drizzle ORM via Neon Database
- **Development Fallback**: In-memory storage if DATABASE_URL unavailable
- **Database Schema**: Contacts table with proper constraints and timestamps
- **Migration Support**: Drizzle Kit migrations generated and applied
- **Data Models**: Contact forms with validation and bot protection

## Security & Production Features ✅
- **Rate Limiting**: Express-rate-limit protecting contact form submissions
- **Bot Protection**: Honeypot field detection and IP logging
- **Admin Access**: Protected `/api/contacts` endpoint with pagination
- **Environment**: .env.example template, Node.js version specification (.nvmrc)
- **Monitoring**: Health check endpoints for deployment readiness

# External Dependencies

## Database
- **Primary Database**: PostgreSQL configured through Neon Database serverless connection
- **ORM**: Drizzle ORM with Zod integration for type-safe database operations
- **Connection**: Environment variable-based configuration with DATABASE_URL

## Notifications - Implemented ✅
- **Telegram Integration**: Bot notifications for new contact form submissions
- **Bot Name**: AK Detailing Notifications (@AKDetailingNotificationsbot)
- **Setup Status**: Bot configured with CHAT_ID 197840565
- **Features**: Rich HTML formatting, contact links, Las Vegas timezone timestamps
- **API Endpoints**: `/api/test-telegram` (testing), `/api/telegram-info` (diagnostics)

## Deployment - Vercel Ready ✅
- **Platform**: Configured for Vercel.com serverless deployment
- **Configuration**: vercel.json with proper routing and build commands
- **API Structure**: Serverless functions in /api directory
- **Build Process**: Vite build system with ESBuild bundling
- **Static Assets**: Optimized bundle in dist/public (455KB JS, 68KB CSS)
- **Environment**: Production variables configured for DATABASE_URL, TELEGRAM tokens

## UI Components
- **Component Library**: Shadcn/ui (New York style) with extensive Radix UI primitives
- **Icons**: Lucide React for consistent iconography
- **Styling**: Tailwind CSS with CSS variables for theme customization

## Development Tools
- **Replit Integration**: Specialized plugins for Replit environment including error modals and cartographer
- **Build Tools**: ESBuild for server bundling, PostCSS for CSS processing
- **Type Checking**: TypeScript with strict mode enabled

## Runtime Dependencies
- **HTTP Client**: Fetch API with custom wrapper for API requests
- **Form Validation**: Zod schemas for runtime type validation
- **Date Handling**: date-fns for date manipulation
- **Utility Libraries**: clsx and class-variance-authority for conditional styling

## SEO Implementation - Completed ✅
- **Meta Tags**: Dynamic meta tag management via client/src/lib/seo.ts utility
- **Title Optimization**: All page titles ≤60 characters for optimal search display
- **Description Optimization**: All meta descriptions ≤160 characters for search snippets
- **Keywords**: Targeted Las Vegas car detailing keywords per page
  - Local keywords: "mobile detailing Las Vegas", "ceramic coating Las Vegas", "paint correction Las Vegas"
  - Service keywords: "scratch removal", "interior detailing", "car wash", "hand wash and wax"
  - Location keywords: "Summerlin", "Henderson", "Spring Valley", "North Las Vegas"
- **Open Graph Tags**: Social media sharing optimization with og:title, og:description, og:image
- **Twitter Cards**: Twitter-specific meta tags for enhanced social sharing
- **Base Tags**: index.html includes canonical URL, robots meta, author meta
- **Per-Page SEO**: Each route has unique, keyword-optimized title and description:
  - Home: "Mobile Car Detailing Las Vegas | AK Detailing Service"
  - Paint Correction: "Paint Correction Las Vegas | Scratch Removal Service"
  - Ceramic Coating: "Ceramic Coating Las Vegas | 3-9 Year Protection"
  - Interior Detail: "Interior Detailing Las Vegas | Deep Clean & Shampoo"
  - Wash & Wax: "Wash & Wax Las Vegas | Mobile Car Wash Service"
  - Premium Wash: "Premium Hand Wash Las Vegas | Swirl-Free Car Wash"
  - Pricing: "Car Detailing Prices Las Vegas | Service Pricing"
  - Gallery: "Car Detailing Gallery Las Vegas | Before & After"
  - Reviews: "Car Detailing Reviews Las Vegas | Testimonials"
  - Contact: "Contact | Book Mobile Detailing Las Vegas"