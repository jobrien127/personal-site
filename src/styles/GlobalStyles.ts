import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Teal / Green / Purple palette */
    --accent: #2dd4bf;
    --accent-light: #5eead4;
    --accent-2: #a78bfa;
    --accent-2-light: #c4b5fd;
    --accent-3: #4ade80;

    --text-primary: #e2e8f0;
    --text-secondary: #94a3b8;
    --text-muted: #4b5563;

    --surface: #0d1520;
    --surface-elevated: #132030;

    --border: rgba(45, 212, 191, 0.1);
    --border-accent: rgba(45, 212, 191, 0.28);
    --border-2: rgba(167, 139, 250, 0.18);

    --shadow-sm: 0 1px 8px rgba(0, 0, 0, 0.5);
    --shadow-md: 0 4px 24px rgba(0, 0, 0, 0.6);
    --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.7);

    --tab-bar-height: calc(1rem + 25px);
    --content-spacing: 1rem;

    --font-display: 'Syne', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-body: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'IBM Plex Mono', 'Courier New', monospace;

    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;

    --ease: cubic-bezier(0.4, 0, 0.2, 1);
  }

  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #07090f;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }

  h2 {
    color: var(--text-primary);
    font-family: var(--font-display);
    font-style: normal;
    font-size: 1.875rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.2;
    text-align: center;
    margin: 0 auto 36px;
    max-width: 800px;
    padding: 0 0 20px;
    border: none;
    border-radius: 0;
    background: none;
    box-shadow: none;
    opacity: 1;
    position: relative;
    transition: none;
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-2), var(--accent));
    border-radius: 1px;
    transition: width 0.3s var(--ease);
  }

  h2:hover::after {
    width: 60px;
  }

  /* TabBar */
  .tab-bar {
    position: fixed;
    width: 100%;
    background: rgba(7, 9, 15, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    display: flex;
    z-index: 1000;
    padding: 12px 0 8px;
  }

  .tab-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .tab-header {
    color: var(--text-primary);
    text-decoration: none;
    padding-bottom: 10px;
    font-family: var(--font-display);
    font-style: normal;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    width: 100%;
  }

  .tab-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    width: 100%;
    padding: 0 10px 5px;
  }

  .tab-link {
    background: transparent;
    color: var(--text-secondary);
    text-decoration: none;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    padding: 6px 14px;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    min-width: fit-content;
    transition: all 0.15s ease;
    position: relative;
    overflow: hidden;
  }

  .tab-link:hover {
    text-decoration: none;
    background: rgba(45, 212, 191, 0.07);
    color: var(--text-primary);
    transform: none;
    box-shadow: none;
  }

  .tab-link.active {
    background: rgba(167, 139, 250, 0.12);
    color: var(--accent-2-light);
    box-shadow: none;
  }

  /* Common page styles */
  #home, #portfolio, #resume, #contact, #photos, #about, #not-found {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2rem);
  }

  section {
    margin-top: calc(var(--tab-bar-height) + var(--content-spacing)) !important;
  }

  /* Not Found Page */
  .not-found-content {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
    background: var(--surface);
    margin-bottom: 24px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px 32px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: var(--shadow-sm);
  }

  .home-link {
    display: inline-block;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: #07090f;
    padding: 8px 20px;
    margin-top: 15px;
    border-radius: var(--radius-sm);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  .home-link:hover {
    background: linear-gradient(135deg, var(--accent-light), var(--accent-2-light));
    color: #07090f;
    transform: none;
    box-shadow: 0 0 28px rgba(45, 212, 191, 0.2);
  }

  /* Hero */
  .hero {
    max-width: 800px;
    margin: 0 auto 28px;
    text-align: left;
    padding: 28px 32px;
    background: var(--surface);
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
  }

  .tab-header-name {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-role {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0 0 16px;
  }

  .hero-company {
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 0.875rem;
  }

  .hero-summary {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0 0 20px;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tech-tag {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: var(--surface-elevated);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 3px 10px;
    transition: all 0.15s ease;
    cursor: default;
  }

  .tech-tag:hover {
    border-color: var(--accent-2);
    color: var(--accent-2-light);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Home & About */
  #home p, #about p {
    font-size: 16px;
    line-height: 1.7;
    color: var(--text-secondary);
    background: var(--surface);
    margin-bottom: 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px 28px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: var(--shadow-sm);
    text-align: left;
    transition: border-color 0.15s ease;
  }

  #home p:hover, #about p:hover {
    border-color: var(--border-accent);
  }

  #home p.home-quote {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.85;
    color: var(--text-primary);
    text-align: center;
    max-width: 640px;
    border-left: 3px solid var(--accent-2);
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 24px 32px;
  }

  #home p.home-quote:hover {
    border-color: var(--border-accent);
    border-left: 3px solid var(--accent);
  }

  /* Portfolio */
  .projects {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: 2%;
  }

  .project-group {
    margin-bottom: 32px;
  }

  .project-group:last-child {
    margin-bottom: 0;
  }

  .project-group-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .project-group-title {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent-2);
    margin: 0 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
    text-align: left;
  }

  .project {
    background: var(--surface);
    color: var(--text-primary);
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    border-left: 3px solid var(--accent-2);
    border-radius: var(--radius-lg);
    padding: 20px 28px;
    box-shadow: var(--shadow-sm);
    opacity: 1;
    transition: all 0.15s ease;
    position: relative;
    overflow: hidden;
    text-align: left;
  }

  .project::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-2), var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .project:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 0 24px rgba(45, 212, 191, 0.06);
    border-top-color: var(--border-accent);
    border-right-color: var(--border-accent);
    border-bottom-color: var(--border-accent);
    border-left-color: var(--accent);
  }

  .project:hover::before {
    opacity: 1;
  }

  .project-title {
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: -0.015em;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .project-description {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    margin-bottom: 14px;
    line-height: 1.6;
  }

  .project-link {
    color: var(--accent);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    display: inline-block;
    margin-bottom: 6px;
    margin-right: 16px;
    transition: color 0.15s ease;
  }

  .project-link:last-child {
    margin-bottom: 0;
  }

  .project-link:hover {
    text-decoration: underline;
    color: var(--accent-light);
    transform: none;
  }

  /* Resume */
  .resume-container {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 12px;
    box-shadow: var(--shadow-sm);
    margin-bottom: 20px;
    overflow: hidden;
  }

  .resume-frame {
    width: 100%;
    height: 85vh;
    min-height: 500px;
    border: none;
    border-radius: var(--radius-md);
    display: block;
  }

  .download-link {
    display: inline-block;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: #07090f;
    padding: 8px 20px;
    border-radius: var(--radius-sm);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  .download-link:hover {
    background: linear-gradient(135deg, var(--accent-light), var(--accent-2-light));
    color: #07090f;
    box-shadow: 0 0 28px rgba(45, 212, 191, 0.2);
  }

  /* Contact */
  .contact-cards {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-card {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px 28px;
    transition: all 0.15s ease;
    position: relative;
    overflow: hidden;
    text-align: left;
  }

  .contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-2), var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .contact-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 0 24px rgba(45, 212, 191, 0.06);
    border-color: var(--border-accent);
  }

  .contact-card:hover::before {
    opacity: 1;
  }

  .contact-card h3 {
    margin: 0 0 10px 0;
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .contact-card a {
    color: var(--accent);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    transition: color 0.15s ease;
  }

  .contact-card a:hover {
    text-decoration: underline;
    color: var(--accent-light);
  }

  .contact-card span {
    font-size: 1rem;
    color: var(--text-primary);
  }

  /* Footer */
  .footer {
    background: #07090f;
    border-top: 1px solid var(--border);
    padding: 24px 20px 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
    gap: 60px;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .footer-section h4 {
    color: var(--accent);
    margin: 0 0 2px;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .footer-section a,
  .footer-section {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.15s ease;
  }

  .footer-section a:hover {
    color: var(--accent-light);
    text-decoration: none;
  }

  .social-links {
    display: flex;
    gap: 16px;
  }

  .footer-bottom {
    text-align: center;
    padding-top: 16px;
    border-top: 1px solid rgba(45, 212, 191, 0.06);
  }

  .footer-bottom p {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  /* Photos */
  #photos {
    text-align: center;
    max-width: 1600px;
    margin: 80px auto 0;
    padding: 0 15px;
  }

  .image-container {
    columns: 3;
    column-gap: 16px;
    padding: 16px;
  }

  .gallery-image {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 16px;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    cursor: pointer;
    background-color: var(--surface);
    padding: 6px;
    transition: all 0.2s ease;
    filter: brightness(0.9) contrast(1.05);
  }

  .gallery-image:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--border-accent);
    filter: brightness(1) contrast(1.1);
  }

  /* Media Queries */
  @media (min-width: 1024px) {
    .image-container {
      columns: 4;
      column-gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .tab-bar {
      height: auto;
      padding: 8px 0;
    }

    .tab-header {
      font-size: 0.9375rem;
      padding: 4px 10px 8px;
    }

    .tab-links {
      gap: 4px;
      padding: 0 6px 5px;
    }

    .tab-link {
      padding: 5px 10px;
      font-size: 0.8125rem;
    }

    h2 {
      font-size: 1.625rem;
      margin: 0 auto 24px;
    }

    #home p, #about p {
      font-size: 15px;
      padding: 16px 20px;
    }

    #home p.home-quote {
      padding: 20px 24px;
    }

    .hero {
      padding: 20px;
    }

    .hero-summary {
      font-size: 0.875rem;
    }

    .project, .contact-card {
      padding: 16px 20px;
    }

    .image-container {
      columns: 2;
      column-gap: 12px;
      padding: 8px;
    }

    .gallery-image {
      margin-bottom: 12px;
      padding: 4px;
    }

    .contact-cards {
      gap: 8px;
      padding: 0 10px;
    }

    .contact-card {
      padding: 16px 18px;
    }

    .footer-content {
      flex-direction: column;
      gap: 20px;
    }

    .footer {
      padding: 20px 15px 12px;
    }

    .resume-frame {
      height: 75vh;
      min-height: 400px;
    }
  }

  @media (max-width: 480px) {
    .tab-links {
      gap: .4rem;
      padding: 0 0.2rem 0.5rem;
    }

    .tab-link {
      padding: 0.25rem 0.5rem;
      font-size: 0.8rem;
    }

    .image-container {
      columns: 1;
      column-gap: 8px;
    }

    .gallery-image {
      margin-bottom: 8px;
      padding: 3px;
    }
  }
`;

export default GlobalStyles;
