import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: 'smooth' as const,
    };

    requestAnimationFrame(() => {
      window.scrollTo(scrollOptions);
    });
  }, [pathname]);
};
