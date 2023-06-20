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
import { makeStyles } from "@material-ui/core";
import { blue } from "@mui/material/colors";

export const StyledButtonLogOut = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`
export const ButtonShowLogout = ({ Icon, size, onClick =()=> {}, color, style }) => {
  return (<StyledButtonLogOut onClick={onClick} type="button">{Icon ? <Icon size={size} color={color} style={style}/> : <></>} </StyledButtonLogOut>)
}

const styles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#1c1c1c',
      justifyContent: 'space-between',
      '& > div': {
      [theme.breakpoints.down(400)]: {
        '&:nth-of-type(1)': {
          display: 'none',
        },
      },
     },
    },
  //   root: {
  //   backgroundColor: '#1c1c1c',
  //   '& > *': {
  //     backgroundColor: 'red',
  //     '&:nth-of-type(2)': {
  //       display: 'none',
  //     },
  //     [theme.breakpoints.down(400)]: {
  //       '&:nth-of-type(2)': {
  //         display: 'block',
  //       },
  //     },
  //   },
  // },
}))



export const Header = () => {
  const { userName, setIsLogged, isLogginOut, handleLogout, getList } = React.useContext(MyContext);
  const classes = styles()

  return (
    <S.Content> 
      <AppBar position="static" >
        <Toolbar className={classes.root}>
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
            sx={{ 
              flexGrow: 1,
              // display: { 450 : 'none', sm: 'block' },
              textTransform: 'uppercase' }
          }
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