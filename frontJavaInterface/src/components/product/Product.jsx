import React, { useContext } from 'react'
import styled from 'styled-components'
import { Modal } from '../modal/Modal'
import { MyContext } from '../../context/MyContext'


const ContentForm = styled.form`
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    margin: 1rem, 2rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
       
    }
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: .5rem 0;
    height: 2rem;
    flex: 0 0 17%;

    label {
        width: 200px;
    }

    input {
        align-self: flex-end;
        border: none;
        border-radius: 5px;
        height: 100%;
        padding: .2rem;
        text-transform: uppercase;
        flex: 1 0 150px;
        outline: none;
        box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

    }
`

const Botao = styled.button`
    width: 430px;
    height: 40px; 
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: black;
    color: white;
    align-self: flex-end;
    text-transform: uppercase;
`

const Div = ({ type = 'text', label, disabled }) => {
    return (
        <StyledDiv>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={type}  disabled={disabled}/>
        </StyledDiv>
    )
}

export const Product = () => {
    const { modalIsOpen } = useContext(MyContext);
    return (
        <Modal isOpen={modalIsOpen} id="modal">
            <ContentForm>
                    <div>
                        <Div label={'código'} type='number' />
                        <Div label={'nome'} />
                        <Div label={'valor unitário'} type='number' />
                        <Div label={' qt. estoque'} disabled={true} />
                        <Div label={'data de cadastro'} type='number' disabled={true}/>
                    </div>
                    <Botao>Adicionar produto</Botao>
            </ContentForm>
        </Modal>
    )
}
