import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TabBar from './TabBar';
import Footer from './Footer';
import { LayoutProps } from '../../types';

interface WrapperProps {
  isLoaded: boolean;
}

const LayoutWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('/assets/bg_photos/bg5.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
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
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/assets/bg_photos/bg5.png';
    img.onload = () => setIsBackgroundLoaded(true);
  }, []);

  return (
    <LayoutWrapper isLoaded={isBackgroundLoaded}>
      <TabBar />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default MainLayout;
