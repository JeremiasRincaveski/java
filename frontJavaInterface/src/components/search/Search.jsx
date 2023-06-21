import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    color: alpha(theme.palette.common.black, .8),
    direction: 'row-reverse',
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 0,
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'),
        width: '100%',
        '&:focus': {
            padding: theme.spacing(1, 1, 1, 2),
        },
    },
}));

export const SearchComponent = ({ search, setSearch }) => {
    const [state, setstate] = useState(true);

    return (
        <Search>
            <label htmlFor="input" style={{ display: `${ state ? 'block' : 'none' }` }}>
                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper>
            </label>

            <StyledInputBase
                placeholder="Procurar itens…"
                onChange={ (ev) => setSearch(ev.target.value) }
                value={ search }
                id="input"
                onFocus={ () => setstate(false) }
                onBlur={ () => setstate(true) }
            />
        </Search>
    )
}