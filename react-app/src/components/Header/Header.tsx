import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Your Name</h1>
      <p>Web Developer | React Enthusiast</p>
      <Link to="/portfolio">View My Work</Link>
    </header>
  );
};

export default Header;