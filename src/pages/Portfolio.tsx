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
    title: 'Pantry iOS App',
    description:
      'A modern iOS app for smart pantry management, helping to track groceries, manage expiration dates, and receive intelligent suggestions based on purchasing habits. (Not on App Store yet)',
    link: 'https://github.com/jobrien127/pantry',
  },
  {
    id: 2,
    title: 'Personal Website',
    description: 'Repository for this website.',
    link: 'https://github.com/jobrien127/personal-site',
  },
  {
    id: 3,
    title: '30XX Arena Survival',
    description: 'A 2D game created with GameMaker Studio.',
    link: 'https://github.com/jobrien127/30XX_Arena_Survival',
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
    title: 'Tempo (Work in Progress)',
    description:
      'A Templated repo that is meant to help kickstart containerized full-stack development. Makes use of Docker, React, React-Native, Django, Go, postgreSQL, MongoDB, Redis, and RabbitMQ.',
    link: 'https://github.com/jobrien127/tempo',
  },
  {
    id: 6,
    title: 'Zodiac Sign Calculator',
    description:
      'Ruby program that calculates your zodiac sign based on your birthdate.',
    link: 'https://github.com/jobrien127/zodiac-sign-calculator',
  },
  {
    id: 7,
    title: 'Markov Chain Text Generator',
    description:
      'Ruby program that generates text based on a given input text file.',
    link: 'https://github.com/jobrien127/markov-text-generator',
  },
  {
    id: 8,
    title: 'Home Again Website (Work in Progress)',
    description:
      "Codebase for a website I'm building for my Mother's small business.",
    link: 'https://github.com/jobrien127/home-again',
  },
  {
    id: 9,
    title: 'lemmonlodge.com',
    description: "Codebase for a website I built for my Uncle's idle domain.",
    link: 'https://github.com/jobrien127/lemmon-lodge',
    sitelink: 'https://www.lemmonlodge.com',
  },
];

const Portfolio: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore my software development projects, including web applications, games, and tools built with various technologies."
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
              <a href={project.link} className="project-link">
                Link to GitHub Repository
              </a>
              {project.sitelink && (
                <a href={project.sitelink} className="project-link">
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
