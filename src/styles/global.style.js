import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    max-width: 100vw;
    max-height: 100vh;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    color: #000;
    margin: 0;
    padding: 0;
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
    cursor: default;
    text-decoration: none;
  }

  input{
    border: none;
    outline: none;
  }
`;
