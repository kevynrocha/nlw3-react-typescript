import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #ebf2f5;
    color: #fff;
  }

  body, button, input, select, textarea {
    font: 600 18px Nunito, sans-serif;
  }

  img {
    max-width: 100%;
  }
`;
