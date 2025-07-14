# Personal Portfolio Website - AI Coding Instructions

## Project Overview

React TypeScript portfolio website with comprehensive SEO optimization, styled-components theming, and Framer Motion animations. Built with Create React App and designed for static hosting.

## Architecture Patterns

### Page Structure

- **Layout**: All pages use `MainLayout` wrapper with fixed `TabBar`, animated content area, and `Footer`
- **SEO Integration**: Every page MUST include `<SEO>` component with specific title, description, and keywords
- **Navigation**: Uses `useScrollToTop()` hook on all pages for smooth scroll-to-top behavior
- **Lazy Loading**: All pages are lazy-loaded via `React.lazy()` with `Suspense` fallback

### Styling System

- **Global Styles**: Comprehensive CSS-in-JS system in `src/styles/GlobalStyles.ts` defines all component styles via CSS classes
- **Theme Colors**: Dark theme with teal/cyan accents (`#14b8a6`, `#06b6d4`), slate backgrounds (`#0f172a`, `#1e293b`, `#334155`)
- **Gradients**: Extensive use of linear gradients for visual depth (buttons, cards, backgrounds)
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Layout Variables**: Uses CSS custom properties (`--tab-bar-height`, `--content-spacing`)

### Component Conventions

```tsx
// Standard page structure
const PageName: React.FC = () => {
  useScrollToTop(); // Always first hook call

  return (
    <>
      <SEO
        title="Page Title"
        description="Specific page description"
        keywords={['relevant', 'keywords']}
      />
      <section id="page-name">
        <h2>Page Title</h2>
        {/* Page content */}
      </section>
    </>
  );
};
```

## Development Workflows

### Key Commands

- `yarn start` - Development server (port 3000)
- `yarn build` - Production build with asset optimization
- `yarn format` - Prettier formatting (required before commits)
- `yarn test` - Jest test runner

### File Organization

- `src/pages/` - Route components with SEO and scroll behavior
- `src/components/layout/` - Layout components (MainLayout, TabBar, Footer)
- `src/components/common/` - Reusable components (SEO)
- `src/components/ui/` - UI components (LoadingSpinner)
- `src/styles/` - Global styling system
- `src/types/` - TypeScript interfaces
- `src/utils/` - Custom hooks and utilities

### Asset Management

- **Static Assets**: All in `public/assets/` with organized subdirectories
- **Images**: Use relative paths `/assets/photos/filename.png` for consistency
- **PDFs**: Direct iframe embedding with download links (`src/pages/Resume.tsx`)

## Critical Integration Points

### SEO Component Usage

The `SEO` component provides comprehensive meta tags, structured data, and performance optimizations:

- **Required Props**: `title`, `description`
- **Optional**: `keywords[]`, `ogImage`, `isArticle`, `publishedDate`
- **Auto-generates**: Person schema, website schema, OpenGraph tags, Twitter cards
- **Performance**: Includes resource hints for fonts and external CDNs

### Styled Components Integration

- **Global CSS**: CRITICAL - Never use styled-components for layout/page styles - use GlobalStyles.ts classes exclusively
- **Component Styling**: Only use styled-components for component-specific styling with props (see `MainLayout.tsx`)
- **Background System**: `MainLayout` handles complex gradient backgrounds with overlay effects
- **Theme Access**: Access global CSS variables via `var(--variable-name)`

### Router and Animation

```tsx
// App.tsx pattern for adding new routes
<AnimatePresence mode="wait">
  <Routes>
    <Route path="/new-page" element={<NewPage />} />
  </Routes>
</AnimatePresence>
```

**Note**: Several pages are currently commented out in `App.tsx` (About, Photos, Contact) but their components still exist - uncomment routes to re-enable.

## Current Page Status

- **Active Pages**: Home (`/`), Resume (`/resume`), Portfolio (`/portfolio`), NotFound (`/*`)
- **Disabled Pages**: About, Photos, Contact (commented in router but components exist)
- **Page Loading**: All pages use `React.lazy()` with `LoadingSpinner` fallback

## Project-Specific Conventions

### TypeScript Patterns

- **Strict Mode**: All files must pass strict TypeScript checks
- **Interface Exports**: Define interfaces in `src/types/index.ts` for reusability
- **React.FC**: Use for all functional components with explicit typing

### Component Patterns

- **Data Arrays**: Define as const arrays outside component (see `Portfolio.tsx` projects array)
- **Conditional Rendering**: Use `&&` for optional elements, ternary for either/or
- **External Links**: Always include `target="_blank" rel="noopener noreferrer"`

### Performance Considerations

- **Lazy Loading**: All pages must be lazy-loaded for optimal bundle splitting
- **Image Optimization**: Images should include proper alt tags and loading strategies
- **PDF Handling**: Use iframe for embedded PDFs, avoid complex PDF.js configurations

## Dependencies and Versions

- **React 18**: Uses concurrent features and React.lazy
- **Styled Components 6**: Latest API patterns
- **Framer Motion 11**: Animation system for page transitions
- **React Router 6**: Modern routing with data APIs
- **React Helmet Async**: SEO meta tag management

## Common Debugging Patterns

- **Build Errors**: Check ESLint configuration in `.eslintrc.json`
- **Styling Issues**: Verify GlobalStyles.ts class names match component usage
- **SEO Problems**: Validate structured data with Google's Rich Results Test
- **Performance**: Use React DevTools Profiler for component render analysis
