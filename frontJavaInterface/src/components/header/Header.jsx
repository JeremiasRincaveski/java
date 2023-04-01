import styled from "styled-components";
import { CiBoxList } from "react-icons/ci";


const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.softDark};
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;

    li{
        display: flex;
        align-items: center;
        justify-content:center;
        padding: 0 2rem;
    }
`
const StyledList = styled.li`
    font-family: 'Bebas Neue', cursive;
    font-size: 25px;
`

export const LogoSvg = () => {
    return (
        <StyledList>
            <CiBoxList size={35} />
            <span>controle total</span>
        </StyledList>)
}

export const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <LogoSvg />
                </li>

            </ul>
            <ul>
                <li>teste2</li>
                <li>teste2</li>
            </ul>
        </StyledHeader>
    )
}