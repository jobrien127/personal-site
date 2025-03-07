import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Base styles */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: lightgray;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
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

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
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
    --tab-bar-height: calc(1rem + 25px); /* Base height for tab bar (header + links + padding) */
    --content-spacing: 0rem; /* Additional spacing below tab bar */
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
  #home, #portfolio, #resume, #contact, #photos {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2rem); /* Responsive padding */
  }

  /* Add responsive top margin for all pages */
  section {
    margin-top: calc(var(--tab-bar-height) + var(--content-spacing)) !important;
  }

  /* Home styles */
  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }

  .home-image {
    height: auto;
    max-width: 300px;
    border: 3px solid #2d8080;
    margin: 0 auto;
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
    color: #8d7df5;
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
  #contact ul {
    list-style-type: none;
    padding: 10px;
    font-size: 1.5em;
    background-color: #273838;
    color: whitesmoke;
    opacity: 0.9;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0;
  }

  #contact li {
    margin-bottom: 10px;
  }

  #contact a {
    color: #8d7df5;
    text-decoration: underline;
  }

  /* Footer styles */
  .footer {
    background-color: #333;
    color: white;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: 0.9rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
  }

  /* Photos styles */
  #photos {
    text-align: center;
    max-width: 1400px;
    margin: 80px auto 0;
    padding: 0 15px;
  }

  .image-container {
    columns: 3;
    column-gap: 15px;
    padding: 15px 0;
  }

  .gallery-image {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 15px;
    break-inside: avoid;
    border-radius: 6px;
    border: 2px solid #2d8080;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    background-color: #273838;
    padding: 8px;
  }

  .gallery-image:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  /* Media Queries */
  @media (min-width: 1024px) {
    .image-container {
      columns: 4;
      column-gap: 20px;
    }
  }

  @media (max-width: 768px) {
    :root {
      --tab-bar-height: calc(1rem + 25px);
      --content-spacing: 0rem;
    }

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

    section {
      margin-top: calc(var(--tab-bar-height) + var(--content-spacing)) !important;
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
      column-gap: 12px;
      padding: 10px 0;
    }

    .gallery-image {
      margin-bottom: 12px;
      padding: 6px;
    }
  }

  @media (max-width: 480px) {
    :root {
      --tab-bar-height: calc(1rem + 25px);
      --content-spacing: 0rem;
    }

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
