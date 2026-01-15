import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../test-utils';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders the 404 heading', () => {
    renderWithProviders(<NotFound />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Page Not Found' })
    ).toBeInTheDocument();
  });

  it('renders explanatory message', () => {
    renderWithProviders(<NotFound />);
    expect(
      screen.getByText(/does not exist or has been moved/i)
    ).toBeInTheDocument();
  });

  it('renders link to home page', () => {
    renderWithProviders(<NotFound />);
    const homeLink = screen.getByRole('link', { name: /Return to Home/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders not-found section with correct id', () => {
    renderWithProviders(<NotFound />);
    expect(document.getElementById('not-found')).toBeInTheDocument();
  });
});
