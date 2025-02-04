import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className="home-text">
        <h1>Welcome!</h1>

        <img
          src="../../assets/portfolio_png/headshot.png"
          alt="Joseph O'Brien"
          className="home-image"
        />
      </div>
      <p>
        Hello! My name is Joseph O'Brien and I am a software engineer.
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
