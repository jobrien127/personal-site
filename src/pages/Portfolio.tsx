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
    description: 'Collection of plugins for Claude Code CLI',
    link: 'https://github.com/jobrien127/plugin-marketplace',
  },
  {
    id: 2,
    title: 'Agent Skills Library',
    description: 'Collection of reusable agent skills for AI-driven workflows',
    link: 'https://github.com/jobrien127/agent-skills',
  },
  {
    id: 3,
    title: 'dotfiles',
    description: 'My personal dotfile config',
    link: 'https://github.com/jobrien127/dotfiles',
  },
  {
    id: 4,
    title: 'Crypto Bot',
    description: 'Automated cryptocurrency trading bot using the Robinhood Crypto API with technical analysis, backtesting, and a rule-based signal engine',
    link: 'https://github.com/jobrien127/crypto-bot',
  },
  {
    id: 5,
    title: 'fin',
    description: 'Terminal-based personal finance tracker that syncs with bank accounts via the Plaid API, with a Textual TUI',
    link: 'https://github.com/jobrien127/fin',
  },
  {
    id: 6,
    title: 'HoodViz',
    description: 'Portfolio visualization tool for Robinhood accounts with interactive charts, treemaps, and diversification metrics',
    link: 'https://github.com/jobrien127/hoodviz',
  },
  {
    id: 7,
    title: 'Pantry',
    description: 'iOS app for smart pantry management — track groceries, expiration dates, and get intelligent restocking suggestions',
    link: 'https://github.com/jobrien127/pantry',
  },
  {
    id: 8,
    title: 'Pantry (Flutter)',
    description: 'Cross-platform Flutter app for pantry inventory management with expiration tracking and categorization',
    link: 'https://github.com/jobrien127/pantry-flutter',
  },
  {
    id: 9,
    title: 'Python Playground',
    description: 'Machine learning algorithms implemented from scratch using NumPy and PyTorch, covering supervised learning, neural nets, and image classification',
    link: 'https://github.com/jobrien127/python-playground',
  },
  {
    id: 10,
    title: 'Ragnar',
    description: 'Local-first RAG tool for knowledge management with AST-aware chunking, multi-collection search, and MCP server integration',
    link: 'https://github.com/jobrien127/ragnar',
  },
  {
    id: 11,
    title: 'Robinhood API Trading',
    description: 'Python client for the Robinhood Crypto API using Ed25519 cryptographic authentication, with order management and portfolio visualizations',
    link: 'https://github.com/jobrien127/robinhood-api-trading',
  },
  {
    id: 12,
    title: 'Stock Up',
    description: 'Rust/GraphQL backend service that aggregates grocery receipt data from retailer accounts, backed by PostgreSQL and Redis',
    link: 'https://github.com/jobrien127/stock-up',
  },
  {
    id: 13,
    title: 'APEX Template Language',
    description: 'Dense, token-efficient meta-language for LLM agent communication — achieves 40–60% token reduction vs JSON',
    link: 'https://github.com/jobrien127/template-language',
  },
  {
    id: 14,
    title: 'trdr',
    description: 'Terminal dashboard for live stock quotes, price charts, financial statements, and options chains — built with Rust and ratatui',
    link: 'https://github.com/jobrien127/trdr',
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
