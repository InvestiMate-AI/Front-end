import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    font-family: "NanumSquareNeo";
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

  // light
  @font-face{
    font-family: "NanumSquareNeo";
    font-weight: 300;
    src: url('../assets/fonts/NanumSquareNeo-aLt.ttf') format('truetype');
  }

  // medium
  @font-face{
    font-family: "NanumSquareNeo";
    font-weight: 500;
    src: url('../assets/fonts/NanumSquareNeo-bRg.ttf') format('truetype');
  }

  // bold
  @font-face{
    font-family: "NanumSquareNeo";
    font-weight: 700;
    src: url('../assets/fonts/NanumSquareNeo-cBd.ttf') format('truetype');
  }

  // extra bold
  @font-face{
    font-family: "NanumSquareNeo";
    font-weight: 800;
    src: url('../assets/fonts/NanumSquareNeo-bRg.dEb') format('truetype');
  }

  // heavy
  @font-face{
    font-family: "NanumSquareNeo";
    font-weight: 900;
    src: url('../assets/fonts/NanumSquareNeo-eHv.ttf') format('truetype');
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
`;
