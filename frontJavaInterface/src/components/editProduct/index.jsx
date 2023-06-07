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

  const handleSubmit = () => {
    const novoItem = {
      cod: inputValues.cod,
      nome: inputValues.nome,
      valor: inputValues.valor,
      estoque: inputValues.estoque,
      dataCadastro: inputValues.dataCadastro,
    };

    api.put(`/produtc/${itemSelected}`, novoItem)
      .then((response) => {
        console.log('Item criado com sucesso:', response.data);
      })
      .catch((error) => {
        alert('Erro ao criar o item:', error);
      });

    setInputValues({
      id: '',
      name: '',
      price: '',
      stock: '',
      dataCadastro: '',
    });
  }

  return (
    <Modal isOpen={editItemModal}>
    <ContentForm onSubmit={handleSubmit}>
      <Box>
          <TextField value={inputValues.id}  label="código"  name={'id'} variant="filled" onChange={handleInputChange} type={'number'} />
          <TextField  label="nome"  name={'name'} variant="filled" onChange={handleInputChange} type={'text'} value={inputValues.name} />
          <TextField  label="valor"  name={'price'} variant="filled" onChange={handleInputChange} type={'number'} value={inputValues.price} />
          <TextField  label="qt.estoque"  name={'stock'} variant="filled" onChange={handleInputChange} type={'number'} value={inputValues.stock} />
          <TextField  label="data de cadastro"  name={'dataCadastro'} variant="filled" onChange={handleInputChange} type={'text'} value={inputValues.dataCadastro} disabled/>
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
