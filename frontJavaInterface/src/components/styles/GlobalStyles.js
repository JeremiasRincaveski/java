import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color:${props => props.theme.colors.softGray};
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;

    input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
        margin: 0;
      }

    input[type=number] {
      appearance: textfield;
    }
  }
`

export const StyledTable = styled.table`
    margin: 2rem 2rem 0;
    width: calc(100% - 4rem);
    text-align: left;
    border-collapse: collapse;
    padding: 0;

    tr{
        background-color: ${(props) => (props.isloading ? 'transparent' : props.theme.colors.softWhite)};
    }
    
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

export const ContentForm = styled.form`
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    margin: 1rem, 2rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
`
export const StyledInput = styled.div`
    display: flex;
    align-items: center;
    padding: .5rem 0;
    height: 2rem;
    flex: 0 0 17%;

    label {
      width: 250px;
    }

    input {
      align-self: flex-end;
      border: none;
      border-radius: 5px;
      height: 100%;
      padding: .2rem ;
      text-transform: uppercase;
      flex: 1 0 150px;
      outline: none;
      box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

    }
    
`
export const StyledDiv = styled.div`
  width: calc(100% - 4rem);
  margin: 1rem 2rem;
  display: flex;
  display: flex;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .2rem;
    }
`