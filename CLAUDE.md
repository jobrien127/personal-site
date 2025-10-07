# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React, TypeScript, and styled-components. The site is a single-page application with React Router for navigation, featuring lazy-loaded pages and page-specific SEO optimization.

**Package Manager**: Yarn (`yarn@1.22.22`)

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server (localhost:3000)
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Format code with Prettier
yarn format
```

## Architecture

### Routing & Code Splitting
- `App.tsx` defines all routes using React Router with lazy loading
- Each page component is loaded on-demand via `React.lazy()`
- Pages wrapped in `<Suspense>` with `LoadingSpinner` fallback
- Some routes are currently commented out (About, Photos, Contact, Blog)

### Layout System
- `MainLayout` component provides consistent structure across all pages
- Fixed `TabBar` navigation at top
- Gradient background with fixed attachment
- `Footer` component at bottom
- Content area has responsive margin to account for TabBar height

### Styling Approach
- **Global styles**: All CSS lives in `src/styles/GlobalStyles.ts` using styled-components' `createGlobalStyle`
- **Component-level styles**: Individual styled components defined in layout components (e.g., `MainLayout.tsx`, `TabBar.tsx`)
- **Class-based targeting**: Most page content styled via global CSS classes (`.project`, `.contact-card`, `.home-image`, etc.)
- **Design system**: Consistent color palette with teal/cyan gradients (`#14b8a6`, `#06b6d4`) and blue accents (`#1e40af`, `#3b82f6`)
- **Animations**: Framer Motion for route transitions, CSS transitions for hover effects
- **Responsive**: Mobile-first with breakpoints at 480px, 768px, and 1024px

### SEO Strategy
- `SEO.tsx` component used on every page with React Helmet
- Structured data (JSON-LD) for Person, WebSite, and Article schemas
- Open Graph and Twitter Card meta tags
- Page-specific keywords and descriptions
- Performance optimization with resource hints (preconnect, dns-prefetch)

### Type System
- TypeScript strict mode enabled
- Shared types in `src/types/index.ts` (currently `LayoutProps`, `MetaProps`)
- Custom type roots include `./src/types` for global type definitions
- `jest-dom.d.ts` augments `@testing-library/jest-dom` types

### Utilities
- `src/utils/hooks.ts` contains custom React hooks (e.g., `useScrollToTop`)
- Pages use `useScrollToTop()` to reset scroll position on mount

## Code Style

- **Prettier**: Enforced via ESLint integration
  - Single quotes
  - Semicolons
  - 2-space indentation
  - 80 character line width
  - Trailing commas (ES5)
- **ESLint**: React + TypeScript rules with Prettier integration
- Component file structure: imports → interfaces → component → export

## Asset Organization

- `public/assets/photos/` - Personal and portfolio images
- `public/assets/bg_photos/` - Background images (currently unused, gradient used instead)
- `public/assets/Joseph_OBrien_CV.pdf` - Resume PDF for viewer/download
- `public/assets/favicon.ico` - Site favicon

## Testing

- Jest + React Testing Library configured
- `src/setupTests.ts` imports `@testing-library/jest-dom` for custom matchers
- Run tests with `yarn test`
