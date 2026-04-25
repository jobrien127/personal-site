import React from 'react';
import styled, { keyframes } from 'styled-components';
import TabBar from './TabBar';
import Footer from './Footer';
import { LayoutProps } from '../../types';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #07090f;
  animation: ${fadeIn} 0.3s ease-in;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(
        circle at 72% 8%,
        rgba(45, 212, 191, 0.07) 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 18% 20%,
        rgba(167, 139, 250, 0.08) 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 50% 88%,
        rgba(74, 222, 128, 0.04) 0%,
        transparent 40%
      );
    z-index: 0;
    pointer-events: none;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  margin-top: 3vw;

  @media (max-width: 768px) {
    margin-top: 20vw;
  }
`;

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <TabBar />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default MainLayout;
