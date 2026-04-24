import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../test-utils';
import Resume from './Resume';

describe('Resume', () => {
  it('renders the resume heading', () => {
    renderWithProviders(<Resume />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Resume' })
    ).toBeInTheDocument();
  });

  it('renders PDF iframe with correct src', () => {
    renderWithProviders(<Resume />);
    const iframe = document.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', '/assets/mac_obrien.pdf');
  });

  it('renders iframe with accessible title', () => {
    renderWithProviders(<Resume />);
    const iframe = screen.getByTitle("Mac OBrien's Resume");
    expect(iframe).toBeInTheDocument();
  });

  it('renders download link with correct attributes', () => {
    renderWithProviders(<Resume />);
    const downloadLink = screen.getByRole('link', { name: /Download Resume/i });
    expect(downloadLink).toHaveAttribute('href', '/assets/mac_obrien.pdf');
    expect(downloadLink).toHaveAttribute('download', 'mac_obrien.pdf');
  });

  it('renders resume section with correct id', () => {
    renderWithProviders(<Resume />);
    expect(document.getElementById('resume')).toBeInTheDocument();
  });
});
