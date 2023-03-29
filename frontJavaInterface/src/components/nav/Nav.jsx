import React from 'react'
import styled from 'styled-components'
import SvgIcon from '../../assets/SearchIcon.svg'
import { AiOutlineFileSearch } from "react-icons/ai";

const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
background-color: ${props => props.theme.colors.softWhite};
margin-bottom: 1rem;
box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    li{
        display: inline;
        list-style: none;
        padding: 0 2rem;
    }

`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    

    div:last-of-type{
        display: flex;
        width: 300px;
        button{
            background-color: ${props => props.theme.colors.softDark};
            color:  ${props => props.theme.colors.white};
            cursor: pointer;
        }
    }

    
`
const StyledButton = styled.button`
    width: 130px;
    height: 32px;
    border-radius: 5px;
    border: none;
    margin-right: 0.5rem;
`

const Button = ({color, btnName='CustumBtn', Icon}) =>{
    return <StyledButton backgroudColor={color} Icon={Icon}>
        {btnName}
    </StyledButton>
}

const StyledInput = styled.input`
background-color: transparent;
width:300px ;

`

const Input = () => {
    return <StyledInput />

}

const SearchIcon = ({ size, color  }) => {
    return <AiOutlineFileSearch size={size} color={color}/>
};

export const Nav = () => {
    return (
        <>
            <StyledNav>
                <ul>
                    <li>teste</li>
                </ul>
                <ul>
                    <li>teste2</li>
                    <li>teste2</li>
                </ul>
            </StyledNav>
            <StyledDiv>
                <div>
                    <Button />
                    <Button />
                    <Button />
                </div>
                <div>
                    <Input  />
                    <button>
                        <SearchIcon size="25px"  />
                    </button>
                </div>
            </StyledDiv>

        </>
    )
}

