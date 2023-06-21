import * as React from 'react';
import { MyContext } from '../../context/MyContext';
import { StyledDiv } from '../styles/GlobalStyles';
import Button from '@mui/material/Button';


export const Nav = ({ getProdustList, children }) => {
    const { handleModalOpen } = React.useContext(MyContext);
    
    return (
        <>
            <StyledDiv>
                <Button
                    variant="contained"
                    onClick={ handleModalOpen }
                    color="success"
                    sx={{ textTransform: "capitalize" }}
                >
                adicionar produto
                </Button>
                <Button
                    variant="contained"
                    onClick={ getProdustList }
                    sx={{ textTransform: "capitalize" }}
                >
                atualizar
                </Button>
                { children }
            </StyledDiv>
        </>
    )
}