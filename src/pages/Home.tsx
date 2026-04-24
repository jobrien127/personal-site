import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Home: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Home"
        description="Software engineer focused on mobile and web — React, TypeScript, React Native, and Swift."
        keywords={[
          'software engineer',
          'app developer',
          'full stack developer',
          'mobile developer',
          'React',
          'React Native',
          'iOS',
          'tvOS',
          'TypeScript',
          'JavaScript',
          'portfolio',
        ]}
      />
      <section id="home">
        <h2 className="visually-hidden">Home</h2>
        <img
          src="/assets/photos/headshot.png"
          alt="Mac OBrien"
          className="home-image"
        />
        <p>
          Software engineer focused on mobile and web. The stack changes, the
          patterns shift — that's the nature of the work. I build mostly in
          React, TypeScript, React Native, and Swift.
        </p>
        <p className="home-quote">
          "You can't stop the waves, but you can learn to surf." — Alan Watts
        </p>
      </section>
    </>
  );
};

export default Home;
