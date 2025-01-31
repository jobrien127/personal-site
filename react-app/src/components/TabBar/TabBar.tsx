// src/components/TabBar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TabBar.css';

const TabBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="tab-bar">
      <header className='tab-header'>Joseph M. O'Brien</header>
      <div className="tab-links-container">
        <div className="tab-links">
          <button className="tab-link" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="tab-link" onClick={() => navigate('/resume')}>
            Resume
          </button>
          <button className="tab-link" onClick={() => navigate('/portfolio')}>
            Portfolio
          </button>
          <button className="tab-link" onClick={() => navigate('/blog')}>
            Blog
          </button>
          <button className="tab-link" onClick={() => navigate('/contact')}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabBar;