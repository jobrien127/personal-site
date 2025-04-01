import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Home: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Joseph O'Brien's portfolio website. I am a Software Engineer and App Developer specializing in full-stack development and mobile applications."
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
        <p>Welcome!</p>
        <p>
          The purpose of this site is to highlight my personal projects,
          professional experiences, and offer a glimpse into who I am.
        </p>
        <p>Feel free to connect with me using the provided contact methods!</p>
        <p>
          “You can&apos;t stop the waves, but you can learn to surf.” - Alan
          Watts
        </p>
      </section>
    </>
  );
};

export default Home;
