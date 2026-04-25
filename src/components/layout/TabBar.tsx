import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TabBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="tab-bar">
      <div className="tab-container">
        <header className="tab-header">
          <span className="tab-header-name">Mac OBrien</span>
          {' — Software Engineer'}
        </header>
        <div className="tab-links">
          <button
            className={`tab-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => navigate('/')}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </button>
          <button
            className={`tab-link ${location.pathname === '/resume' ? 'active' : ''}`}
            onClick={() => navigate('/resume')}
            aria-current={location.pathname === '/resume' ? 'page' : undefined}
          >
            Resume
          </button>
          <button
            className={`tab-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
            onClick={() => navigate('/portfolio')}
            aria-current={
              location.pathname === '/portfolio' ? 'page' : undefined
            }
          >
            Portfolio
          </button>
          {/* Blog tab removed — not yet implemented */}
        </div>
      </div>
    </div>
  );
};

export default TabBar;
