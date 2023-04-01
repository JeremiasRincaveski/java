import { useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Container } from "./components/container/Container"
import { Header } from "./components/header/Header"
import { Main } from "./components/main/Main"
import { Nav } from "./components/nav/Nav"
import { MyContext } from "./context/MyContext"
import { theme } from './theme/theme'
import { Product } from "./components/product/Product"

function App() {
const [modalIsOpen, setModalIsOpen] = useState(false);

const handleModalOpen = () =>{
  setModalIsOpen(true)
}

const handleCloseModal = (e) =>{
  if (e.currentTarget === e.target){
    setModalIsOpen(false)
  }
  
}
  const GlobalStyle = createGlobalStyle`
  body{
    background-color:${props => props.theme.colors.softGray};
    font-family: 'Roboto', sans-serif;
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
      <MyContext.Provider value={{ handleModalOpen, modalIsOpen, handleCloseModal, setModalIsOpen }}>
        <GlobalStyle />
        <Container>
          <Header />
          <Nav />
          <Main />
          <Product />
        </Container>
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App
