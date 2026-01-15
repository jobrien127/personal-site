import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { useScrollToTop } from './hooks';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('useScrollToTop', () => {
  beforeEach(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('calls window.scrollTo on mount', () => {
    renderHook(() => useScrollToTop(), { wrapper });
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('scrolls to top-left position with smooth behavior', () => {
    renderHook(() => useScrollToTop(), { wrapper });
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  it('uses requestAnimationFrame for scroll timing', () => {
    renderHook(() => useScrollToTop(), { wrapper });
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });
});
