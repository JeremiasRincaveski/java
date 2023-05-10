import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineFileSearch, AiOutlinePlusCircle } from "react-icons/ai";
import { MyContext } from '../../context/MyContext';

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
    width: ${props => props.wSize || '150px'};
    height: ${props => props.hSize || '36px'}; 
    border-radius: ${props => props.bRadius || '5px'};
    border: none;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: ${props => props.bgColor};
    color: ${props => props.fColor};
    

`

const Button = ({ color, btnName = 'CustomBtn', Icon, size, bgColor, fColor, onClick, wSize, bRadius, hSize }) => {
    return (
        <StyledButton bgColor={bgColor} fColor={fColor} onClick={onClick} wSize={wSize} bRadius={bRadius} hSize={hSize}>
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
    return (
        <>
            <StyledInput placeholder='Buscar' />
            <Button
                Icon={AiOutlineFileSearch}
                btnName=''
                size={25}
                wSize={'60px'}
                bRadius={'0'}
                hSize={'100%'}
            />
        </>
    )


}

export const Nav = ( {getProdustList} ) => {
    const { handleModalOpen } = useContext(MyContext);
    return (
        <>
            <StyledNav>
                {/* <ul>
                </ul>
                <ul>
                    <li>teste2</li>
                    <li>teste2</li>
                </ul> */}
            </StyledNav>
            <StyledDiv>
                <div>
                    <Button
                        btnName={'Adicionar Produto'}
                        Icon={AiOutlinePlusCircle}
                        size={25}
                        fColor={'#fff'}
                        color={'#fff'}
                        bgColor={'#00a65a'}
                        onClick={handleModalOpen}
                    />
                    <Button 
                        btnName='Get list of all products'
                        onClick={getProdustList}
                    />
                    <Button />
                </div>
                <div>
                    <Input />
                </div>
            </StyledDiv>

        </>
    )
}

