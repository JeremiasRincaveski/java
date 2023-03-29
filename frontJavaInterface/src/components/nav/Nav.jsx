import React from 'react'
import styled from 'styled-components'
import { AiOutlineFileSearch } from "react-icons/ai";

const StyledNav = styled.nav`
    width: 100%;

    display: flex;
    justify-content: space-between;
    background-color: transparent;
    margin-bottom: 1rem;
    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

        li{
            display: inline;
            list-style: none;
            padding: 0 2rem;
        }

`

const StyledDiv = styled.div`
    width: calc(100% - 4rem);
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;

    div:last-of-type{
        display: flex;
        width: 340px;
        height: 40px;


        button{
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme.colors.softDark};
            color:  ${props => props.theme.colors.white};
            cursor: pointer;
            display: flex;
        }
    }
`
const StyledButton = styled.button`
    width: 130px;
    height: 32px;
    border-radius: 5px;
    border: none;
    margin-right: 0.5rem;
    cursor: pointer;
`

const Button = ({color, btnName='CustumBtn', Icon}) =>{
    return <StyledButton backgroudColor={color} Icon={Icon}>
        {btnName}
    </StyledButton>
}

const StyledInput = styled.input`
    background-color: ${props => props.theme.colors.SoftWhite};
    width:340px;
    outline: none;

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
                        <SearchIcon size="30px"  />
                    </button>
                </div>
            </StyledDiv>

        </>
    )
}

