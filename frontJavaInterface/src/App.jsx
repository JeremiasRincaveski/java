import { useState } from "react"
import {  ThemeProvider } from "styled-components"
import { Container } from "./components/container/Container"
import { Header } from "./components/header/Header"
import { Main } from "./components/main/Main"
import { MyContext } from "./context/MyContext"
import { theme } from './theme/theme'
import { Product } from "./components/product/Product"
import { GlobalStyle } from "./components/styles/GlobalStyles"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editItemModal, setEditItemModal] = useState(false);
  const [item, setItem] = useState([]);
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
  
  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider value={{ handleModalOpen, modalIsOpen, handleCloseModal, editItemModal, setEditItemModal, item, setItem }}>
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
