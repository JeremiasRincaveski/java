import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export const Header = () => {
const  { userName, setIsLogged } = useContext(MyContext);


  return (
    <Box sx={{ flexGrow: 1, position:"relative" }}>
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
            </Typography>  
            <>
            <button onClick={()=>setIsLogged(false)}> Sair</button>
            </>
          </Box>       
        </Toolbar>
      </AppBar>
    </Box>
  )
}