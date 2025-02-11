import React from 'react';
import './Photos.css';

const Photos: React.FC = () => {
  return (
    <section id="photos">
      <h2>Photos</h2>
      <div className="image-container">
        <img
          src="../../assets/portfolio_png/pebble.png"
          alt="Home"
          className="gallery-image"
        />
        <img
          src="../../assets/portfolio_png/abaydisc.png"
          alt="Home"
          className="gallery-image"
        />
        <img
          src="../../assets/portfolio_png/graduation.png"
          alt="Home"
          className="gallery-image"
        />
        <img
          src="../../assets/portfolio_png/archie.png"
          alt="Home"
          className="gallery-image"
        />
      </div>
    </section>
  );
};

export default Photos;
