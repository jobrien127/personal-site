import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Photos from './Photos';

describe('Photos', () => {
  it('renders the photos heading', () => {
    render(<Photos />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Photos' })
    ).toBeInTheDocument();
  });

  it('renders photos section with correct id', () => {
    render(<Photos />);
    expect(document.getElementById('photos')).toBeInTheDocument();
  });

  it('renders all photo images', () => {
    render(<Photos />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(20);
  });

  it('images have lazy loading attribute', () => {
    render(<Photos />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('images have width and height attributes for layout stability', () => {
    render(<Photos />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('width', '400');
      expect(img).toHaveAttribute('height', '300');
    });
  });

  it('images have alt text for accessibility', () => {
    render(<Photos />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('renders specific photo alt texts', () => {
    render(<Photos />);
    expect(screen.getByAltText(/Pebble Beach/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Maroon Bells/i).length).toBeGreaterThan(0);
    expect(screen.getByAltText(/Temple Bar in Dublin/i)).toBeInTheDocument();
  });
});
