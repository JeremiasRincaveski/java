import React, { useContext } from 'react'
import styled from 'styled-components'
import { Modal } from '../modal/Modal'
import { MyContext } from '../../context/MyContext'

const ContentForm = styled.form`
    text-transform: uppercase;
    margin: 1rem, 2rem;
`
const StyledInput = styled.input`
    background-color: ${props => props.theme.colors.softGray};
    border-radius: 3px;
    height: 1rem;
    padding: .4rem;
    border: 1px solid ${props => props.theme.colors.softGray};
    input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
             display: none;
            -webkit-appearance: none;
            margin: 0;
            }

        input[type=number] {
            -moz-appearance: textfield;
        }
`

const Input = ({type, placeholder}) => {
    return (
        <StyledInput type='number'>
            
        </StyledInput>
    )
}

export const Product = () => {
    const { modalIsOpen } = useContext(MyContext);
    return (
        <Modal isOpen={modalIsOpen}>
            <ContentForm>
                <fieldset>
                <legend>localize um produto abaixo</legend>
                <Input/>
                </fieldset>

            </ContentForm>
        </Modal>
    )
}
