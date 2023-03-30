import { useEffect, useState } from "react"
import styled from "styled-components"
import { api } from '../../services/api.js'

const StyledTable = styled.table`
    margin: 2rem 2rem 0;
    width: calc(100% - 4rem);
    background-color: ${props => props.theme.colors.softWhite};
    border: none;
    text-align: left;
    border-collapse: collapse;

    th, td {
        padding: .5rem;
        border: 2px solid ${props => props.theme.colors.darkGray};
    }

    tr:nth-child(even) {
        background-color: ${props => props.theme.colors.softGray};
    }
`

const GetList = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        api.get('/posts').then(response => {
            setItem(response.data);
        })
    }, []);

    return (
        <tr>
            {item.map(item  => {
                return (
                    <>
                        <td>{item.cod}</td>
                        <td>{item.nome}</td>
                        <td>{item.valor}</td>
                        <td>{item.estoque}</td>
                        <td>{item.dataCadastro}</td>
                        <td>testes botao</td>
                    </>
                );
            })}
        </tr>
    )
}

export const Main = () => {
    return (
        <>
            <StyledTable>
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
                    <GetList />
                    <GetList />
                    <GetList />
                </tbody>
            </StyledTable>
        </>
    )
}