import * as React from 'react';
import { ThemeProvider } from "styled-components"
import { Container } from "./components/container/Container"
import { Header } from "./components/header/Header"
import { Main } from "./components/main/Main"
import { MyContext } from "./context/MyContext"
import { theme } from './theme/theme'
import { GlobalStyle } from "./components/styles/GlobalStyles"
import SignIn from "./components/loginPage/Login"
import { Product } from './components/product/Product';

function App() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [editItemModal, setEditItemModal] = React.useState(false);
  const [item, setItem] = React.useState([]);
  const [error, setError] = React.useState(true);
  const [userName, setUserName] = React.useState('');
  const [password, setPassWord] = React.useState('');
  const [isLogged, setIsLogged] = React.useState(true);

  const handleInputs = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUserName(value)
    }
    else if (name === 'password') {
      setPassWord(value)
    }
  };
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
      <MyContext.Provider
        value={{
          handleModalOpen,
          handleCloseModal,
          editItemModal,
          setEditItemModal,
          item,
          setItem,
          modalIsOpen,
          handleInputs,
          userName,
          password,
          error
        }}>
        <GlobalStyle />
        {isLogged ?
          <Container>
            <Header />
            <Main />
            <Product />
          </Container>
          : <SignIn />}
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App
