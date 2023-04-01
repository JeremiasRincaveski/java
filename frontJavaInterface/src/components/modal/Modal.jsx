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
`

export const Modal = () => {
    return (
        <Overlay>
            <StyledDiv>
                <p>jeremias</p>
            </StyledDiv>
        </Overlay>        
    )
}