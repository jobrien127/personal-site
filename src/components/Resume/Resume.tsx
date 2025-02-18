import React, { useEffect } from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="resume">
      <div className="resume-text">
        <h2>Resume</h2>
      </div>

      <iframe
        src="/assets/jmo_cv_se.pdf"
        width="100%"
        height="1000px"
        title="Joseph O'Brien CV"
      />
      <p>
        If the PDF does not display, you can download it{' '}
        <a
          href="/assets/jmo_cv_se.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </section>
  );
};

export default Resume;
