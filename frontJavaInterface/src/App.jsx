import { createGlobalStyle } from "styled-components"
import {  StyledDiv } from "./components/container/Container"

function App() {

  const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto Serif', serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  `

  return (
    <>
      <GlobalStyle/>
      <StyledDiv>
      </StyledDiv>
    </>
  )
}

export default App
