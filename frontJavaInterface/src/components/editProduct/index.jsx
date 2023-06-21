import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Button, TextField } from '@mui/material';
import { Content, ContentForm } from '../styles/GlobalStyles'
import { Modal } from '../modal/Modal.jsx'
import { MyContext } from '../../context/MyContext';
import { api } from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

export const EditProduct = () => {
  const { editItemModal, getList, itemSelected, setEditItemModal } = React.useContext(MyContext);
  const [inputValues, setInputValues] = React.useState({});

  React.useEffect(() => {
    api.get(`/product/${ itemSelected }`)
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
      date: '',
      id: '',
      name: '',
      price: '',
      stock: '',
    });

    getList();
    setEditItemModal(false);
  }

  return (
    <Content>
      <Modal isOpen={ editItemModal }>
        <ContentForm onSubmit={ handleSubmit }>
          <Box>
            <TextField value={ inputValues.id } label="código" name={ 'id' } variant="filled" onChange={ handleInputChange } type={ 'number' } />
            <TextField value={ inputValues.name } label="nome" name={ 'name' } variant="filled" onChange={ handleInputChange } type={ 'text' } />
            <TextField value={ inputValues.price } label="valor" name={ 'price' } variant="filled" onChange={ handleInputChange } type={ 'number' } />
            <TextField value={ inputValues.stock } label="qt.estoque" name={ 'stock' } variant="filled" onChange={ handleInputChange } type={ 'number' } />
            <TextField value={ inputValues.date } label="data de cadastro" name={ 'date' } variant="filled" type={ 'text' } disabled />
          </Box>

          <Button
            type={ 'submit' }
            variant="contained"
          >
            Enviar
          </Button>
        </ContentForm>
      </Modal>

      <ToastContainer
        autoClose={ 5000 }
        closeOnClick
        draggable
        hideProgressBar={ false }
        newestOnTop={ false }
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={ false }
        theme="light"
      />
      {/* posso excluir ?? tem no product.jsx linha 99
      <ToastContainer /> */}
    </Content>
  );
};