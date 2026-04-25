import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const TECH_TAGS = [
  'Swift',
  'TypeScript',
  'iOS',
  'tvOS',
  'React Native',
  'React',
  'Python',
  'Expo',
  'JavaScript',
  'A11y',
];

const Home: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Home"
        description="Software engineer — React, TypeScript, React Native, Swift, Rust, Python, context engineering, and prompt design."
        keywords={[
          'software engineer',
          'app developer',
          'full stack developer',
          'context engineering',
          'prompt engineering',
          'React',
          'React Native',
          'TypeScript',
          'Swift',
          'Rust',
          'Python',
          'portfolio',
        ]}
      />
      <section id="home">
        <h2 className="visually-hidden">Home</h2>
        <div className="hero">
          <p className="hero-role">
            Principal Engineer&nbsp;&nbsp;·&nbsp;&nbsp;
            <span className="hero-company">Recess Technologies</span>
          </p>
          <p className="hero-summary">
            Software engineer with a background in mobile and cross-platform
            development. Currently at Recess Technologies. Previously at VML
            where I helped build and maintain popular iOS, tvOS, and React
            Native applications. CS degree from Colorado School of Mines.
          </p>
          <div className="tech-tags">
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="home-quote">
          &ldquo;You can&apos;t stop the waves, but you can learn to
          surf.&rdquo; &mdash; Alan Watts
        </p>
      </section>
    </>
  );
};

export default Home;
