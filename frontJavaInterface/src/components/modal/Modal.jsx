import styled from "styled-components"
import { Overlay } from "../overlay/Overlay"


const StyledDiv = styled.div`
    height: 500px;
    width: 700px;
    background-color: blue;
    position: absolute;
    top:50%;
    left:50%;
    margin-top: calc((500px / 2) * -1);
    margin-left: calc((700px / 2) * -1);
    z-index: 1000;
`

const ModalWrapper = styled.div`
    background-color: ${props => props.theme.colors.white};

`

export const Modal = ( { children, isOpen=false } ) => {

    return(
        <>
            {isOpen &&(
                <Overlay>
                    <StyledDiv>
                        {children}
                    </StyledDiv>
                </Overlay>        
            )}
        </>
    )
}
 
