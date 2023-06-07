import React from 'react'
import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { Product } from '../product/Product'
import { EditProduct } from '../editProduct'

export const Container = () => {
  return (
    <>
      <Header />
      <Main />
      <Product />
      <EditProduct />
    </>
  )
}


