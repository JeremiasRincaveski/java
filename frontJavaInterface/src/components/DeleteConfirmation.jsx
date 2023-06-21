import * as React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material';
import { styled } from 'styled-components';
import { MyContext } from '../context/MyContext';

const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.softWhite};
  border-radius: .2rem;
  box-shadow: 0 0 1.75rem rgb(31 50 81 / 25%), 0 0.525rem 0.625rem rgb(31 50 81 / 12%);
  height: 180px;
  left:50%;
  padding: 2rem;
  position: absolute;
  top:50%;
  transform: translate(-50%, -50%);
  width: 550px;
  z-index: 100;
  
  #confirm{
    bottom: 0;
    margin: 1rem;
    position: absolute;
    right: 0;
  }

  #cancel{
    bottom: 0;
    margin: 1rem;
    position: absolute;
    right: 100px;
  }
`

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(7, 7, 7, 0.2);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

export const DeleteConfirmation = ({ isOpen = false, id, getDeleteFunction }) => {
  const { setOpen } = React.useContext(MyContext);
  return (
    <>
      { isOpen && (
        <Overlay onClick={ () => setOpen(false) }>
          <Modal onClick={ (event) => event.stopPropagation() }>
            <Typography variant="h6" component="h6" color="primary" fontWeight={ 500 }>
              Tem certeza que gostaria de excluir esse item?
              <Divider variant="fullWidth" color="#3687d8" sx={{ mt: 1 }} />
            </Typography>

            <Box>
              <Button
                variant="text"
                id="confirm"
                onClick={ () => {
                  getDeleteFunction(id);
                  setOpen(false);
                }}
              >
                Confirmar
              </Button>

              <Button variant="text" id="cancel" onClick={ () => setOpen(false) }>
                Cancelar
              </Button>
            </Box>
          </Modal>
        </Overlay>
      )}
    </>
  );
};