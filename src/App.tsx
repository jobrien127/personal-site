import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/common/SEO';
import styled from 'styled-components';

const MaintenanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e0e0e0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  padding: 24px;
  text-align: center;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 48px 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
`;

const Message = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
`;

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <SEO
        title="Under Construction"
        description="This site is currently under construction. Check back soon."
        keywords={[]}
      />
      <MaintenanceWrapper>
        <Card>
          <Title>Under Construction</Title>
          <Message>
            This site is currently being rebuilt. Check back soon.
          </Message>
        </Card>
      </MaintenanceWrapper>
    </HelmetProvider>
  );
};

export default App;
