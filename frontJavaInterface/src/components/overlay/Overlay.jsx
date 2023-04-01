import styled from "styled-components"

const StyledDiv = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(7, 7, 7, 0.8);
    position: absolute;
`

export const Modal = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}