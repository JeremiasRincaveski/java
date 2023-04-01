import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Container } from "./components/container/Container"
import { Header } from "./components/header/Header"
import { Main } from "./components/main/Main"
import { Nav } from "./components/nav/Nav"
import { MyContext } from "./context/MyContext"
import { theme } from './theme/theme'
import { Modal } from "./components/modal/Modal"

function App() {

  const GlobalStyle = createGlobalStyle`
  body{
    background-color:${props => props.theme.colors.softGray};
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
        <Container>
          <Header />
          <Nav />
          <Main />
          <Modal/>
        </Container>
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App
