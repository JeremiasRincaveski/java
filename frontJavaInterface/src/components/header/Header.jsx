import * as React from "react"
import  * as S   from "../styles/GlobalStyles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { MyContext } from '../../context/MyContext';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { styled } from 'styled-components';
import { MenuItem, Paper } from "@mui/material";
import { DropdownModal } from "../modal/Modal";

export const StyledButtonLogOut = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`
export const ButtonShowLogout = ({ Icon, size, onClick =()=> {}, color, style }) => {
  return (<StyledButtonLogOut onClick={onClick} type="button">{Icon ? <Icon size={size} color={color} style={style}/> : <></>} </StyledButtonLogOut>)
}

export const Header = () => {
  const { userName, setIsLogged, isLogginOut, handleLogout, getList } = React.useContext(MyContext);

  return (
    <S.Content> 
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
            onClick={getList}
          >
            <AssignmentIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textTransform: 'uppercase' } }}
          >
            controle total
          </Typography>
          <Box>
            <Typography>
              usuario logado: {userName}
              <ButtonShowLogout
                Icon={ isLogginOut ? IoMdArrowDropup :  IoMdArrowDropdown }
                size={18}
                onClick={handleLogout}
              />
            </Typography>
            <DropdownModal
              isOpen={isLogginOut}       
            >
              <Paper>
                <MenuItem sx={{fontSize: 13}} onClick={() => setIsLogged(false)}>Sair</MenuItem>
              </Paper>
            </DropdownModal>
          </Box>
        </Toolbar>
      </AppBar>
    </S.Content>
  )
}