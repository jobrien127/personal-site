import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home">
      <h2>Welcome!</h2>
      <img
        src="../../assets/portfolio_png/headshot.png"
        alt="Joseph O'Brien"
        className="home-image"
      />
      <p>
        Hello! My name is Joseph O&apos;Brien and I am an App Developer and
        Software Engineer.
        <br />
      </p>
      <p>
        I hope you enjoy my website and learn a little bit about me.
        <br />
      </p>
      <p>Feel free to contact me if you have any questions!</p>
    </section>
  );
};

export default Home;
