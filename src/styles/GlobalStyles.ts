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
    gap: 1vw;
    width: 100%;
    padding-bottom: 5px;
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

  /* Common styles for all pages */
  #home, #portfolio, #resume, #contact {
    text-align: center;
    max-width: 1200px;
    margin: 100px auto 0;
    padding: 0 20px;
  }

  /* Home styles */
  #home p {
    font-size: 18px;
    line-height: 1.6;
    color: whitesmoke;
    background-color: darkslategray;
    margin-bottom: 3%;
    opacity: 0.9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
  }

  .home-image {
    height: auto;
    border: 3px solid #2d8080;
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
    margin-bottom: 10px;
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
    background-color: darkslategray;
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

  /* Media Queries */
  @media (max-width: 768px) {
    h2 {
      font-size: 1.75rem;
      padding: 12px;
      margin: 0 10px 20px;
    }

    #home, #portfolio, #resume, #contact {
      margin-top: 50px;
      padding: 0 10px;
    }

    .tab-bar {
      height: auto;
      padding: 8px 0 5px;
    }

    .tab-header {
      font-size: 1.2rem;
      padding: 5px 15px 8px;
      text-align: center;
    }

    .tab-links {
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      padding: 0 10px 5px;\
    }

    .tab-link {
      padding: 8px 16px;
      font-size: 1rem;
    }

    .home-image {
      max-width: 35vw;
    }

    .resume-frame {
      height: 600px;
    }
  }

  @media (min-width: 1024px) {
    #home, #portfolio, #resume, #contact {
      margin-top: 60px;
    }

    .tab-bar {
      height: auto;
      min-height: 3vw;
      padding: 10px 0 5px;
    }

    .tab-header {
      font-size: 1.5vw;
      padding-bottom: 10px;
    }

    .tab-links {
      padding-bottom: 5px;
    }

    .tab-link {
      padding: 10px 20px;
      font-size: 1.2rem;
    }

    .home-image {
      max-width: 15vw;
    }
  }
`;

export default GlobalStyles;
