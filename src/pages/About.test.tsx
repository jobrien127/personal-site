import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../test-utils';
import About from './About';

describe('About', () => {
  it('renders the about heading', () => {
    renderWithProviders(<About />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'About Me' })
    ).toBeInTheDocument();
  });

  it('renders about section with correct id', () => {
    renderWithProviders(<About />);
    expect(document.getElementById('about')).toBeInTheDocument();
  });

  it('displays background information', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/Modesto, California/i)).toBeInTheDocument();
    expect(screen.getByText(/George Lucas/i)).toBeInTheDocument();
  });

  it('displays education information', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/Colorado School of Mines/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer Science/i)).toBeInTheDocument();
  });

  it('displays experience information', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/VML Apps/i)).toBeInTheDocument();
    expect(screen.getByText(/iOS/i)).toBeInTheDocument();
  });

  it('displays outro with current location', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/Dillon, Colorado/i)).toBeInTheDocument();
  });

  it('ends with Cheers', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/Cheers!/)).toBeInTheDocument();
  });
});
