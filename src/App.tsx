// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from './components/common/LoadingSpinner';
import MainLayout from './layouts/MainLayout';
import GlobalStyles from './styles/GlobalStyles';

// Lazy loaded components
const Home = React.lazy(() => import('./components/Home/Home'));
const Resume = React.lazy(() => import('./components/Resume/Resume'));
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router>
        <MainLayout>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
