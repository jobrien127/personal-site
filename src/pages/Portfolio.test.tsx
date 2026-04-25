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

  it('renders a project title and description', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByText('dotfiles')).toBeInTheDocument();
    expect(screen.getByText('My personal dotfile config')).toBeInTheDocument();
  });

  it('renders GitHub links with correct href, target, and rel attributes', () => {
    renderWithProviders(<Portfolio />);
    const links = screen.getAllByRole('link', {
      name: 'Link to GitHub Repository',
    });
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        expect.stringContaining('https://github.com/')
      );
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
