# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
yarn start          # Start dev server (localhost:3000)
yarn build          # Production build to /build directory (runs tsc first)
yarn preview        # Preview production build locally

# Testing
yarn test           # Run Vitest in watch mode
yarn test --run     # Run tests once (CI mode)
yarn test --coverage # Run with coverage report

# Code quality
yarn format         # Format all files with Prettier
```

## Architecture

React 18 portfolio site built with **Vite** and TypeScript.

- **Build**: Vite 7.x with Vitest for testing
- **Routing**: React Router v6 with lazy-loaded pages via `React.lazy()` and `Suspense`
- **Styling**: styled-components with centralized `GlobalStyles.ts` (no separate CSS files)
- **SEO**: `react-helmet-async` via `SEO` component with OpenGraph, Twitter cards, JSON-LD
- **Animations**: Framer Motion with `AnimatePresence` for page transitions

### Key Directories

- `src/pages/` - Route components (Home, Portfolio, Resume, NotFound)
- `src/components/layout/` - MainLayout, TabBar, Footer (wraps all pages)
- `src/components/common/` - Shared components (SEO)
- `src/styles/GlobalStyles.ts` - All CSS in one styled-components file
- `src/utils/hooks.ts` - Custom hooks (useScrollToTop)
- `public/assets/` - Static files (PDF resume, images)

### Patterns

- All pages use `useScrollToTop()` hook and wrap content with `<SEO>` component
- Layout hierarchy: `HelmetProvider` > `GlobalStyles` > `Router` > `MainLayout` > `Suspense` > `AnimatePresence` > `Routes`
- Some pages exist but routes are commented out in `App.tsx` (About, Photos, Contact, Blog)

### Testing

Tests use Vitest with jsdom environment. Test files are colocated with components (`.test.tsx`).

```tsx
// Wrap components that use react-helmet-async or react-router
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </HelmetProvider>
  );
};
```

## Code Style

- Prettier: single quotes, semicolons, trailing commas (es5), 80 char width
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
