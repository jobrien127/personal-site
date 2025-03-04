import React, { useEffect } from 'react';
import SEO from '../common/SEO';
// import './Resume.css';

const Resume: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Resume"
        description="View Joseph O'Brien's professional resume, showcasing experience in software engineering, app development, and technical skills."
        keywords={[
          'resume',
          'CV',
          'software engineer',
          'app developer',
          'experience',
          'skills',
          'education',
          'career',
        ]}
      />
      <section id="resume">
        <div className="resume-text">
          <h2>Resume</h2>
        </div>

        <iframe
          src="/assets/jmo_cv_se.pdf"
          width="100%"
          height="1000px"
          title="Joseph O'Brien's Resume"
          className="resume-frame"
        />
        <a
          href="/assets/jmo_cv_se.pdf"
          download="Joseph_OBrien_Resume.pdf"
          className="download-link"
        >
          Download Resume
        </a>
      </section>
    </>
  );
};

export default Resume;
