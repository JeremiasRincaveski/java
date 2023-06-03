import styled from "styled-components"

const StyledButton = styled.button`
    width: ${props => props.wsize || '150px'};
    height: ${props => props.hsize || '36px'}; 
    border-radius: ${props => props.bradius || '5px'};
    border: none;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: ${props => props.bgcolor};
    color: ${props => props.fcolor};
    &:disabled{
        background-color: #ccc;
    }
`

export const Button = ({ color, btnName = 'CustomBtn', Icon, size, bgColor, fColor, onClick, wSize, bRadius, hSize, style, type, disabled }) => {
    return (
        <StyledButton bgcolor={bgColor} fcolor={fColor} onClick={onClick} wsize={wSize} bradius={bRadius} hsize={hSize} style={style} type={type} disabled={disabled}>
            {Icon ? <Icon size={size} color={color} /> : <></>}
            {btnName}
        </StyledButton>
    )
}
