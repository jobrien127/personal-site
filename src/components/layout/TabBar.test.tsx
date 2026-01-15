import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import TabBar from './TabBar';

describe('TabBar', () => {
  it('renders the header with name and title', () => {
    renderWithProviders(<TabBar />);
    expect(
      screen.getByText(/Joseph.*OBrien.*Software Engineer/i)
    ).toBeInTheDocument();
  });

  it('renders navigation buttons for active routes', () => {
    renderWithProviders(<TabBar />);
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Resume' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Portfolio' })
    ).toBeInTheDocument();
  });

  it('highlights the active route', () => {
    renderWithProviders(<TabBar />);
    const homeButton = screen.getByRole('button', { name: 'Home' });
    expect(homeButton).toHaveClass('active');
  });

  it('does not highlight inactive routes', () => {
    renderWithProviders(<TabBar />);
    const resumeButton = screen.getByRole('button', { name: 'Resume' });
    expect(resumeButton).not.toHaveClass('active');
  });
});
