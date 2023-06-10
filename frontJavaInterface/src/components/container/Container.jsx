import * as React from 'react'
import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { Product } from '../product/Product'
import { EditProduct } from '../editProduct'
import { MyContext } from '../../context/MyContext'
import { styled } from 'styled-components'

const StyledContainer = styled.main`
  height: 100vh;
  box-sizing: border-box;
`
export const Container = () => {
  const { setIsLoggingOut,isLogginOut } = React.useContext(MyContext);

  return (
    <StyledContainer onClick={() => setIsLoggingOut(false)}>
      <Header />
      <Main />
      <Product />
      <EditProduct />
    </StyledContainer>
  )
}


