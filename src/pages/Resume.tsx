import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Resume: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Resume"
        description="Download Mac OBrien's professional resume. Experienced software engineer with expertise in mobile and web development, React, TypeScript, React Native, Swift, and Node.js."
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

        <div className="resume-container">
          <iframe
            src="/assets/mac_obrien.pdf"
            width="100%"
            title="Mac OBrien's Resume"
            className="resume-frame"
          />
        </div>
        <a
          href="/assets/mac_obrien.pdf"
          download="mac_obrien.pdf"
          className="download-link"
        >
          Download Resume
        </a>
      </section>
    </>
  );
};

export default Resume;
