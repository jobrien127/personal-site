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
        <img
          src="/assets/photos/headshot.png"
          alt="Joseph O'Brien"
          className="home-image"
        />
        <p>Hello and welcome to my website!</p>
        <p>
          If you have any questions or just want to chat, feel free to reach out
          using any of the contact methods provided!
        </p>
        <p>
          “You can&apos;t stop the waves, but you can learn to surf.” - Alan
          Watts
        </p>
      </section>
    </>
  );
};

export default Home;
