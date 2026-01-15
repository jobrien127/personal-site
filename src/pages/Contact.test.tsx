import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../test-utils';
import Contact from './Contact';

describe('Contact', () => {
  it('renders the contact heading', () => {
    renderWithProviders(<Contact />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Contact Information' })
    ).toBeInTheDocument();
  });

  it('renders contact section with correct id', () => {
    renderWithProviders(<Contact />);
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('renders email contact card with link', () => {
    renderWithProviders(<Contact />);
    const emailLink = screen.getByRole('link', { name: /dev@jm-ob\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:dev@jm-ob.com');
  });

  it('displays phone number', () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText(/\+1 \(209\) 534-5372/)).toBeInTheDocument();
  });

  it('renders LinkedIn link with correct attributes', () => {
    renderWithProviders(<Contact />);
    const linkedInLink = screen.getByRole('link', { name: /Mac.*O'Brien/i });
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/j-m-obrien'
    );
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders GitHub link with correct attributes', () => {
    renderWithProviders(<Contact />);
    const githubLink = screen.getByRole('link', { name: /jobrien127/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jobrien127');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders all four contact cards', () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
