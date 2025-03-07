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
          My name is Joseph &quot;Mac&quot; O&apos;Brien and I am an App
          Developer and Software Engineer.
        </p>
        {/* <p>
          I hope you enjoy my website and learn a little bit about me.
          <br />
        </p> */}
        <p>Feel free to contact me if you have any questions!</p>
        <p>
          “You can&apos;t stop the waves, but you can learn to surf.” - Alan
          Watts
        </p>
      </section>
    </>
  );
};

export default Home;
