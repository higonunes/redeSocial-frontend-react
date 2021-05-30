import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --primary: #eee;
    --secondary: #d9d9d9;
    --text: #393939;
    --blue: #1c2f57;
    --blue-dark: #14213d;
    --white: #ffffffff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;

  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    border: none;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }


`;
