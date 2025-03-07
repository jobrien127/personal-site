import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from './components/ui/LoadingSpinner';
import MainLayout from './components/layout/MainLayout';
import GlobalStyles from './styles/GlobalStyles';

// Lazy loaded pages with preload functions
const Home = React.lazy(() => import('./pages/Home'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Photos = React.lazy(() => import('./pages/Photos'));

// Preload functions
const preloadHome = () => import('./pages/Home');
const preloadResume = () => import('./pages/Resume');
const preloadPortfolio = () => import('./pages/Portfolio');
const preloadContact = () => import('./pages/Contact');
const preloadPhotos = () => import('./pages/Photos');

const PreloadManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload based on current route
    switch (location.pathname) {
      case '/':
        preloadPortfolio();
        preloadResume();
        break;
      case '/portfolio':
        preloadHome(); // Add usage here
        preloadContact();
        preloadPhotos();
        break;
      case '/resume':
        preloadHome(); // Add usage here
        preloadContact();
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router>
        <MainLayout>
          <PreloadManager />
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/photos" element={<Photos />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
