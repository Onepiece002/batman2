# Portfolio Website and Blog - Static Version

## Overview

This is a modern, responsive portfolio website and blog built with React, TypeScript, and Tailwind CSS. The application has been converted to a static site for Netlify deployment, featuring a Peter McKinnon-inspired dark theme with smooth parallax animations, 10 sample blog posts, and a comprehensive portfolio gallery with 15 categorized images.

## Recent Changes (January 24, 2025)

✓ **Hero Section Enhancement**: Updated with larger dark forest background, increased font sizes
✓ **Parallax Improvements**: Enhanced "Visual Storyteller" and "Capturing Moments" sections 
✓ **Featured Work Scrolling**: Implemented horizontal mouse wheel scrolling functionality
✓ **Blog System Consolidation**: Moved all blog content to single editable files in blogPosts.ts
✓ **Navigation Theme Fix**: Fixed light/dark mode styling inconsistencies
✓ **Footer Redesign**: Created compact, aesthetically matching dark theme footer
✓ **Background Consistency**: Updated Latest Insights section to match website theme
✓ **Typography Updates**: Applied custom h1 styling with specific positioning and font weights
✓ **Content Management**: Simplified blog editing to single-file system with rich content
✓ **Image Loading Fix**: Resolved first image display issue in Featured Work section
✓ **Pin Protection System**: Added secure access control with PIN 232502 and black blur overlay
✓ **Golden Hour Portrait Fix**: Updated portfolio image URL to ensure proper display
✓ **Favicon Update**: Changed to "RJ" white letters on black background
✓ **Logo Redesign**: Updated navigation and footer logo to "Rajesh Nunna" in Dancing Script cursive font
✓ **Portfolio Expansion**: Added 45 additional portfolio images (4x expansion from 15 to 60 total images)
✓ **Night Background**: Updated hero section to dark night cityscape image
✓ **Access Code Update**: Changed PIN protection to "250323069802@secret" with enhanced input field
✓ **Enhanced PIN Security**: Added client-side encryption, rate limiting (3 attempts per IP per day), and visual security indicators
✓ **Improved Scroll Animation**: Fixed featured work horizontal scroll to start earlier with optimized intersection observer
✓ **Blog Image Diversity**: Updated all blog posts with unique, distinct images to eliminate duplicate content
✓ **Static Site Security**: Implemented browser-native encryption and IP-based rate limiting without databases or APIs
✓ **Image Error Handling**: Added robust fallback system for failed image loads in featured work section
✓ **Enhanced Animation Timing**: Improved featured work scroll animation to trigger much earlier with optimized intersection observer
✓ **Lifted Hero Effect**: Replaced parallax with lifted scroll effect where hero image moves up faster than scroll, revealing content underneath
✓ **Fixed Text Colors**: Made all section titles (Rajesh Nunna, Beyond Boundaries, Capturing Moments) white in both light and dark modes
✓ **Hero Extension**: Extended hero image to cover navigation area with fixed overlay positioning
✓ **Dark Forest Background**: Updated hero section to dark night forest image
✓ **Ultra-Early Animation Trigger**: Optimized Featured Work scroll animations to start when only 1% of section is visible
✓ **Blog Layout Update**: Converted Latest Insights to sliding carousel with 6 smaller articles (shows 4, slides to view more) with navigation buttons and mouse wheel support
✓ **Theme Support**: Updated blog cards to properly adapt backgrounds and text colors for both light and dark modes

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme variables
- **Animation**: Framer Motion for smooth parallax and page transitions
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with proper HTTP status codes
- **Database**: PostgreSQL with Drizzle ORM for type-safe queries
- **Database Provider**: Neon serverless PostgreSQL

### Data Flow
1. Client makes requests to Express API endpoints
2. Express middleware handles authentication and request validation
3. Drizzle ORM translates queries to PostgreSQL
4. Responses flow back through Express to React frontend
5. TanStack Query caches and manages client-side state

## Key Components

### Authentication System
- **Current Implementation**: Replit Auth with OpenID Connect
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Authorization**: Role-based access control (admin/user roles)
- **Migration Ready**: Abstracted auth service layer for future Firebase integration

### Database Schema
- **Users**: Stores user profiles with admin flags
- **Blog Posts**: Full blog functionality with slug-based routing, drafts, and publishing
- **Portfolio Images**: Categorized image gallery with admin management
- **Contact Messages**: Contact form submissions with read/unread status
- **Sessions**: Secure session storage for authentication

### Content Management
- **Blog System**: Full CRUD operations, draft/publish workflow, featured images
- **Portfolio Management**: Image upload, categorization, and organization
- **Contact System**: Form handling with admin notification system
- **Admin Dashboard**: Comprehensive content management interface

### UI/UX Features
- **Dark Theme**: Peter McKinnon-inspired design with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Parallax scrolling, fade-in effects, and smooth transitions
- **Component Library**: Consistent design system with Shadcn/ui components

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions
- **wouter**: Lightweight client-side routing

### Authentication
- **openid-client**: OpenID Connect client for Replit Auth
- **passport**: Authentication middleware framework
- **express-session**: Session management with PostgreSQL storage

### UI Components
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library with consistent design

## Deployment Strategy

### Development Environment
- **Replit Integration**: Native Replit development with hot reload
- **Vite Dev Server**: Fast development builds with HMR
- **Database**: Automatic Neon PostgreSQL provisioning
- **Environment Variables**: Secure secret management via Replit

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild compiles TypeScript server to `dist/index.js`
- **Static Assets**: Served via Express static middleware
- **Database Migrations**: Drizzle Kit handles schema changes

### Architecture Decisions

#### Database Choice
- **Problem**: Need reliable, scalable PostgreSQL for production workloads
- **Solution**: Neon serverless PostgreSQL with connection pooling
- **Rationale**: Automatic scaling, built-in connection pooling, and seamless Replit integration
- **Alternatives**: Traditional PostgreSQL instances require more DevOps overhead

#### Authentication Strategy
- **Problem**: Secure user authentication with minimal setup complexity
- **Solution**: Replit Auth with abstracted service layer
- **Rationale**: Zero-config authentication for Replit deployment with clean migration path
- **Migration Path**: Service abstraction allows easy Firebase Auth integration later

#### State Management
- **Problem**: Complex server state synchronization and caching
- **Solution**: TanStack Query with RESTful API design
- **Rationale**: Automatic caching, background updates, and optimistic UI updates
- **Alternatives**: Context/Redux would require manual cache management

#### UI Framework
- **Problem**: Need consistent, accessible component library with dark theme support
- **Solution**: Shadcn/ui with Radix primitives and Tailwind CSS
- **Rationale**: Type-safe components, built-in accessibility, and easy theming
- **Customization**: CSS custom properties enable easy theme switching

#### Database ORM
- **Problem**: Type safety and developer experience for database operations
- **Solution**: Drizzle ORM with TypeScript schema definitions
- **Rationale**: Full type safety, excellent DX, and lightweight runtime
- **Benefits**: Prevents SQL injection, catches schema mismatches at compile time