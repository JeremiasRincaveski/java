import {  useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { api } from '../../services/api.js'
import { Nav } from "../nav/Nav.jsx"
import { Button } from "../CustomButton/CustomButtom.jsx"
import { MdDeleteSweep, MdEditDocument } from "react-icons/md";
import { Modal } from "../modal/Modal.jsx"
import { MyContext } from "../../context/MyContext.jsx"

const StyledTable = styled.table`
    margin: 2rem 2rem 0;
    width: calc(100% - 4rem);
    background-color: ${props => props.theme.colors.softWhite};
    border: none;
    text-align: left;
    border-collapse: collapse;

    th, td {
        padding: .2rem;
        border: 2px solid ${props => props.theme.colors.darkGray};
      
    }

    tr:nth-child(even) {
        background-color: ${props => props.theme.colors.softGray};
    } 

    td:last-of-type{
        width: 100px;
    }
`

export const Main = () => {
    const { handleCloseModal, editItemModal, setEditItemModal } = useContext(MyContext)
    const [item, setItem] = useState([]);
    
    const getList = () => {
        api.get('/posts').then(response => {
            setItem(response.data);
        });
    };

    
    const removeItem = async (id) => {
        await api.delete(`/posts/${id}`);
        const newList = item.filter((item) => item.id !== id);
        setItem(newList);
    }

    return (
        <>
            <Nav 
                getProdustList={getList}
            />
            <StyledTable onClick={handleCloseModal}>
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
                        {item.map((item, index) => (
                            <tr key={index}>
                                <td>{item.cod}</td>
                                <td>{item.nome}</td>
                                <td>{item.valor}</td>
                                <td>{item.estoque}</td>
                                <td>{item.dataCadastro}</td>
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
                <Modal isOpen={editItemModal}>
                    <div onClick={handleCloseModal}>
                    </div>
                </Modal>
            </StyledTable>
        </>
    )
}