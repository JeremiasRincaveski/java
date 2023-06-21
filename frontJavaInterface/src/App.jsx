import * as React from 'react';
import * as S from "./components/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { api } from './services/api';
import { Container } from "./components/container/Container"
import SignIn from "./components/loginPage/Login"
import { MyContext } from "./context/MyContext"
import { theme } from './theme/theme'
import { useLocalStorage } from '../hooks/useLocalStorage';

function App() {
  const [editItemModal, setEditItemModal] = React.useState(false);
  const [item, setItem] = React.useState([]);
  const [itemSelected, setItemSelected] = React.useState('')
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false);
  const [isLogginOut, setIsLoggingOut] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [password, setPassWord] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [savePassword, setSavePassword] = React.useState(false);
  const [userError, setUserError] = React.useState(false);
  const [userName, setUserName] = React.useState('');

  const getList = () => {
    setIsLoading(true);
    setTimeout(() => {
      (api).get('/product').then(response => {
        setItem(response.data);

      });
      setIsLoading(false);
    }, 2000);
  };

  const handleCheckbox = (event) => {
    setSavePassword(event.target.checked);
  }

  const handleCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      setModalIsOpen(false)
      setEditItemModal(false)
    }
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUserName(value)
    }
    else if (name === 'password') {
      setPassWord(value)
    }
  };

  const handleLogin = () => {
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

  const handleLogout = (event) => {
    event.stopPropagation();
    setIsLoggingOut(!isLogginOut);
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  React.useEffect(()=>{
    const savedPassword = localStorage.getItem('password');
    const savedUser = localStorage.getItem('userName');

    if(savedUser && savedPassword){
      setUserName(savedUser);
      setSavePassword(true);
      setPassWord(savedPassword);
    }
  },[])

  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider
        value={{
          editItemModal,
          getList,
          handleCheckbox,
          handleCloseModal,
          handleInputs,
          handleLogin,
          handleLogout,
          handleModalOpen,
          item,
          itemSelected,
          isLoading,
          isLogginOut,
          modalIsOpen,
          open,
          password,
          passwordError,
          setItem,
          setItemSelected,
          setIsLogged,
          setIsLoading,
          setIsLoggingOut,
          setModalIsOpen,
          setEditItemModal,
          setOpen,
          savePassword,
          userName,
          userError,
        }}
      >
        <S.GlobalStyle />

        { isLogged ?
          <Container />
          : 
          <SignIn />
        }
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App;