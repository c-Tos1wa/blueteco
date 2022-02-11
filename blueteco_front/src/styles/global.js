import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
  }

  a {
    text-decoration: none;
    font-weight: 900;
    color: #000;

    &:hover{
      color: #000;
    }
  }


`