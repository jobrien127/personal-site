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

  it('renders all projects', () => {
    renderWithProviders(<Portfolio />);
    const projectTitles = screen.getAllByRole('heading', { level: 3 });
    expect(projectTitles.length).toBe(9);
  });

  it('renders GitHub links for all projects', () => {
    renderWithProviders(<Portfolio />);
    const githubLinks = screen.getAllByText('Link to GitHub Repository');
    expect(githubLinks.length).toBe(9);
    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders live site link for lemmonlodge project', () => {
    renderWithProviders(<Portfolio />);
    const siteLink = screen.getByText('Link to Live Site');
    expect(siteLink).toHaveAttribute('href', 'https://www.lemmonlodge.com');
    expect(siteLink).toHaveAttribute('target', '_blank');
  });

  it('renders portfolio section with correct id', () => {
    renderWithProviders(<Portfolio />);
    expect(document.getElementById('portfolio')).toBeInTheDocument();
  });

  it('displays project descriptions', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByText(/Pantry iOS App/i)).toBeInTheDocument();
    expect(screen.getByText(/HoodViz/i)).toBeInTheDocument();
    expect(screen.getByText(/Markov Chain/i)).toBeInTheDocument();
  });
});
