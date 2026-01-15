import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('renders tab navigation', async () => {
    render(<App />);
    expect(await screen.findByText('Home')).toBeInTheDocument();
    expect(await screen.findByText('Resume')).toBeInTheDocument();
    expect(await screen.findByText('Portfolio')).toBeInTheDocument();
  });
});
