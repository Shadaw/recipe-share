import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #ff5151;

    --zero: #fff;
    --negative: #202020;

    --gray: #f5f5f5;
    --gray-200: #e6e6e6;
    --gray-300: #dadada;
    --gray-900: #717171;
    --background: #f9f9f9;

    --always-on-top: 11;
    --overlay: 10;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *[aria-hidden="true"] {
    visibility: hidden;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
