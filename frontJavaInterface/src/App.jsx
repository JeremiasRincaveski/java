import * as React from 'react';
import { ThemeProvider } from "styled-components"
import { Container } from "./components/container/Container"
import { MyContext } from "./context/MyContext"
import { theme } from './theme/theme'
import { GlobalStyle } from "./components/styles/GlobalStyles"
import SignIn from "./components/loginPage/Login"
import { log } from 'react-modal/lib/helpers/ariaAppHider';

function App() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [editItemModal, setEditItemModal] = React.useState(false);
  const [item, setItem] = React.useState([]);
  const [itemSelected, setItemSelected] = React.useState('')
  const [userError, setUserError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [password, setPassWord] = React.useState('');
  const [isLogged, setIsLogged] = React.useState(false);
  const [savePassword, setSavePassword] = React.useState(false);


  const handleLogin = () =>{

    if(savePassword){
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);
    }
    if (userName === 'user123' && password === 'password123') {
      setIsLogged(true);
      setUserError(false);
      setPasswordError(false);
    } else {
      setUserError(userName !== 'user123');
      setPasswordError(password !== 'password123');
    }
  };

  React.useEffect(()=>{
    const savedUser = localStorage.getItem('userName');
    const savedPassword = localStorage.getItem('password');

    if(savedUser && savedPassword){
      setUserName(savedUser);
      setPassWord(savedPassword);
      setSavePassword(true);
    }
  },[])

  const handleInputs = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUserName(value)
    }
    else if (name === 'password') {
      setPassWord(value)
    }
  };

  const handleCheckbox = (event) => {
    setSavePassword(event.target.checked);
  }
  const handleModalOpen = () => {
    setModalIsOpen(true);
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
          itemSelected,
          setItemSelected,
          modalIsOpen,
          handleInputs,
          userName,
          password,
          userError,
          passwordError,
          handleLogin,
          setIsLogged,
          handleCheckbox
        }}>
        <GlobalStyle />
        {isLogged ?
          <Container />
          : <SignIn />}
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App