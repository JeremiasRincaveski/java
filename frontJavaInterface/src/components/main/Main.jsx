import { useContext, useEffect, useState } from "react"
import { api } from '../../services/api.js'
import { Nav } from "../nav/Nav.jsx"
import { Button } from "../CustomButton/CustomButtom.jsx"
import { MdDeleteSweep, MdEditDocument } from "react-icons/md";
import { Modal } from "../modal/Modal.jsx"
import { MyContext } from "../../context/MyContext.jsx"
import { Box, Skeleton } from "@mui/material"
import { SearchComponent } from "../search/Search.jsx"
import { StyledTable } from "../styles/GlobalStyles.js"
import { EditProduct } from "../editProduct/index.jsx";

export const Main = () => {
    const { handleCloseModal, editItemModal, setEditItemModal, item, setItem, modalIsOpen } = useContext(MyContext)
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');

    const getList = () => {
        setIsLoading(true);
        setTimeout(() => {
            (api).get('/product').then(response => {
                setItem(response.data);
            });
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        getList();
    }, []);

    const removeItem = async (id) => {
        setIsLoading(false);
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
                    isOpen={modalIsOpen}
                />
            </Box>
            <StyledTable 
                onClick={handleCloseModal}
                isloading={isLoading}
                
                >
                {isLoading ? (
                    <Box>
                        <Skeleton
                            height={40}
                        />
                    </Box>
                ) : (
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
                            {item.filter((item)=> item.name?.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.date}</td>
                                    <td>            
                                        <Button
                                            wSize={'30px'}
                                            hSize={'30px'}
                                            btnName=''
                                            Icon={MdDeleteSweep}
                                            size={22}
                                            onClick={() => removeItem(item.id)}
                                        />
                                        <Button
                                            wSize={'30px'}
                                            hSize={'30px'}
                                            btnName=''
                                            Icon={MdEditDocument}
                                            size={22}
                                            onClick={setEditItemModal}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {editItemModal && (
                           <Modal isOpen={editItemModal}>
                                <EditProduct />
                            </Modal>
                        )}
                    </>
                )}
            </StyledTable>
        </>
    );
};