import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: Spoqa Han Sans Neo, sans-serif-apple-system, Apple Color Emoji;
    box-sizing: border-box;
    max-width: 100vw;
    max-height: 100vh;

    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    font-color: #000;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;;
  }
  body{
    min-height: 100%;
  }

  ol, ul{
    list-style-type: none;
    padding-left: 0;
  }

  button{
    background: none;
    border: none;
    padding: 0;
    cursor: default;
  }
`;
