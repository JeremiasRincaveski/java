import  * as React from 'react';
import { api } from '../../services/api';
import { MyContext } from '../../context/MyContext';
import { Modal } from '../modal/Modal.jsx'
import { Box, Button, TextField } from '@mui/material';
import { ContentForm } from '../styles/GlobalStyles'

export const EditProduct = () => {

  const {editItemModal, itemSelected } = React.useContext(MyContext);
  const [inputValues, setInputValues] = React.useState({});

  React.useEffect(() => {
    api.get(`/product/${itemSelected}`)
    .then((resposta) => {
      setInputValues(resposta.data)
      console.log('Item selecionado:', resposta.data);
    })
  }, [editItemModal]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log('inputValues:', inputValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoItem = {
      id: inputValues.id,
      name: inputValues.name,
      price: inputValues.price,
      stock: inputValues.stock,
    };

    api.put(`/product`, novoItem)
      .then((response) => {
        console.log('Item editado com sucesso:', response.data);
      })
      .catch((error) => {
        console.log('Erro ao editar o item:', error);
      });

    setInputValues({
      id: '',
      name: '',
      price: '',
      stock: '',
      date: '',
    });
  }

  return (
    <Modal isOpen={editItemModal}>
    <ContentForm onSubmit={handleSubmit}>
      <Box>
          <TextField value={inputValues.id}  label="código"  name={'id'} variant="filled" onChange={handleInputChange} type={'number'} />
          <TextField value={inputValues.name} label="nome"  name={'name'} variant="filled" onChange={handleInputChange} type={'text'}  />
          <TextField value={inputValues.price} label="valor"  name={'price'} variant="filled" onChange={handleInputChange} type={'number'}  />
          <TextField value={inputValues.stock} label="qt.estoque"  name={'stock'} variant="filled" onChange={handleInputChange} type={'number'}  />
          <TextField value={inputValues.date} label="data de cadastro"  name={'date'} variant="filled" type={'text'}  disabled/>
      </Box>
      <Button
          variant="contained"
          type={'submit'}
      >
          Enviar
      </Button>
  </ContentForm>                 
   </Modal>
    
  );
};
