import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Base styles */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: lightgray;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
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
    color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: darkslategray;
    text-align: center;
    font-size: 2rem;
    margin: 0 auto 20px;
    padding: 15px;
    max-width: 800px;
    opacity: 0.9;
  }

  /* TabBar styles */
  :root {
    --tab-bar-height: calc(1rem + 25px);
    --content-spacing: 1rem;
  }

  .tab-bar {
    position: fixed;
    width: 100%;
    background-color: #333;
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
    color: white;
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
    background: #2f4f4f;
    color: whitesmoke;
    text-decoration: none;
    border-color: darkgrey;
    border-radius: 3px;
    border-style: solid;
    cursor: pointer;
    padding: 8px 16px;
    font-size: 1.1rem;
    min-width: fit-content;
  }

  .tab-link:hover {
    text-decoration: underline;
    background-color: #273838;
    color: lightgray;
  }

  .tab-link.active {
    background-color: darkslateblue;
    color: #fff;
  }

  /* Common page styles */
  #home, #portfolio, #resume, #contact, #photos, #not-found {
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
    color: whitesmoke;
    background-color: #273838;
    margin-bottom: 3%;
    opacity: 0.9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .home-link {
    display: inline-block;
    background-color: darkslategray;
    color: whitesmoke;
    padding: 12px 24px;
    margin-top: 15px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .home-link:hover {
    background-color: #2f4f4f;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* Home styles */
  .home-image {
    height: auto;
    max-width: 300px;
    border: 3px solid #2d8080;
    margin: 20px auto;
    display: block;
  }

  #home p {
    font-size: 18px;
    line-height: 1.6;
    color: whitesmoke;
    background-color: #273838;
    margin-bottom: 3%;
    opacity: 0.9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Portfolio styles */
  .projects {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 2%;
  }

  .project {
    background-color: #273838;
    color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
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
    color: #ad8dff;
    text-decoration: none;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  .project-link:last-child {
    margin-bottom: 0;
  }

  .project-link:hover {
    text-decoration: underline;
    color: #ffd902;
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
    background-color: darkslategray;
    color: whitesmoke;
    padding: 12px 24px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .download-link:hover {
    background-color: #2f4f4f;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* Contact styles */
  .contact-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-card {
    font-size: 18px;
    line-height: 1.6;
    color: whitesmoke;
    background-color: #273838;
    margin-bottom: 3%;
    opacity: 0.9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .contact-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .contact-card h3 {
    margin: 0 0 15px 0;
    color: whitesmoke;
    font-size: 1.3em;
  }

  .contact-card a {
    color: #ad8dff;
    text-decoration: none;
    font-size: 1.1em;
  }

  .contact-card a:hover {
    text-decoration: underline;
    color: #ffd902;
  }

  .contact-card span {
    font-size: 1.1em;
    color: #fffde9;
  }

  /* Footer styles */
  .footer {
    background-color: #333;
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
    color: #fff;
    margin: 0 0 0px;
    font-size: 1.1rem;
  }

  .footer-section a,
  .footer-section {
    color: #b79cfd;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .footer-section a:hover {
    color: #fff;
    text-decoration: underline;
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
    color: #999;
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
    border-radius: 6px;
    border: 2px solid #2d8080;
    cursor: pointer;
    background-color: #273838;
    padding: 12px;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
  }
    
  .gallery-image:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.3);
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
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.75rem;
      padding: 12px;
      margin: 0 auto 20px;
    }

    .home-image {
      max-width: 150px;
      margin: 0 auto 20px;
    }

    #home p {
      font-size: 16px;
      padding: 12px;
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
      gap: 15px;
      padding: 0 10px;
    }

    .contact-card {
      padding: 15px;
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
      gap: 4px;
      padding: 0 4px 5px;
    }

    .tab-link {
      padding: 5px 10px;
      font-size: 0.85rem;
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
