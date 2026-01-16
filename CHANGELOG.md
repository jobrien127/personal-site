# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-15

### Added
- Migrated from Create React App to Vite
- Added Vitest testing infrastructure
- Comprehensive test coverage for all components and pages
- GitHub Actions CI workflow for automated testing
- Security headers via SEO component
- JSON-LD structured data for SEO

### Changed
- Updated build tooling for faster development
- Improved TypeScript strict mode compliance

### Fixed
- Fixed styled-components transient prop warning (`isLoaded` → `$isLoaded`)
