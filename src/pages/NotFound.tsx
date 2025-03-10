import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const NotFound: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        keywords={['404', 'not found', 'page not found']}
      />
      <section id="not-found">
        <h2>Page Not Found</h2>
        <div className="not-found-content">
          <p>The page you are looking for does not exist or has been moved.</p>
          <p>
            <Link to="/" className="home-link">
              Return to Home
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
