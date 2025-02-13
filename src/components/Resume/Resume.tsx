import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <div className="resume-text">
        <h2>Resume</h2>
      </div>

      <iframe
        src="/jmo_cv_se.pdf"
        width="100%"
        height="1000px"
        title="Joseph O'Brien CV"
      />
      <p>
        If the PDF does not display, you can download it{' '}
        <a href="/jmo_cv_se.pdf" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
    </section>
  );
};

export default Resume;
