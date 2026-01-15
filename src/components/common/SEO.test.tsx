import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './SEO';

const renderWithHelmet = (ui: React.ReactElement) => {
  return render(<HelmetProvider>{ui}</HelmetProvider>);
};

describe('SEO', () => {
  it('renders title correctly', async () => {
    renderWithHelmet(
      <SEO title="Test Page" description="Test description" />
    );

    await waitFor(() => {
      expect(document.title).toContain('Test Page');
      expect(document.title).toContain("Joseph O'Brien");
    });
  });

  it('renders meta description', async () => {
    renderWithHelmet(
      <SEO title="Test" description="This is a test description" />
    );

    await waitFor(() => {
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription).toHaveAttribute('content', 'This is a test description');
    });
  });

  it('renders OpenGraph tags', async () => {
    renderWithHelmet(
      <SEO title="OG Test" description="OG description" />
    );

    await waitFor(() => {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      expect(ogTitle).toHaveAttribute('content', expect.stringContaining('OG Test'));
    });
  });

  it('renders Twitter card tags', async () => {
    renderWithHelmet(
      <SEO title="Twitter Test" description="Twitter description" />
    );

    await waitFor(() => {
      const twitterCard = document.querySelector('meta[name="twitter:card"]');
      expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
    });
  });

  it('includes security headers', async () => {
    renderWithHelmet(
      <SEO title="Security Test" description="Security description" />
    );

    await waitFor(() => {
      const xFrameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]');
      expect(xFrameOptions).toHaveAttribute('content', 'DENY');
    });
  });

  it('renders JSON-LD structured data', async () => {
    renderWithHelmet(
      <SEO title="Schema Test" description="Schema description" />
    );

    await waitFor(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      expect(scripts.length).toBeGreaterThanOrEqual(2);
    });
  });
});
