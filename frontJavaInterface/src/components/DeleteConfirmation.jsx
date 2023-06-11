import * as React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material';
import { styled } from 'styled-components';
import { MyContext } from '../context/MyContext';

 const Modal = styled.div`
    background-color: ${(props) => props.theme.colors.softWhite};
    width: 550px;
    height: 180px;
    padding: 2rem;
    border-radius: .2rem;
    box-shadow: 0 0 1.75rem rgb(31 50 81 / 25%), 0 0.525rem 0.625rem rgb(31 50 81 / 12%);
    position: absolute;
    z-index: 100;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    #confirm{
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 1rem;
    }

    #cancel{
        position: absolute;
        right: 100px;
        bottom: 0;
        margin: 1rem;
    }
`

export const Overlay = styled.div`
    background-color: rgba(7, 7, 7, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DeleteConfirmation = ({ isOpen=false, getDeleteFunction }) => {
    const { setOpen } = React.useContext(MyContext);
    return (
        <>
            {isOpen && (
                <Overlay
                    onClick={()=>setOpen(false)}
                    
                >
                    <Modal
                        onClick={((event) => event.stopPropagation())}
                    >
                        <Typography variant="h6" component="h6" color={'primary'} fontWeight={500}>
                            Tem certeza que gostaria de excluir esse item?
                            <Divider variant="fullWidth" color={'#3687d8'} sx={{mt: 1}} />

                        </Typography>
                      <Box>
                      <Button 
                            variant="text"
                            id='confirm'
                            onClick={()=> {
                                getDeleteFunction()
                                setOpen(false)
                            }}
                        >
                            confirm
                        </Button>
                        <Button 
                            variant="text"
                            id='cancel'
                            onClick={()=>setOpen(false)}
                        >
                            cancel
                        </Button>
                      </Box>
                    </Modal>
                </Overlay>
            )}
        </>
    );
};
