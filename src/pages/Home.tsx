import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Home: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Home"
        description="Software engineer specializing in React, TypeScript, and iOS development."
        keywords={[
          'software engineer',
          'app developer',
          'full stack developer',
          'mobile developer',
          'React',
          'TypeScript',
          'JavaScript',
          'portfolio',
        ]}
      />
      <section id="home">
        <h2>Home</h2>
      </section>
    </>
  );
};

export default Home;
