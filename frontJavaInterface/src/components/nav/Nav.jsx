import React from 'react'
import styled from 'styled-components'
import { AiOutlineFileSearch, AiOutlinePlusCircle } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";

const StyledNav = styled.nav`
    width: 100%;

    display: flex;
    justify-content: space-between;
    background-color: transparent;
    margin-bottom: 1rem;
    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

        ul:first-of-type{
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 30px;
                position: relative;
                background-color: back;
                

                svg{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    margin-bottom: -0.8px;
                   
                }

                span{
                    margin-left: .2rem;
                }
            }
        }
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
    
    div:first-of-type{
        display: flex;

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .2rem;
        }
    }
    
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
    width: 160px;
    height: 36px;
    border-radius: 5px;
    border: none;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: ${props => props.bgColor};
    color: ${props => props.fColor};
    

`

const Button = ({ color, btnName = 'CustumBtn', Icon, size, bgColor, fColor }) => {
    return (
        <StyledButton bgColor={bgColor} fColor={fColor}>
            {Icon ? <Icon size={size} color={color} /> : <></>}
            {btnName}
        </StyledButton>
    )
}


const StyledInput = styled.input`
    background-color: ${props => props.theme.colors.SoftWhite};
    width:340px;
    outline: none;
    padding: 0 0 0 .5rem;

`

const Input = () => {
    return <StyledInput placeholder='Buscar' />

}

const SearchIcon = ({ size, color }) => {
    return <AiOutlineFileSearch size={size} color={color} />
};

const StyledList = styled.li`
    font-family: 'Bebas Neue', cursive;
    font-size: 25px;
    


`

export const Nav = () => {
    return (
        <>
            <StyledNav>
                <ul>
                    <StyledList>
                        <CiBoxList size={35}/>
                        <span>controle total</span>
                    </StyledList>
                </ul>
                <ul>
                    <li>teste2</li>
                    <li>teste2</li>
                </ul>
            </StyledNav>
            <StyledDiv>
                <div>
                    <Button btnName={'Adicionar Produto'} Icon={AiOutlinePlusCircle} size={25} fColor={'#fff'} color={'#fff'} bgColor={'#00a65a'} />
                    <Button />
                    <Button />
                </div>
                <div>
                    <Input />
                    <button>
                        <SearchIcon size="30px" />
                    </button>
                </div>
            </StyledDiv>

        </>
    )
}

