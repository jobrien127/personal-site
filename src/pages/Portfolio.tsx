import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Plugin Marketplace',
    description: 'Collection of Plugins foer Claude Code CLI',
    link: 'https://github.com/jobrien127/market',
  },
  {
    id: 2,
    title: 'Agent Skills Library',
    description: 'Collection of Agent Skills',
    link: 'https://github.com/jobrien127/skills',
  },
  {
    id: 3,
    title: 'dotfiles',
    description: 'My personal dotfile config',
    link: 'https://github.com/jobrien127/dotfiles',
  },
];

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
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
