import { useContext, useState } from 'react'
import { Modal } from '../modal/Modal'
import { MyContext } from '../../context/MyContext'
import { ContentForm } from '../styles/GlobalStyles'
import Button from '@mui/material/Button';
import { api } from '../../services/api'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';


export const Product = () => {
    const [cod, setCod] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');
    const { modalIsOpen } = useContext(MyContext);
    const disabled = cod && nome && valor ;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'cod') {
            setCod(value);
        } else if (name === 'nome') {
            setNome(value);
        } else if (name === 'valor') {
            setValor(value);
        } else if (name === 'estoque') {
            setEstoque(value);        } 
    };

    const handleSubmit = () => {
        // Criação do objeto com os dados coletados do formulário
        const novoItem = {
            cod : cod,
            name: nome,
            price: valor,
            stock: estoque,
        };

        // Envio da solicitação POST para a API
         api.post('/product', novoItem)
            .then((response) => {
                console.log('Item criado com sucesso:', response.data);
            })
            .catch((error) => {
                alert('Erro ao criar o item:', error);
            });

        // Limpar os campos de entrada após o envio do formulário
        setCod('');
        setNome('');
        setValor('');
        setEstoque('');
        setDataCadastro('');
    };

    return (
        <Modal>
            <ContentForm onSubmit={handleSubmit}>
                <Box>
                    <TextField  label="código"  name={'cod'} variant="filled" onChange={handleInputChange} type={'number'} value={cod} />
                    <TextField  label="nome"  name={'nome'} variant="filled" onChange={handleInputChange} type={'text'} value={nome} />
                    <TextField  label="valor"  name={'valor'} variant="filled" onChange={handleInputChange} type={'text'} value={valor} />
                    <TextField  label="qt.estoque"  name={'estoque'} variant="filled" onChange={handleInputChange} type={'number'} value={estoque} />
                    <TextField  label="data de cadastro"  name={'dataCadastro'} variant="filled" onChange={handleInputChange} type={'number'} value={dataCadastro} disabled/>
                </Box>
                <Button
                    variant="contained"
                    type={'submit'}
                    disabled={!disabled}
                >
                    Enviar
                </Button>
            </ContentForm>
        </Modal>
    )
}
