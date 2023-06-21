import * as React from 'react'
import * as S from '../styles/GlobalStyles'
import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { MyContext } from '../../context/MyContext'
import { Product } from '../product/Product'
import { EditProduct } from '../editProduct'

export const Container = () => {
  const { setIsLoggingOut } = React.useContext(MyContext);

  return (
    <S.StyledContainer onClick={() => setIsLoggingOut(false)}>
      <Header />
      <Main />
      <Product />
      <EditProduct />
    </S.StyledContainer>
  )
}


