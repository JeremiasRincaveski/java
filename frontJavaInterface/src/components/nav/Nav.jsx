import * as React from 'react';
import { MyContext } from '../../context/MyContext';
import { StyledDiv } from '../styles/GlobalStyles';
import Button from '@mui/material/Button';


export const Nav = ({ getProdustList }) => {
    const { handleModalOpen } = React.useContext(MyContext);
    return (
        <>
            <StyledDiv>
                <Button
                    variant="contained"
                    onClick={handleModalOpen}
                    color="success"
                >Adicionar Produto
                </Button>

                <Button
                    variant="contained"
                    onClick={getProdustList}
                >refresh
                </Button>
            </StyledDiv>
        </>
    )
}