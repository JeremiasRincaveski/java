import { createGlobalStyle, ThemeProvider } from "styled-components"
import { StyledDiv } from "./components/container/Container"
import { MyContext } from "./context/MyContext"
import { theme } from './theme/theme'

function App() {

  const GlobalStyle = createGlobalStyle`
  body{
    background-color:${props => props.theme.colors.softWhite};
    /* font-family: 'Roboto', sans-serif; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 19px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  `
  
  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider value={{}}>
        <GlobalStyle />
        <StyledDiv>
        </StyledDiv>
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App
