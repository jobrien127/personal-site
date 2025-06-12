import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Home: React.FC = () => {
  useScrollToTop();

  const greeting = 'Hello, world!';
  const intro =
    'Experienced mobile developer looking for new opportunities to explore. I enjoy learning new technologies and am eager to further my growth as a full-stack engineer.';

  return (
    <>
      <SEO
        title="Home"
        description=""
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
        <p>{greeting}</p>
        <p>{intro}</p>
        <p>
          “You can&apos;t stop the waves, but you can learn to surf.” - Alan
          Watts
        </p>
      </section>
    </>
  );
};

export default Home;
