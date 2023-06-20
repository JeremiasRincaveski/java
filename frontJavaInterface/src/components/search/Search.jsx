import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
    color: alpha(theme.palette.common.black, .8),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    display: 'flex',
    direction: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
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
            <label htmlFor="input" style={{display: `${state ? 'block' : 'none'}`}}>
                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper>
            </label>
            <StyledInputBase
                placeholder="Procurar itens…"
                onChange={(ev) => setSearch(ev.target.value)}
                value={search}
                id="input"
                onFocus={() => setstate(false)}
                onBlur={() => setstate(true)}
                />
        </Search>
    )
}