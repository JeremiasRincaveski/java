import * as React from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { MenuItem, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import  * as S   from "../styles/GlobalStyles";
import { MyContext } from '../../context/MyContext';
import { styled } from 'styled-components';
import { DropdownModal } from "../modal/Modal";

export const StyledButtonLogOut = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
`

export const ButtonShowLogout = ({ Icon, size, onClick = () => {}, color, style }) => {
  return (<StyledButtonLogOut onClick={ onClick } type="button">{ Icon ? <Icon size={ size } color={ color } style={ style }/> : <></>} </StyledButtonLogOut>)
}

const myStyles = makeStyles((theme) => ({
  navBar: {
    justifyContent: 'space-between',
    height: '4rem',

    '& > div': {
      [theme.breakpoints.down(460)]: {
        '&:nth-of-type(1)': {
          display: 'none',
        },
      },
    },
  },
  modal:{
    [theme.breakpoints.down(600)]: {
      alignItems: 'center',
      display: 'flex',
      height: '30px',
    }
  }
}))

export const Header = () => {
  const { getList, handleLogout, isLogginOut, setIsLogged, userName } = React.useContext(MyContext);
  const classes = myStyles()

  return (
    <S.Content> 
      <AppBar position="static" >
        <Toolbar className={ classes.navBar }>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            onClick={ getList }
            size="large"
            sx={{ mr: 0 }}
          >
            <AssignmentIcon />
          </IconButton>
          <Typography
            component="div"
            noWrap
            sx={{ 
              flexGrow: 1,
              textTransform: 'uppercase'
            }}
            variant="h6"
          >
            controle total
          </Typography>
          <Box>
            <Typography>
              usuario logado: { userName }
              <ButtonShowLogout
                Icon={ isLogginOut ? IoMdArrowDropup :  IoMdArrowDropdown }
                onClick={ handleLogout }
                size={ 18 }
              />
            </Typography>
            <DropdownModal
              isOpen={ isLogginOut }       
            >
              <Paper className={ classes.modal }>
                <MenuItem onClick={ () => setIsLogged(false) } sx={{ fontSize: 13 }}>Sair</MenuItem>
              </Paper>
            </DropdownModal>
          </Box>
        </Toolbar>
      </AppBar>
    </S.Content>
  )
}