// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from './components/ui/LoadingSpinner';
import MainLayout from './components/layout/MainLayout';
import GlobalStyles from './styles/GlobalStyles';

// Lazy loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Photos = React.lazy(() => import('./pages/Photos'));

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
                <Route path="/about" element={<About />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
