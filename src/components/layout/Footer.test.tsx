import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders contact email link', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /dev@jm-ob\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:dev@jm-ob.com');
  });

  it('renders LinkedIn link with correct attributes', () => {
    render(<Footer />);
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/j-m-obrien'
    );
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders GitHub link with correct attributes', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jobrien127');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('displays current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('has aria-labels on social links for accessibility', () => {
    render(<Footer />);
    expect(
      screen.getByRole('link', { name: 'LinkedIn Profile' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'GitHub Profile' })
    ).toBeInTheDocument();
  });
});
