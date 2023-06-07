import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';

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
            <button onClick={()=>setIsLogged(false)}> Sair</button>
          </Box>       
        </Toolbar>
      </AppBar>
    </Box>
  )
}