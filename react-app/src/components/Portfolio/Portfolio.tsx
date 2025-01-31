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
    description: 'A personal website built with React and TypeScript.',
    link: 'https://github.com/yourusername/personal-website',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'An e-commerce platform built with Node.js and Express.',
    link: 'https://github.com/yourusername/e-commerce-platform',
  },
  {
    id: 3,
    title: 'Machine Learning Model',
    description: 'A machine learning model for predicting house prices.',
    link: 'https://github.com/yourusername/machine-learning-model',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h2>My Work</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project" id='project'>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;