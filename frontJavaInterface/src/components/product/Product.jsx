import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { api } from '../../services/api'
import { Content, ContentForm } from '../styles/GlobalStyles'
import { Modal } from '../modal/Modal'
import { MyContext } from '../../context/MyContext'
import 'react-toastify/dist/ReactToastify.css';

export const Product = ({ }) => {
    const [dataCadastro, setDataCadastro] = React.useState('');
    const [estoque, setEstoque] = React.useState('');
    const [cod, setCod] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [valor, setValor] = React.useState('');
    const { modalIsOpen, setModalIsOpen, getList } = React.useContext(MyContext);
    const disabled = cod && nome && valor;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'cod') {
            setCod(value);
        } else if (name === 'nome') {
            setNome(value);
        } else if (name === 'valor') {
            setValor(value);
        } else if (name === 'estoque') {
            setEstoque(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Criação do objeto com os dados coletados do formulário
        const novoItem = {
            id: cod,
            name: nome,
            price: valor,
            stock: estoque,
        };

        // Envio da solicitação POST para a API
        api.post('/product', novoItem)
        .then(() => {
            toast.success('Item Adicionado com Sucesso!');
        })
        .catch((error) => {
            toast.error('Erro ao criar o item:', error);
        });
        // Limpar os campos de entrada após o envio do formulário

        getList();
        setCod('');
        setDataCadastro('');
        setEstoque('');
        setModalIsOpen(false);
        setNome('');
        setValor('');
    };

    return (
        <Content>
            <Modal 
                isOpen={ modalIsOpen }
            >
                <ContentForm onSubmit={ handleSubmit }>
                    <Box>
                        <TextField label="código" name={ 'cod' } variant="filled" onChange={ handleInputChange } type={ 'number' } value={ cod } />
                        <TextField label="nome" name={ 'nome' } variant="filled" onChange={ handleInputChange } type={ 'text' } value={ nome } />
                        <TextField label="valor" name={ 'valor' } variant="filled" onChange={ handleInputChange } type={ 'text' } value={ valor } />
                        <TextField label="qt.estoque" name={ 'estoque' } variant="filled" onChange={ handleInputChange } type={ 'number' } value={ estoque } />
                        <TextField label="data de cadastro" name={ 'dataCadastro' } variant="filled" onChange={ handleInputChange } type={' number' } value={ dataCadastro } disabled />
                    </Box>

                    <Button
                        disabled={ !disabled }
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
        </Content>
    )
}