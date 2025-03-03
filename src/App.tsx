// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import TabBar from './components/TabBar/TabBar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import GlobalStyles from './styles/GlobalStyles';

// Lazy loaded components
const Home = React.lazy(() => import('./components/Home/Home'));
const Resume = React.lazy(() => import('./components/Resume/Resume'));
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('/assets/portfolio_bg/bg5.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: 20px;
  margin-top: 3vw;

  @media (max-width: 768px) {
    margin-top: 20vw;
  }
`;

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <AppWrapper>
        <Router>
          <TabBar />
          <ContentWrapper>
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
          </ContentWrapper>
          <Footer />
        </Router>
      </AppWrapper>
    </HelmetProvider>
  );
};

export default App;
