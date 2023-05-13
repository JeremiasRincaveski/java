import styled from "styled-components"
import { Overlay } from "../overlay/Overlay"


const ModalWrapper = styled.div`
    height: 500px;
    width: 700px;
    border-radius: 10px;
    position: absolute;
    top:50%;
    left:50%;
    margin-top: calc((500px / 2) * -1);
    margin-left: calc((700px / 2) * -1);
    z-index: 1000;
    background-color: ${props => props.theme.colors.softGray};
    box-shadow: 0 0.875rem 1.75rem rgb(31 50 81 / 25%), 0 0.625rem 0.625rem rgb(31 50 81 / 22%);
`

export const Modal = ( { children, isOpen=false } ) => {
    return(
        <>
            {isOpen &&(
                <Overlay>
                    <ModalWrapper className={ isOpen ? 'ModalOn' : ''}>
                        {children}
                    </ModalWrapper>
                </Overlay>        
            )}
        </>
    )
}
 
// .modalOn {
//     animation-name: modalOn;
//     animation-duration: .5s;
// }

// @keyframes modalOn {
//     from {
//         opacity: 0;
//         transform: translateY(-70%);
//     }
//     to {
//         opacity: 0.9;
//         transform: translateY(0);
//     }
// }
