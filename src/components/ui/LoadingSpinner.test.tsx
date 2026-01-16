import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    render(<LoadingSpinner />);
    expect(document.body).toBeTruthy();
  });

  it('has correct displayName', () => {
    expect(LoadingSpinner.displayName).toBe('LoadingSpinner');
  });

  it('renders spinner container', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
