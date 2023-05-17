import styled from "styled-components"

const StyledButton = styled.button`
    width: ${props => props.wSize || '150px'};
    height: ${props => props.hSize || '36px'}; 
    border-radius: ${props => props.bRadius || '5px'};
    border: none;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: ${props => props.bgColor};
    color: ${props => props.fColor};
`

export const Button = ({ color, btnName = 'CustomBtn', Icon, size, bgColor, fColor, onClick, wSize, bRadius, hSize, style, type, disabled }) => {
    return (
        <StyledButton bgColor={bgColor} fColor={fColor} onClick={onClick} wSize={wSize} bRadius={bRadius} hSize={hSize} style={style} type={type} disabled={disabled}>
            {Icon ? <Icon size={size} color={color} /> : <></>}
            {btnName}
        </StyledButton>
    )
}
