import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --accent: #10b981;
    --accent-light: #34d399;
    --text-primary: #f5f5f5;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --surface: #1c1c1c;
    --surface-elevated: #252525;
    --border: rgba(255, 255, 255, 0.1);
    --border-accent: rgba(16, 185, 129, 0.25);
    --shadow-sm: 0 1px 8px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 4px 24px rgba(0, 0, 0, 0.5);
    --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.6);
    --tab-bar-height: calc(1rem + 25px);
    --content-spacing: 1rem;
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
    background-color: #111111;
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
    font-family: var(--font-body);
    font-style: normal;
    font-size: 1.875rem;
    font-weight: 700;
    letter-spacing: -0.025em;
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
    width: 28px;
    height: 2px;
    background: var(--accent);
    border-radius: 1px;
    transition: width 0.25s var(--ease);
  }

  h2:hover::after {
    width: 48px;
  }

  /* TabBar */
  .tab-bar {
    position: fixed;
    width: 100%;
    background: rgba(17, 17, 17, 0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
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
    font-family: var(--font-body);
    font-style: normal;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
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
    background: rgba(255, 255, 255, 0.06);
    color: var(--text-primary);
    transform: none;
    box-shadow: none;
  }

  .tab-link.active {
    background: rgba(16, 185, 129, 0.1);
    color: var(--accent-light);
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
    background: var(--accent);
    color: #0a0a0a;
    padding: 8px 20px;
    margin-top: 15px;
    border-radius: var(--radius-sm);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.15s ease;
  }

  .home-link:hover {
    background: var(--accent-light);
    color: #0a0a0a;
    transform: none;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
  }

  /* Home & About */
  .home-image {
    height: auto;
    max-width: 280px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    margin: 20px auto;
    display: block;
    box-shadow: var(--shadow-md);
    transition: all 0.2s ease;
  }

  .home-image:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: var(--border-accent);
  }

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

  /* Portfolio */
  .projects {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 2%;
  }

  .project {
    background: var(--surface);
    color: var(--text-primary);
    border: 1px solid var(--border);
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
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .project:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--border-accent);
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
    height: 800px;
    border: none;
    border-radius: var(--radius-md);
    display: block;
  }

  .download-link {
    display: inline-block;
    background: var(--accent);
    color: #0a0a0a;
    padding: 8px 20px;
    border-radius: var(--radius-sm);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.15s ease;
  }

  .download-link:hover {
    background: var(--accent-light);
    color: #0a0a0a;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
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
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .contact-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
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
    background: #111111;
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
    color: var(--text-muted);
    margin: 0 0 2px;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.08em;
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
    border-top: 1px solid rgba(255, 255, 255, 0.05);
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

    .home-image {
      max-width: 200px;
      margin: 0 auto 20px;
    }

    #home p, #about p {
      font-size: 15px;
      padding: 16px 20px;
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
