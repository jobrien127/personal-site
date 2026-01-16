import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import MainLayout from './MainLayout';

describe('MainLayout', () => {
  it('renders children content', () => {
    renderWithProviders(
      <MainLayout>
        <div data-testid="child-content">Test Content</div>
      </MainLayout>
    );
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders TabBar component', () => {
    renderWithProviders(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    renderWithProviders(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders main content area', () => {
    renderWithProviders(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
