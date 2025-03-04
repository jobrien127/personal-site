import React, { useEffect } from 'react';
import SEO from '../common/SEO';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <h2>Welcome!</h2>
        <img
          src="../../assets/portfolio_png/headshot.png"
          alt="Joseph O'Brien"
          className="home-image"
        />
        <p>
          Hello! My name is Joseph (Mac) O&apos;Brien and I am an App Developer
          and Software Engineer.
          <br />
        </p>
        {/* <p>
          I hope you enjoy my website and learn a little bit about me.
          <br />
        </p> */}
        <p>Feel free to contact me if you have any questions!</p>
      </section>
    </>
  );
};

export default Home;
