import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: lightgray;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h2 {
    color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

export default GlobalStyles;
