import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TabBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="tab-bar">
      <div className="tab-container">
        <header className="tab-header">
          Joseph (Mac) OBrien - Software Engineer & App Developer
        </header>
        <div className="tab-links">
          <button
            className={`tab-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className={`tab-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => navigate('/about')}
          >
            About
          </button>
          <button
            className={`tab-link ${location.pathname === '/resume' ? 'active' : ''}`}
            onClick={() => navigate('/resume')}
          >
            Resume
          </button>
          <button
            className={`tab-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
            onClick={() => navigate('/portfolio')}
          >
            Portfolio
          </button>
          {/* <button
            className={`tab-link ${location.pathname === '/blog' ? 'active' : ''}`}
            onClick={() => navigate('/blog')}
          >
            Blog
          </button> */}
          <button
            className={`tab-link ${location.pathname === '/photos' ? 'active' : ''}`}
            onClick={() => navigate('/photos')}
          >
            Photos
          </button>
          {/* <button
            className={`tab-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => navigate('/contact')}
          >
            Contact
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TabBar;
