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

const projects: Project[] = [
  {
    id: 1,
    title: 'Pantry iOS App (WIP)',
    description:
      'A modern iOS app for smart pantry management, helping to track groceries, manage expiration dates, and receive intelligent suggestions based on purchasing habits.',
    link: 'https://github.com/jobrien127/pantry',
  },
  {
    id: 2,
    title: 'HoodViz - Robinhood Portfolio Visualizer',
    description:
      'A python script that provides visualizations of a Robinhood portfolio.',
    link: 'https://github.com/jobrien127/hoodviz',
  },
  {
    id: 3,
    title: 'Personal Website',
    description: 'Repository for this website.',
    link: 'https://github.com/jobrien127/personal-site',
  },
  {
    id: 4,
    title: 'Python Playground',
    description:
      'A python playground for experiementing with machine learning and AI implementations.',
    link: 'https://github.com/jobrien127/python-playground',
  },
  {
    id: 5,
    title: 'Tempo',
    description:
      'A Templated repo that is meant to help kickstart containerized full-stack development. Makes use of Docker, React, React-Native, Django, Go, postgreSQL, MongoDB, Redis, and RabbitMQ.',
    link: 'https://github.com/jobrien127/tempo',
  },
  {
    id: 6,
    title: '30XX Arena Survival',
    description: 'A 2D game created with GameMaker Studio.',
    link: 'https://github.com/jobrien127/30XX_Arena_Survival',
  },
  {
    id: 7,
    title: 'lemmonlodge.com',
    description:
      'Website I built for an idle domain, which sends automated emails to domain owner if site visitor wants to contact them.',
    link: 'https://github.com/jobrien127/lemmon-lodge',
    sitelink: 'https://www.lemmonlodge.com',
  },
  {
    id: 8,
    title: 'Zodiac Sign Calculator',
    description:
      'Ruby program that calculates your zodiac sign based on your birthdate.',
    link: 'https://github.com/jobrien127/zodiac-sign-calculator',
  },
  {
    id: 9,
    title: 'Markov Chain Text Generator',
    description:
      'Ruby program that generates text based on a given input text file.',
    link: 'https://github.com/jobrien127/markov-text-generator',
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
