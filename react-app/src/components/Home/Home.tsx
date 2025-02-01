import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className='home-text'>
        <h1>Welcome!</h1>
      </div>
      <img src="../../assets/myFace.png" alt="Home" className="home-image" />
      <div className='home-text'>
      <p>
        TODO: Add a brief introduction here
      </p>
      </div>
    </section>
  );
};

export default Home;
