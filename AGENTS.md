# OpenCode Rules

This document outlines the coding standards, safety protocols, and tool usage guidelines for agentic operations in this project. It is intended for AI assistants and agents that will be interacting with this codebase.

## Code Changes

- **Prefer incremental changes** over large transformations
  - Focus on single-purpose commits where possible
  - Never change unrelated files unless explicitly instructed
- **Preserve formatting** when editing code you didn't modify
- **Minimize context changes** - keep edits contained
- **Always verify changes work** before marking complete

## Build & Test Commands

### Build

- Primary build: `yarn build` (outputs to `build/`)
- Watch mode: `yarn dev`
- For single test: `yarn test -- <path/to/test.spec.ts>` (Vitest)

### Linting

- Run all: `yarn format`
- Fix issues: `yarn format`

### Testing

- Run all tests: `yarn test`
- Run single test: `yarn test -- <path/to/test.spec.ts>`
- End-to-end tests: `yarn test:e2e`

## Code Style Guidelines

### Imports

- Prefer explicit relative imports over implicit ones
- Group imports by source: `node_modules` (top), project (middle), other (bottom)
- Sort imports alphabetically within each group

### Formatting

- Use Prettier for code formatting
- Indent: 2 spaces (not 4)
- Maximum line length: 80 characters
- Avoid trailing whitespace

### Types

- Always use explicit types instead of `any`
- Use `void` instead of `undefined` for no return functions
- Prefer union types (`|`) over optional properties (`?`)

### Naming Conventions

- CamelCase for variables and functions
- PascalCase for classes and components
- kebab-case for CSS class names
- UPPER_CASE_with_underscores for constants
- Avoid Hungarian notation or prefixing variable names

### Error Handling

- Use explicit error classes instead of generic strings
- Prefer `if (!resource) throw new Error('Resource not found')`

### Security

- Never expose secrets in git
- Use `.gitignore` entries: `.env`, `secrets/`, and `*.pem`
- Sanitize all user-input data

## Version Control

### Commit Conventions

- Use conventional commits format
- Structure: `<type>[optional scope]: <description>`
- Example: `feat(api): add rate limiting middleware`

### Branching Strategy

- Feature branches only for non-trivial changes
- Naming: `feature/my-feature` or `bugfix/issue-123`
- Rebase before merging to main

## Agent Interaction

### File Access

- Read from and write to the project directory
- Avoid absolute paths outside the project root

### Task Handling

- Never assume context from previous messages
- Always verify file existence before editing
- Provide complete tool arguments - never pass `undefined` or `null`

## Lint Rules

### ESLint

- Use `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`
- Enabled rules: `react/recommended`, `react-hooks/recommended`, `prettier/prettier`

### Prettier

- Enabled rules: single-quotes, bracket-spacing, trailing commas, arrow parens, etc.

### Cursor/Github Copilot Instructions

- These are not found in this repository. Recommend to add them if not available.

## Examples

```bash
# Run format on a single file
$ yarn format -- <path/to/file.ts>

# Run test for a specific component
$ yarn test -- src/components/Button/Button.test.tsx
```
