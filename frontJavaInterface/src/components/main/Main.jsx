import * as React from 'react';
import { api } from '../../services/api.js'
import { Nav } from "../nav/Nav.jsx"
import { MyContext } from "../../context/MyContext.jsx"
import { Box, IconButton, Skeleton } from "@mui/material"
import { SearchComponent } from "../search/Search.jsx"
import { StyledTable } from "../styles/GlobalStyles.js"
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

export const Main = () => {
    const { handleCloseModal, setEditItemModal, item, setItem } = React.useContext(MyContext)
    const [isLoading, setIsLoading] = React.useState(false);
    const [search, setSearch] = React.useState('');

    const getList = () => {
        setIsLoading(true);
        setTimeout(() => {
            (api).get('/product').then(response => {
                setItem(response.data);
            });
            setIsLoading(false);
        }, 2000);
    };
    React.useEffect(() => {
        getList();
       
    }, []);

    const removeItem = async (id) => {
        setIsLoading(true);
        setIsLoading(true);
        try {
            await api.delete(`/product/${id}`);
            const newList = item.filter((item) => item.id !== id);
            setTimeout(() => {
                setItem(newList);
                setIsLoading(false);
            }, 1000);
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <>
            <Box>
                <Nav
                    getProdustList={getList}
                />
                <SearchComponent
                    search={search}
                    setSearch={setSearch}
                />
            </Box>
            {isLoading ? (
                <Skeleton
                    height={40}
                    sx={{margin: 4}}
                />
            ) : (
                <StyledTable
                    onClick={handleCloseModal}
                >
                    <>
                        <thead>
                            <tr>
                                <th>cod</th>
                                <th>nome</th>
                                <th>valor</th>
                                <th>estoque</th>
                                <th>data cadastro</th>
                                <th>ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.filter((item) => item.name?.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <IconButton aria-label="delete" size="small"
                                            onClick={() => removeItem(item.id)}

                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>

                                        <IconButton aria-label="delete" size="small"
                                            onClick={setEditItemModal}
                                        >
                                            <EditNoteIcon fontSize="small" />
                                        </IconButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </>
                </StyledTable>
            )};
        </>
    );
};