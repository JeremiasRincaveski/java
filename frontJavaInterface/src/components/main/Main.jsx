import styled from "styled-components"

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

export const Main = () => {
    return (
        <>
            <StyledTable>
                <tr>
                    <th>cod</th>
                    <th>nome</th>
                    <th>valor</th>
                    <th>estoque</th>
                    <th>data cadastro</th>
                    <th>ações</th>
                </tr>
                <tr>
                    <td>1234</td>
                    <td>jeremias</td>
                    <td>-1</td>
                    <td>1</td>
                    <td>31102000</td>
                    <td>deletar</td>
                </tr>
                <tr>
                    <td>1234</td>
                    <td>jeremias</td>
                    <td>-1</td>
                    <td>1</td>
                    <td>31102000</td>
                    <td>deletar</td>
                </tr>
            </StyledTable>
        </>
    )
}