import React from 'react';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Website',
    description: 'Repository for this website.',
    link: 'https://github.com/jobrien127/personal-site',
  },
  {
    id: 2,
    title: '30XX Arena Survival',
    description: 'A 2D game created in college with GameMaker Studio.',
    link: 'https://github.com/jobrien127/30XX_Arena_Survival',
  },
  {
    id: 3,
    title: 'Tempo (Work in Progress)',
    description:
      'A Templated repo that is meant to help kickstart containerized full-stack development. Makes use of Docker, React, React-Native, Django, Go, postgreSQL, MongoDB, Redis, and RabbitMQ.',
    link: 'https://github.com/jobrien127/tempo',
  },
  {
    id: 4,
    title: 'Zodiac Sign Calculator',
    description:
      'Ruby program that calculates your zodiac sign based on your birthdate.',
    link: 'https://github.com/jobrien127/zodiac-sign-calculator',
  },
  {
    id: 5,
    title: 'Markov Chain Text Generator',
    description:
      'Ruby program that generates text based on a given input text file.',
    link: 'https://github.com/jobrien127/markov-text-generator',
  },
];

const Portfolio: React.FC = () => {
  return (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
