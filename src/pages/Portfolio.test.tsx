import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../test-utils';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
  it('renders the portfolio heading', () => {
    renderWithProviders(<Portfolio />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Portfolio' })
    ).toBeInTheDocument();
  });

  it('renders portfolio section with correct id', () => {
    renderWithProviders(<Portfolio />);
    expect(document.getElementById('portfolio')).toBeInTheDocument();
  });

});
