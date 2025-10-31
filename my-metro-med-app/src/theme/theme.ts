import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
`;

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};

export { GlobalStyle, theme };