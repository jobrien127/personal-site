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
    margin-bottom: 20px;
  }

  /* TabBar styles */
  .tab-bar {
    position: fixed;
    width: 100%;
    background-color: #333;
    display: flex;
    z-index: 1000;
  }

  .tab-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .tab-header {
    color: white;
    text-decoration: none;
    padding-right: 1vw;
  }

  .tab-links {
    display: flex;
    gap: 1vw;
  }

  .tab-link {
    background: #2f4f4f;
    color: whitesmoke;
    text-decoration: none;
    border-color: darkgrey;
    border-radius: 3px;
    border-style: solid;
    cursor: pointer;
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

  /* Home styles */
  #home {
    text-align: center;
  }

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
  #portfolio {
    text-align: center;
  }

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
  }

  .project-link:hover {
    text-decoration: underline;
  }

  /* Resume styles */
  #resume {
    text-align: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .resume-text {
    background-color: darkslategray;
    color: whitesmoke;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

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
  #contact {
    text-align: center;
  }

  #contact .contact-text {
    background-color: darkslategray;
    color: whitesmoke;
  }

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
    .tab-bar {
      height: 26vw;
    }

    .tab-header {
      font-size: 5vw;
    }

    .tab-link {
      padding: 2vw;
      font-size: 5vw;
      margin: 1vw;
    }

    .home-image {
      max-width: 35vw;
    }

    #resume {
      padding: 10px;
    }

    .resume-frame {
      height: 600px;
    }
  }

  @media (min-width: 1024px) {
    .tab-bar {
      height: 3vw;
      padding-top: 1vw;
    }

    .tab-header {
      font-size: 1.5vw;
    }

    .tab-link {
      font-size: 1.5vw;
      padding: 0vw 1vw;
    }

    .tab-links {
      height: 2vw;
    }

    .home-image {
      max-width: 15vw;
    }
  }
`;

export default GlobalStyles;
