import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Resume: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Resume"
        description=""
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
          src="/assets/Joseph_OBrien_CV_.pdf"
          width="100%"
          height="1000px"
          title="Joseph O'Brien's Resume"
          className="resume-frame"
        />
        <a
          href="/assets/Joseph_OBrien_CV_.pdf"
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
