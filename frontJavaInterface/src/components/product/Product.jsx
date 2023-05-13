import React, { useContext } from 'react'
import styled from 'styled-components'
import { Modal } from '../modal/Modal'
import { MyContext } from '../../context/MyContext'

const ContentForm = styled.form`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.softGray};
    text-transform: uppercase;
    margin: 1rem, 2rem;
    padding: 1rem;
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
    background-color: ${props => props.theme.colors.softGray};
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.colors.softGray};
    height: 2rem;
    flex: 0 0 17%;

    label {
        width: 200px;
    }

    input {
        align-self: flex-end;
        border: none;
        border-radius: 5px;
        background-color: gray;
        height: 100%;
        padding: .2rem;
        text-transform: uppercase;
        flex: 1 0 150px;
    }
`

const Botao = styled.button`
    width: 300px;
    height: 40px; 
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: black;
    color: white;
    align-self: flex-end;
    text-transform: uppercase;
`

const Div = ({ type = 'text', label }) => {
    return (
        <StyledDiv>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={type} />
        </StyledDiv>
    )
}

export const Product = () => {
    const { modalIsOpen } = useContext(MyContext);
    return (
        <Modal isOpen={modalIsOpen}>
            <ContentForm>
                    <div>
                        <Div label={'código'} />
                        <Div label={'quantidade'}/>
                        <Div label={'valor unitário'} />
                        <Div label={'desconto'} />
                        <Div label={'valor total'} />
                    </div>
                    <Botao>ajdsajnkda</Botao>
            </ContentForm>
        </Modal>
    )
}
