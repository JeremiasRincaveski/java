import * as React from 'react'
import styled from "styled-components"
import { MyContext } from "../../context/MyContext"
import { StyledModal } from '../styles/GlobalStyles'


const ModalWrapper = styled.div`
    height: 500px;
    width: 700px;
    position: absolute;
    top:50%;
    left:50%;
    margin-top: calc((500px / 2) * -1);
    margin-left: calc((700px / 2) * -1);
    z-index: 1000;
    background-color: ${props => props.theme.colors.softGray};
    box-shadow: 0 0.875rem 1.75rem rgb(31 50 81 / 25%), 0 0.625rem 0.625rem rgb(31 50 81 / 22%);
`

const StyledDiv = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(7, 7, 7, 0.3);
    position: absolute;
 

`

export const Overlay = ({ children, closeModal }) => {
    const { handleCloseModal } = React.useContext(MyContext);
    return (
        <StyledDiv onClick={handleCloseModal} closeModal={closeModal}>
            {children}
        </StyledDiv>
    )
}

export const Modal = ({ children, isOpen=false }) => {
    return (
        <>
            {isOpen && (
                <Overlay>
                    <ModalWrapper className={ isOpen ? 'modalOn' : ''}>
                        {children}
                    </ModalWrapper>
                </Overlay>
            )}
        </>
    );
};


export const DropdownModal = ( {isOpen, children} ) => {
  return (
        <>
            {isOpen && (
                <StyledModal className={ isOpen ? 'modalOn' : ''}>
                    {children}
                </StyledModal>
            )}
        </>
    );
};
