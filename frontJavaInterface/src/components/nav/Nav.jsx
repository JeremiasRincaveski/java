import React, { useContext } from 'react'
import styled from 'styled-components'
import {  AiOutlinePlusCircle } from "react-icons/ai";
import { MyContext } from '../../context/MyContext';
import { Button } from '../CustomButton/CustomButtom';

const StyledDiv = styled.div`
    width: calc(100% - 4rem);
    margin: 1rem 2rem;
    display: flex;
    display: flex;

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .2rem;
        }
`

export const Nav = ({ getProdustList, getaddItemFunciton }) => {
    const { handleModalOpen } = useContext(MyContext);
    return (

        <>
            <StyledDiv>
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
                    btnName='refresh'
                    onClick={getProdustList}
                />
                <Button
                    onClick={getaddItemFunciton}
                />
            </StyledDiv>
        </>
    )
}

