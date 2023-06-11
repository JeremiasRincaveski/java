import * as React from 'react';
import { api } from '../../services/api';
import { MyContext } from '../../context/MyContext';
import { Modal } from '../modal/Modal.jsx'
import { Box, Button, TextField } from '@mui/material';
import { Content, ContentForm } from '../styles/GlobalStyles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditProduct = () => {

  const { editItemModal, itemSelected, setEditItemModal,getList } = React.useContext(MyContext);
  const [inputValues, setInputValues] = React.useState({});

  React.useEffect(() => {

    api.get(`/product/${itemSelected}`)
      .then((resposta) => {
        setInputValues(resposta.data)
      })
  }, [editItemModal]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoItem = {
      id: inputValues.id,
      name: inputValues.name,
      price: inputValues.price,
      stock: inputValues.stock,
    };

    api.put(`/product`, novoItem)
      .then(() => {
        toast.success('Item Editado com Sucesso!')
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
    getList();
    setEditItemModal(false);
  }

  return (
    <Content>
      <Modal isOpen={editItemModal}>
        <ContentForm onSubmit={handleSubmit}>
          <Box>
            <TextField value={inputValues.id} label="código" name={'id'} variant="filled" onChange={handleInputChange} type={'number'} />
            <TextField value={inputValues.name} label="nome" name={'name'} variant="filled" onChange={handleInputChange} type={'text'} />
            <TextField value={inputValues.price} label="valor" name={'price'} variant="filled" onChange={handleInputChange} type={'number'} />
            <TextField value={inputValues.stock} label="qt.estoque" name={'stock'} variant="filled" onChange={handleInputChange} type={'number'} />
            <TextField value={inputValues.date} label="data de cadastro" name={'date'} variant="filled" type={'text'} disabled />
          </Box>
          <Button
            variant="contained"
            type={'submit'}
          >
            Enviar
          </Button>
        </ContentForm>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </Content>

  );
};
