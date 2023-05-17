import React, { useContext, useState } from 'react'
import { Modal } from '../modal/Modal'
import { MyContext } from '../../context/MyContext'
import { ContentForm, StyledInput } from '../styles/GlobalStyles'
import { Button } from '../CustomButton/CustomButtom'
import axios from 'axios'
import { api } from '../../services/api'

const Input = ({ type = 'text', label, disabled, onChange, name, value }) => {
    return (
        <StyledInput>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={type} disabled={disabled} onChange={onChange} name={name} value={value} />
        </StyledInput>
    )
}

export const Product = () => {
    const [cod, setCod] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');
    const { modalIsOpen } = useContext(MyContext);

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
        } else if (name === 'dataCadastro') {
            setDataCadastro(value);
        }

    };

    const disabled =  cod && nome && valor && estoque && dataCadastro;

    const handleSubmit = () => {
        // Criação do objeto com os dados coletados do formulário
        const novoItem = {
            cod,
            nome,
            valor,
            estoque,
            dataCadastro,
        };

        // Envio da solicitação POST para a API
        api.post('/itens', novoItem)
            .then((response) => {
                console.log('Item criado com sucesso:', response.data);
                // Realize qualquer ação adicional necessária após a criação do item no banco de dados
            })
            .catch((error) => {
                console.error('Erro ao criar o item:', error);
                // Lide com o erro de forma apropriada
            });

        // Limpar os campos de entrada após o envio do formulário
        setCod('');
        setNome('');
        setValor('');
        setEstoque('');
        setDataCadastro('');
    };

    return (
        <Modal isOpen={modalIsOpen}>
            <ContentForm >
                <div>
                    <Input label={'código'} name={'cod'} value={cod} type='number' onChange={handleInputChange} />
                    <Input label={'nome'} name={'nome'} value={nome} onChange={handleInputChange} />
                    <Input label={'valor unitário'} name={'valor'} value={valor} onChange={handleInputChange} />
                    <Input label={' qt. estoque'} name={'estoque'} value={estoque} onChange={handleInputChange} />
                    <Input label={'data de cadastro'} name={'dataCadastro'} value={dataCadastro} onChange={handleInputChange} />
                </div>
                <Button
                    wSize={'430px'}
                    bgColor={'black'}
                    fColor={'white'}
                    style={{ alignSelf: 'flex-end' }}
                    type={'submit'}
                    onClick={handleSubmit}
                    disabled={!disabled}
                />
            </ContentForm>
        </Modal>
    )
}
