# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
yarn start          # Start development server (localhost:3000)
yarn build          # Production build to /build directory
yarn test           # Run tests in watch mode
yarn test --coverage # Run tests with coverage report

# Code quality
yarn format         # Format code with Prettier
```

## Architecture

This is a React 18 personal portfolio site using Create React App with TypeScript. It features:

- **Routing**: React Router v6 with lazy-loaded pages via `React.lazy()` and `Suspense`
- **Styling**: styled-components with a centralized `GlobalStyles.ts` for all CSS (no separate CSS files)
- **SEO**: `react-helmet-async` via reusable `SEO` component with OpenGraph, Twitter cards, and JSON-LD structured data
- **Animations**: Framer Motion with `AnimatePresence` for page transitions

### Key Directories

- `src/pages/` - Route components (Home, Portfolio, Resume, NotFound)
- `src/components/layout/` - MainLayout, TabBar, Footer (wraps all pages)
- `src/components/common/` - Shared components like SEO
- `src/styles/GlobalStyles.ts` - All CSS in one styled-components file
- `src/types/` - Shared TypeScript interfaces
- `public/assets/` - Static files (PDF resume, images)

### Patterns

- Pages use the `useScrollToTop` hook from `src/utils/hooks.ts` for smooth scroll restoration
- All pages wrap content with the `SEO` component for meta tags
- Layout follows: `HelmetProvider` > `Router` > `MainLayout` > `AnimatePresence` > `Routes`
- Some pages are commented out in `App.tsx` (About, Photos, Contact) but implementations exist

## Code Style

- Prettier config: single quotes, semicolons, trailing commas (es5), 80 char width
- ESLint extends react-app with Prettier integration
- TypeScript strict mode enabled
