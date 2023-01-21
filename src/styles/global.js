import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${props => props.theme.color.backgroundPrimary};
  }
`;