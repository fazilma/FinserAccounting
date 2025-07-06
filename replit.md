# Finser Associates FZE LLC - Accounting & Bookkeeping Website

## Overview

This is a static web application for Finser Associates FZE LLC, a professional accounting and bookkeeping services company based in the UAE. The application is built as a modern single-page application (SPA) with React frontend only, designed to showcase services and handle client inquiries through direct mailto integration. Optimized for Vercel deployment.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Form Handling**: React Hook Form with Zod validation

### Static Architecture
- **Contact Form**: Direct mailto integration (no backend required)
- **Assets**: Static images served from public directory
- **Deployment**: Vercel-optimized static build configuration
- **Development**: Vite development server

### Component Design System
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Theme**: "New York" style with neutral base colors
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Icons**: Lucide React icons

## Key Components

### Database Schema
- **Users Table**: Basic user authentication system with username/password
- **Schema Location**: `shared/schema.ts`
- **Validation**: Zod schemas for type safety and validation
- **Migrations**: Drizzle migrations in `./migrations` directory

### Storage Layer
- **Interface**: `IStorage` abstraction for database operations
- **Implementation**: Memory storage for development, extensible to PostgreSQL
- **Methods**: User CRUD operations (create, read by ID/username)

### API Architecture
- **Prefix**: All API routes prefixed with `/api`
- **Request Logging**: Comprehensive logging with timing and response capture
- **Error Handling**: Centralized error handling middleware
- **CORS**: Configured for development and production environments

### Frontend Features
- **Home Page**: Professional landing page with service showcase
- **Contact Form**: Interactive form with toast notifications
- **Responsive Design**: Mobile and desktop optimized layouts
- **Professional Branding**: UAE-focused accounting services theme

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express.js server handles requests with middleware pipeline
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: TanStack Query manages server state caching and updates

## External Dependencies

### Production Dependencies
- **Database**: Neon PostgreSQL serverless database
- **Authentication**: Session-based authentication with PostgreSQL storage
- **UI Components**: Radix UI primitives for accessibility
- **Form Validation**: Zod for runtime type checking
- **Date Handling**: date-fns for date manipulation

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Development Server**: tsx for TypeScript execution
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push`

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: `DATABASE_URL` environment variable required

### Server Setup
- **Static Files**: Express serves built frontend from `dist/public`
- **API Routes**: Backend routes mounted on `/api` prefix
- **Session Storage**: PostgreSQL-backed session management
- **Error Handling**: Production-ready error responses

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```