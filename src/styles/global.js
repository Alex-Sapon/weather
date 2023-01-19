import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    //font-size: 10px;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;