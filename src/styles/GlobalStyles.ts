import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Base styles */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #e0e0e0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
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

  /* Common styles */
  h2 {
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    background: linear-gradient(135deg, #483d8b 0%, #5a4fcf 100%);
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0 auto 32px;
    padding: 24px 32px;
    max-width: 800px;
    opacity: 1;
    box-shadow: 0 8px 32px rgba(72, 61, 139, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  h2:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(72, 61, 139, 0.4);
  }

  /* TabBar styles */
  :root {
    --tab-bar-height: calc(1rem + 25px);
    --content-spacing: 1rem;
  }

  .tab-bar {
    position: fixed;
    width: 100%;
    background: rgba(34, 34, 34, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    z-index: 1000;
    padding: 10px 0 5px;
  }

  .tab-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .tab-header {
    color: #ffffff;
    text-decoration: none;
    padding-bottom: 10px;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }

  .tab-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
    padding: 0 10px 5px;
  }

  .tab-link {
    background: linear-gradient(135deg, #2a5050 0%, #3a6060 100%);
    color: #ffffff;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    padding: 8px 16px;
    font-size: 1.1rem;
    min-width: fit-content;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .tab-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  .tab-link:hover {
    text-decoration: underline;
    background: linear-gradient(135deg, #1e3434 0%, #2a4a4a 100%);
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .tab-link:hover::before {
    left: 100%;
  }

  .tab-link.active {
    background: linear-gradient(135deg, #483d8b 0%, #5a4fcf 100%);
    color: #ffffff;
    box-shadow: 0 4px 16px rgba(72, 61, 139, 0.4);
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

  /* Not Found Page styles */
  .not-found-content {
    font-size: 18px;
    line-height: 1.6;
    color: #ffffff;
    background: linear-gradient(135deg, #1c2727 0%, #2a3535 100%);
    margin-bottom: 24px;
    opacity: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px 32px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
  }

  .home-link {
    display: inline-block;
    background: linear-gradient(135deg, #2a5050 0%, #3ea3a3 100%);
    color: #ffffff;
    padding: 12px 24px;
    margin-top: 15px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .home-link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .home-link:hover {
    background: linear-gradient(135deg, #3a6060 0%, #4eb3b3 100%);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(62, 163, 163, 0.3);
  }

  .home-link:hover::after {
    opacity: 1;
  }

  /* Home & About styles */
  .home-image {
    height: auto;
    max-width: 300px;
    border: 3px solid #3ea3a3;
    border-radius: 12px;
    margin: 20px auto;
    display: block;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .home-image:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    border-color: #5ac3c3;
  }

  #home p, #about p {
    font-size: 18px;
    line-height: 1.6;
    color: #ffffff;
    background: linear-gradient(135deg, #1c2727 0%, #2a3535 100%);
    margin-bottom: 24px;
    opacity: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px 32px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #home p:hover, #about p:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border-color: rgba(62, 163, 163, 0.3);
  }

  /* Portfolio styles */
  .projects {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 2%;
  }

  .project {
    background: linear-gradient(135deg, #1c2727 0%, #2a3535 100%);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px 32px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .project::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #3ea3a3, #5a4fcf, #3ea3a3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    border-color: rgba(62, 163, 163, 0.3);
  }

  .project:hover::before {
    opacity: 1;
  }

  .project-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .project-description {
    font-size: 1em;
    margin-bottom: 15px;
  }

  .project-link {
    color: #c4b3ff;
    text-decoration: none;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }

  .project-link:last-child {
    margin-bottom: 0;
  }

  .project-link:hover {
    text-decoration: underline;
    color: #ffffff;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    transform: translateX(4px);
  }

  /* Resume styles */
  .resume-frame {
    width: 100%;
    height: 800px;
    border: none;
    margin-bottom: 20px;
  }

  .download-link {
    display: inline-block;
    background: linear-gradient(135deg, #2a5050 0%, #3ea3a3 100%);
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .download-link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .download-link:hover {
    background: linear-gradient(135deg, #3a6060 0%, #4eb3b3 100%);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(62, 163, 163, 0.3);
  }

  .download-link:hover::after {
    opacity: 1;
  }

  /* Contact styles */
  .contact-cards {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-card {
    font-size: 18px;
    line-height: 1.6;
    color: #ffffff;
    background: linear-gradient(135deg, #1c2727 0%, #2a3535 100%);
    margin-bottom: 24px;
    opacity: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px 32px;
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #3ea3a3, #5a4fcf, #3ea3a3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    border-color: rgba(62, 163, 163, 0.3);
  }

  .contact-card:hover::before {
    opacity: 1;
  }

  .contact-card h3 {
    margin: 0 0 15px 0;
    color: #ffffff;
    font-size: 1.3em;
  }

  .contact-card a {
    color: #c4b3ff;
    text-decoration: none;
    font-size: 1.1em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .contact-card a:hover {
    text-decoration: underline;
    color: #3ea3a3;
    text-shadow: 0 0 8px rgba(62, 163, 163, 0.5);
  }

  .contact-card span {
    font-size: 1.1em;
    color: #ffffff;
  }

  /* Footer styles */
  .footer {
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    padding: 20px 20px 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 30px;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .footer-section h4 {
    color: #ffffff;
    margin: 0 0 0px;
    font-size: 1.1rem;
  }

  .footer-section a,
  .footer-section {
    color: #c4b3ff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s ease;
  }

  .footer-section a:hover {
    color: #3ea3a3;
    text-decoration: underline;
    text-shadow: 0 0 8px rgba(62, 163, 163, 0.5);
  }

  .social-links {
    display: flex;
    gap: 20px;
  }

  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #444;
  }

  .footer-bottom p {
    margin: 0;
    font-size: 0.9rem;
    color: #bbbbbb;
  }

  /* Photos styles */
  #photos {
    text-align: center;
    max-width: 1600px;
    margin: 80px auto 0;
    padding: 0 15px;
  }

  .image-container {
    columns: 3;
    column-gap: 35px;
    padding: 20px 15px;
  }

  .gallery-image {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 25px;
    border-radius: 12px;
    border: 2px solid rgba(62, 163, 163, 0.3);
    cursor: pointer;
    background-color: #1c2727;
    padding: 12px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.9) contrast(1.1);
  }
    
  .gallery-image:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-color: #3ea3a3;
    filter: brightness(1) contrast(1.2);
  }

  /* Media Queries */
  @media (min-width: 1024px) {
    .image-container {
      columns: 4;
      column-gap: 30px;
    }
  }

  @media (max-width: 768px) {
    .tab-bar {
      height: auto;
      padding: 8px 0;
    }

    .tab-header {
      font-size: 1.2rem;
      padding: 5px 10px 8px;
    }

    .tab-links {
      gap: 6px;
      padding: 0 6px 5px;
    }

    .tab-link {
      padding: 6px 12px;
      font-size: 1rem;
    }

    h2 {
      font-size: 1.75rem;
      padding: 20px 24px;
      margin: 0 auto 20px;
    }

    .home-image {
      max-width: 200px;
      margin: 0 auto 20px;
    }

    #home p, #about p {
      font-size: 16px;
      padding: 20px 24px;
    }

    .project, .contact-card {
      padding: 20px 24px;
    }

    .image-container {
      columns: 2;
      column-gap: 20px;
      padding: 10px 8px;
    }

    .gallery-image {
      margin-bottom: 20px;
      padding: 8px;
    }

    .contact-cards {
      gap: 18px;
      padding: 0 10px;
    }

    .contact-card {
      padding: 18px 20px;
    }

    .contact-card h3 {
      font-size: 1.2em;
    }

    .contact-card a,
    .contact-card span {
      font-size: 1em;
    }

    .footer-content {
      flex-direction: column;
      gap: 30px;
    }
    
    .footer {
      padding: 30px 15px 15px;
    }
  }

  @media (max-width: 480px) {
    .tab-links {
      gap: .5rem;
      padding: 0 0.2rem 0.5rem;
    }

    .tab-link {
      padding: 0.3rem 0.6rem;
      font-size: 1rem;
    }

    .image-container {
      columns: 1;
      column-gap: 8px;
    }

    .gallery-image {
      margin-bottom: 8px;
      padding: 4px;
    }
  }
`;

export default GlobalStyles;
