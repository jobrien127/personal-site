import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f8f8f8;
  border-top: 5px solid #4361ee;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner: React.FC = React.memo(() => {
  return (
    <SpinnerWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Spinner />
    </SpinnerWrapper>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
