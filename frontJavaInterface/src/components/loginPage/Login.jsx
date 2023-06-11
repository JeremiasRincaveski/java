import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MyContext } from '../../context/MyContext';
import { BiShowAlt, BiHide } from "react-icons/bi";
import { ButtonShowLogout } from '../header/Header';
import { StyledFormLogin } from '../styles/GlobalStyles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/maicondguerian/java" target='_blank'>
                Controle Total {' '}
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignIn() {
    const { password, userName, handleInputs, handleLogin, passwordError, userError, handleCheckbox, savePassword } = React.useContext(MyContext);
    const [toggleShowPassword, setToggleShowPassword] = React.useState('password');

    const handleToggleShowPassword = () => {
        if (toggleShowPassword === 'password') {
            setToggleShowPassword('text');
        } else {
            setToggleShowPassword('password');
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 50,
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Controle Total
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <StyledFormLogin>
                            <TextField
                                error={userError}
                                helperText={userError ? 'Login incorreto' : false}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Login"
                                name="username"
                                autoComplete="email"
                                autoFocus
                                onChange={handleInputs}
                                value={userName}
                                />
                            <TextField
                                error={passwordError}
                                helperText={passwordError ? 'Password incorreto' : false}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={toggleShowPassword}
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInputs}
                                value={password}
                                className='password-input'
                            />
                        <ButtonShowLogout
                            Icon={toggleShowPassword === 'text' ? BiHide : BiShowAlt}
                            color={'#000c'} size={20}
                            onClick={handleToggleShowPassword}
                        />
                        </StyledFormLogin>
                        <FormControlLabel
                            control={<Checkbox color="primary" name='checkbox' onChange={handleCheckbox} checked={savePassword} />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 4 }}
                            onClick={handleLogin}
                        >
                            Sign In
                        </Button>
                    </Box>
                    <Copyright sx={{ mt: 0, mb: 0 }} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}