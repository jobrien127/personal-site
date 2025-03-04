import React from 'react';
import styled from 'styled-components';
import TabBar from './TabBar';
import Footer from './Footer';
import { LayoutProps } from '../../types';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('/assets/portfolio_bg/bg5.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
