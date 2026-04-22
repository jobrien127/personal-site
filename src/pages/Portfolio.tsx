import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  sitelink?: string;
}

const projects: Project[] = [];

const Portfolio: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Portfolio"
        description=""
        keywords={[
          'portfolio',
          'projects',
          'software development',
          'web applications',
          'game development',
          'GitHub',
          'full stack',
          'React',
        ]}
      />
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project" id="project">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to GitHub Repository
              </a>
              {project.sitelink && (
                <a
                  href={project.sitelink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to Live Site
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
