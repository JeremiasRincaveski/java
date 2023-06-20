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
import zIndex from "@mui/material/styles/zIndex";

export const StyledButtonLogOut = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
`
export const ButtonShowLogout = ({ Icon, size, onClick =()=> {}, color, style }) => {
  return (<StyledButtonLogOut onClick={onClick} type="button">{Icon ? <Icon size={size} color={color} style={style}/> : <></>} </StyledButtonLogOut>)
}

const myStyles = makeStyles((theme) => ({
  // container : {
  //   width: '100vw',
  // },
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
      display: 'flex',
      alignItems: 'center',
      height: '30px',
      '& > li': {
        '&:hover':{

        }
      }
    }
  }
}))



export const Header = () => {
  const { userName, setIsLogged, isLogginOut, handleLogout, getList } = React.useContext(MyContext);
  const classes = myStyles()

  return (
    <S.Content> 
      <AppBar position="static" >
        <Toolbar className={classes.navBar}>
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
              <Paper className={classes.modal}>
                <MenuItem sx={{fontSize: 13}} onClick={() => setIsLogged(false)}>Sair</MenuItem>
              </Paper>
            </DropdownModal>
          </Box>
        </Toolbar>
      </AppBar>
    </S.Content>
  )
}