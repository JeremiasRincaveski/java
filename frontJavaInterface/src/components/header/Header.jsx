import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.softDark};
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;

    li{
        display: inline;
        padding: 0 2rem;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>teste</li>

            </ul>
            <ul>
                <li>teste2</li>
                <li>teste2</li>
            </ul>
        </StyledHeader>
    )
}