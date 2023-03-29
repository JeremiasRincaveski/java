import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.softDark};
    color: ${props => props.theme.colors.white};
`
const StyledDiv = styled.div`



`

export const Header = () => {
    return (
        <StyledHeader>
            <StyledDiv>
                teste 1
            </StyledDiv>
        </StyledHeader>
    )
}