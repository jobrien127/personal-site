# GitHub Copilot Instructions

Personal portfolio website built with React 18, TypeScript, and styled-components. Single-page application with React Router, lazy-loaded pages, and comprehensive SEO optimization.

## Package Manager

**Always use Yarn (`yarn@1.22.22`)** - never npm. Package manager is pinned in `package.json`.

```bash
yarn install        # Install dependencies
yarn start          # Dev server (localhost:3000)
yarn build          # Production build
yarn test           # Run Jest tests
yarn format         # Format with Prettier
```

## Architecture Overview

### Styling Strategy: Global CSS-in-JS

**Critical pattern:** All CSS lives in `src/styles/GlobalStyles.ts` as a single styled-components `createGlobalStyle`. This is NOT component-scoped CSS.

- **Global styles:** Extensive class-based CSS (`.project`, `.contact-card`, `.home-image`, `.tab-link`, etc.) defined once in `GlobalStyles.ts`
- **Component styles:** Only layout components (`MainLayout`, `TabBar`, `Footer`) use local styled-components for structural elements
- **Page content:** Pages use global CSS classes exclusively - no inline styles or page-level styled-components
- **When adding features:** Add new CSS classes to `GlobalStyles.ts`, never create component-scoped styles in pages

### Design System

Consistent gradient palette used throughout:

- **Teal/Cyan:** `#14b8a6`, `#06b6d4` (primary actions, accents)
- **Blue:** `#1e40af`, `#3b82f6` (headings, active states)
- **Slate:** `#1e293b`, `#334155` (content cards, backgrounds)

All interactive elements use:

- Gradient backgrounds with `linear-gradient(135deg, ...)`
- `cubic-bezier(0.4, 0, 0.2, 1)` transitions
- Hover effects: `translateY(-2px)` + enhanced `box-shadow`
- Border: `1px solid rgba(255, 255, 255, 0.1)`

### Route & Code Splitting Pattern

All pages are lazy-loaded via `React.lazy()` and wrapped in `<Suspense>` with `LoadingSpinner`:

```tsx
const PageName = React.lazy(() => import('./pages/PageName'));
// In Router:
<Route path="/path" element={<PageName />} />;
```

Currently active routes: Home (`/`), Resume (`/resume`), Portfolio (`/portfolio`), NotFound (`*`)
Commented routes exist but are disabled: About, Photos, Contact, Blog

### Layout System

- `MainLayout` wraps all pages with fixed `TabBar` navigation, gradient background, and `Footer`
- Content margin compensates for fixed TabBar height (CSS variable `--tab-bar-height`)
- All pages are centered containers (`max-width: 1200px`) using IDs like `#home`, `#portfolio`, `#resume`
- Background is fixed gradient with radial overlay for depth

### SEO Implementation

Every page uses `<SEO>` component with React Helmet for:

- Page-specific meta tags (title, description, keywords)
- Open Graph & Twitter Card metadata
- Structured data (JSON-LD): Person, WebSite, Article schemas
- Performance hints (preconnect, dns-prefetch)
- Mobile optimization and security headers

**Pattern:** Import and place `<SEO>` as first element in page component before main content.

### Type Organization

- Shared types: `src/types/index.ts` (currently `LayoutProps`, `MetaProps`)
- TypeScript strict mode enabled in `tsconfig.json`
- Custom type roots include `./src/types` for global declarations
- Component props interfaces defined inline above component

### Custom Hooks

`src/utils/hooks.ts` contains utility hooks like `useScrollToTop()`:

- Every page component calls `useScrollToTop()` in body to reset scroll on navigation
- Uses `requestAnimationFrame` for smooth scrolling to top on route change

## Code Style Enforcement

Prettier + ESLint enforced via:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

- Run `yarn format` before commits
- ESLint uses `react-app` + Prettier integration
- Component structure: imports → interfaces → component → export

## Responsive Breakpoints

Mobile-first design with three breakpoints in `GlobalStyles.ts`:

- `@media (max-width: 480px)` - Mobile phones
- `@media (max-width: 768px)` - Tablets
- `@media (min-width: 1024px)` - Large desktops

TabBar collapses, font sizes reduce, margins adjust at each breakpoint.

## Asset Conventions

- Images: `public/assets/photos/` for content, `public/assets/bg_photos/` (unused)
- Resume PDF: `public/assets/Joseph_OBrien_CV.pdf` for viewer/download
- Favicon: `public/assets/favicon.ico`

## Framer Motion Integration

`AnimatePresence` wraps routes with `mode="wait"` for page transitions. Add motion props to page wrappers for custom animations (not currently implemented per page).

## Adding New Pages Checklist

1. Create page component in `src/pages/` with `useScrollToTop()` hook
2. Add lazy import in `App.tsx`: `const NewPage = React.lazy(() => import('./pages/NewPage'));`
3. Add route inside `<Routes>`: `<Route path="/newpage" element={<NewPage />} />`
4. Add navigation button in `src/components/layout/TabBar.tsx` with active state
5. Style page content using global CSS classes in `GlobalStyles.ts`
6. Include `<SEO>` component at top of page with appropriate metadata

## Testing Setup

- Jest + React Testing Library configured
- `src/setupTests.ts` imports `@testing-library/jest-dom`
- Run with `yarn test` (currently minimal test coverage)

## Known Patterns

- **Fixed header spacing:** All `<section>` elements use `margin-top: calc(var(--tab-bar-height) + var(--content-spacing))` to avoid overlap with TabBar
- **Navigation:** React Router's `useNavigate()` and `useLocation()` for programmatic navigation and active states
- **HelmetProvider:** Wraps entire app in `App.tsx` for React Helmet Async
- **Font:** Inter font family with system font fallbacks
