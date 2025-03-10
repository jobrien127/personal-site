import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <a href="mailto:dev@jm-ob.com">dev@jm-ob.com</a>
          <a href="tel:+12095345372">+1 (209) 534-5372</a>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/j-m-obrien"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jobrien127"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Joseph M. O&apos;Brien. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
