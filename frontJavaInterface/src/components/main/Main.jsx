import * as React from 'react';
import * as S from "../styles/GlobalStyles.js"
import { api } from '../../services/api.js'
import { Nav } from "../nav/Nav.jsx"
import { MyContext } from "../../context/MyContext.jsx"
import { Box, IconButton, Skeleton } from "@mui/material"
import { SearchComponent } from "../search/Search.jsx"
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { DeleteConfirmation } from '../DeleteConfirmation.jsx';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { StyledButtonLogOut } from '../header/Header.jsx';

const SetBy = ({ Icon, onClick = () => { } }) => {
    return (
        <StyledButtonLogOut
            onClick={onClick}
        >
            {Icon ? <Icon size={15} color={'#000c'} /> : <></>}
        </StyledButtonLogOut>
    )
};

export const Main = () => {
    const { handleCloseModal, setEditItemModal, item, setItem, setItemSelected, setIsLoading, isLoading, getList, setOpen, open } = React.useContext(MyContext)
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        getList();

    }, []);

    const ordenarItens = (campo) => {
        const itensOrdenados = [...item].sort((a, b) => {
            if (typeof a[campo] === 'string' && typeof b[campo] === 'string') {
                return a[campo].localeCompare(b[campo]);
            } else {
                return a[campo] - b[campo];
            }
        });
        setItem(itensOrdenados);
    };

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
        <S.Content>
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
                    sx={{ margin: 4 }}
                />
            ) : (
                <S.StyledTable
                    onClick={handleCloseModal}
                >
                    <>
                        <thead>
                            <tr>
                                <th>
                                    cod
                                    <SetBy Icon={IoMdArrowDropdown} onClick={() => ordenarItens('id')} />
                                </th>
                                <th>
                                    nome
                                    <SetBy Icon={IoMdArrowDropdown} onClick={() => ordenarItens('name')} />
                                </th>
                                <th>
                                    valor
                                    <SetBy Icon={IoMdArrowDropdown} onClick={() => ordenarItens('price')} />
                                </th>
                                <th>
                                    estoque
                                    <SetBy Icon={IoMdArrowDropdown} onClick={() => ordenarItens('stock')} />
                                </th>
                                <th>
                                    data cadastro
                                    <SetBy Icon={IoMdArrowDropdown} onClick={() => ordenarItens('date')} />
                                </th>
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
                                            // onClick={() => removeItem(item.id)}
                                            onClick={() => setOpen(true)}

                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>

                                        <IconButton aria-label="edit" size="small"
                                            onClick={() => {
                                                setEditItemModal(true)
                                                setItemSelected(item.id)
                                            }}
                                        >
                                            <EditNoteIcon fontSize="small" />
                                        </IconButton>
                                        <DeleteConfirmation
                                            isOpen={open}
                                            id={item.id}
                                            getDeleteFunction={() => removeItem(item.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                </S.StyledTable>
            )};
        </S.Content>
    );
};