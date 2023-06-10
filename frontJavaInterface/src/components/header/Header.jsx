import * as React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { MyContext } from '../../context/MyContext';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { styled } from 'styled-components';
import { MenuItem, Paper, Stack } from "@mui/material";

const StyledButtonLogOut = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`
const ButtonShowLogout = ({ Icon, size, onClick = () => { } }) => {
  return (<StyledButtonLogOut onClick={onClick}>{Icon ? <Icon size={size} /> : <></>} </StyledButtonLogOut>)
}

export const Header = () => {
  const { userName, setIsLogged } = React.useContext(MyContext);
  const [isLogginOut, setIsLoggingOut] = React.useState(false);

  const handleLogout = () => {
    setIsLoggingOut(!isLogginOut);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
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
            {isLogginOut &&
              (
                <Stack 
                sx={{position: "absolute", right: 35}}
                direction="row" spacing={0}>
                  <Paper>
                      <MenuItem sx={{fontSize: 13}} onClick={() => setIsLogged(false)}>Sair</MenuItem>
                  </Paper>
                </Stack>
              )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}