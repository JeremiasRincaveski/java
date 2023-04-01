import styled from "styled-components"
import { Overlay } from "../overlay/Overlay"

const StyledDiv = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    translate: translate(-50%, -50%);
    z-index: 1000;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalWrapper = styled.div`
    background-color: ${props => props.theme.colors.white};

`

export const Modal = ({ children, isOpen=false, onCloseModal }) => {
    return (
        <Overlay onclick={onCloseModal}>
            <StyledDiv>
                <ModalWrapper>
                    {children}
                </ModalWrapper>
            </StyledDiv>
        </Overlay>        
    )
}