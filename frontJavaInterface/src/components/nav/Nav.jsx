import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
background-color: ${props => props.theme.colors.softWhite};
margin-bottom: 1rem;
box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    li{
        display: inline;
        list-style: none;
        padding: 0 2rem;
    }

`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;

    div:last-of-type{
        display: flex;
        width: 300px;
    }

    
`
const StyledButton = styled.button`
    width: 130px;
    height: 32px;
    border-radius: 5px;
    border: none;
    margin-right: 0.5rem;
`

const Button = ({color, btnName='CustumBtn', Icon}) =>{
    return <StyledButton backgroudColor={color} Icon={Icon}>
        {btnName}
    </StyledButton>
}

const StyledInput = styled.input`
background-color: transparent;
width:300px ;

`

const Input = ({Icon}) => {
    return <StyledInput Icon={Icon} />

}

const SearchIcon = ({ size }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            width={size}
            viewBox="0 0 25 24"
        >
            <path
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                fill="#000"
            />
        </svg>
    );
};

export const Nav = () => {
    return (
        <>
            <StyledNav>
                <ul>
                    <li>teste</li>
                </ul>
                <ul>
                    <li>teste2</li>
                    <li>teste2</li>
                </ul>
            </StyledNav>
            <StyledDiv>
                <div>
                    <Button />
                    <Button />
                    <Button />
                </div>
                <div>
                    <Input  />
                    <button>
                        <SearchIcon size="25px" />
                    </button>
                </div>
            </StyledDiv>

        </>
    )
}

