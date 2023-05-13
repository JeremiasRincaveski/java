import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color:${props => props.theme.colors.softGray};
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;

    input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
        margin: 0;
      }

    input[type=number] {
      appearance: textfield;
    }
  }
  `