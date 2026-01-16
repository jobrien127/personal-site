# Personal Portfolio Site

A modern portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript (strict mode)
- **Styling**: styled-components
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **SEO**: react-helmet-async
- **Testing**: Vitest + React Testing Library + Playwright E2E
- **Deployment**: AWS Amplify (auto-deploys on push to main)

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Run tests
yarn test

# Build for production
yarn build

# Format code
yarn format
```

## Project Structure

```
src/
├── components/
│   ├── common/      # Shared components (SEO)
│   ├── layout/      # Layout components (MainLayout, TabBar, Footer)
│   └── ui/          # UI components (LoadingSpinner)
├── pages/           # Route pages
├── styles/          # Global styles (styled-components)
├── types/           # TypeScript interfaces
└── utils/           # Custom hooks
```

## Features

- Lazy-loaded routes for performance
- SEO optimization with OpenGraph and Twitter cards
- Smooth page transitions
- Responsive design
- Accessible navigation

## Development

The dev server runs on `http://localhost:3000`.

Tests run in watch mode by default. Use `yarn test --run` for a single run.

E2E tests use Playwright: `yarn test:e2e`

## Deployment

The site is deployed via **AWS Amplify**, connected to the `main` branch.

- **Live site**: https://jm-ob.com
- **Auto-deploy**: Pushes to `main` trigger automatic builds
- **Build output**: `/build` directory

Security headers are configured in `customHttp.yml` (HSTS, CSP, X-Frame-Options).
