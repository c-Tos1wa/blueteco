import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #000;

    &:hover{
      color: #000;
    }
  }


`