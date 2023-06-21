import * as React from 'react'
import styled from "styled-components"
import { MyContext } from "../../context/MyContext"
import { StyledModal } from '../styles/GlobalStyles'


const ModalWrapper = styled.div`
    background-color: ${ props => props.theme.colors.softGray };
    box-shadow: 0 0.875rem 1.75rem rgb(31 50 81 / 25%), 0 0.625rem 0.625rem rgb(31 50 81 / 22%);
    height: 500px;
    width: min(700px, 90vw);
    z-index: 1000;
`

const StyledDiv = styled.div`
    align-items: center;
    background-color: rgba(7, 7, 7, 0.3);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`

export const Overlay = ({ children, closeModal }) => {
    const { handleCloseModal } = React.useContext(MyContext);
    return (
        <StyledDiv onClick={ handleCloseModal } closeModal={ closeModal }>
            { children }
        </StyledDiv>
    )
}

export const Modal = ({ children, isOpen=false }) => {
    return (
        <>
            {isOpen && (
                <Overlay>
                    <ModalWrapper className={ isOpen ? 'modalOn' : '' }>
                        { children }
                    </ModalWrapper>
                </Overlay>
            )}
        </>
    );
};


export const DropdownModal = ({ isOpen, children }) => {
  return (
        <>
            { isOpen && (
                <StyledModal className={ isOpen ? 'modalOn' : '' }>
                    { children }
                </StyledModal>
            )}
        </>
    );
};
