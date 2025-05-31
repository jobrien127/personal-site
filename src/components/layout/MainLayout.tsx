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
  background: linear-gradient(
    135deg,
    #5a7d9a 0%,
    #1e2e3c 20%,
    #2c7373 40%,
    #162229 60%,
    #2f4454 80%,
    #1b1f23 100%
  );
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
    background: radial-gradient(
      circle at 70% 20%,
      rgba(67, 191, 191, 0.1) 0%,
      rgba(0, 0, 0, 0.3) 70%
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
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    setIsBackgroundLoaded(true);
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
