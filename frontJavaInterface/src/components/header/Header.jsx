import styled from "styled-components";
import { CiBoxList } from "react-icons/ci";


const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.softDark};
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    position: relative;
    
        li{
            padding: 0 2rem;
            display:flex;
            align-items: center;
        }

        ul:last-of-type{
            li{
                display: inline;
            }
        }
    
`
const StyledList = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-size: 35px;
    display: flex;
   

    span{
       top: 0;
       position: absolute;
       margin-top:16px;
       left: 0;
       margin-left:100px;

    }
`
const SvgIcon = () =>{
    return(
        <>
            <StyledList>
                <CiBoxList size={35} />
                <span>controle total</span>
            </StyledList>
        </>
    )
}


export const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <SvgIcon />
                </li>

            </ul>
            <ul>
                <li>teste2</li>
                <li>teste2</li>
            </ul>
        </StyledHeader>
    )
}