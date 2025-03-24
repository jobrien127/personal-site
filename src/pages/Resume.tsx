import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Resume: React.FC = () => {
  useScrollToTop();

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
        <h2>Resume</h2>

        <iframe
          src="/assets/jmo_cv_links.pdf"
          width="100%"
          height="1000px"
          title="Joseph O'Brien's Resume"
          className="resume-frame"
        />
        <a
          href="/assets/jmo_cv_links.pdf"
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
