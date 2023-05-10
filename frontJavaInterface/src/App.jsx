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
  const [editItemModal, setEditItemModal] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true)
    setEditItemModal(true)
  }

  const handleCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      setModalIsOpen(false)
      setEditItemModal(false)
    }

  }
  const GlobalStyle = createGlobalStyle`
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

  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider value={{ handleModalOpen, modalIsOpen, handleCloseModal, editItemModal, setEditItemModal }}>
        <GlobalStyle />
        <Container>
          <Header />
          <Main />
          <Product />
        </Container>
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App
