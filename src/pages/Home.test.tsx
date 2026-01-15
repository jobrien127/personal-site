import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </HelmetProvider>
  );
};

describe('Home', () => {
  it('renders the home page', () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('displays welcome message', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it('renders home section', () => {
    renderWithProviders(<Home />);
    expect(document.getElementById('home')).toBeInTheDocument();
  });
});
