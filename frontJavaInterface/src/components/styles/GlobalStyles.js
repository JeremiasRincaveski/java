import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color:${props => props.theme.colors.softGray};
    border: none;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    outline: none;
    padding: 0;

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      display: none;
      margin: 0;
      -webkit-appearance: none;
    }

    input[type=number] {
      appearance: textfield;
    }
  }
`
export const StyledContainer = styled.main`
  box-sizing: border-box;
  height: 100vh;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 2rem;
  padding: 0;
  text-align: left;
  transition: all .3s ease-in-out;
  width: calc(100% - 4rem );

  tr{
    background-color: ${(props) => props.theme.colors.softWhite};
  }
  
  th,td {
    border: 2px solid ${props => props.theme.colors.darkGray};
  }
  
  tr:nth-child(even) {
    background-color: ${props => props.theme.colors.softGray};
  } 

  td:last-of-type{
    width: 60px;

    > div{
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  td:first-of-type{
    min-width: 45px;
    width: 50px;
  }

  td:nth-child(2){
    min-width: 120px;
    width: 400px;
  }

  td:nth-child(3){
    min-width: 60px;
    width: 400px; 
  }
  
  td:nth-child(4){
    min-width: 80px;
    width: 400px; 
  }

  td:nth-child(5){
    min-width: 120px;
    width: 200px; 
  }
`
export const ContentForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin: 1rem, 2rem;
  padding: 2rem;
  text-transform: uppercase;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const StyledDiv = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  margin: 1rem 2rem;
  width: calc(100% - 4rem);
  
  button{
    align-items: center;
    display: flex;
    flex: 1 0 152px;
    gap: .2rem;
    justify-content: center;
  }

  > :last-child {
    flex: 1 0 200px;
  }

  :nth-child(3){
    flex: 10 10 1px;
    height: 10px;
  }

  @media screen and (max-width: 730px){
    :nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 400px) {
    :nth-child(1) {
      order: 2;
    }

    :nth-child(2) {
      order: 1;
    }

    :last-child {
      order: 3;
    }
  }
`;

export const StyledModal = styled.nav`
  position: absolute;
  right: 35px;
  top: 3rem;
  z-index: 1000;

  @media screen and (max-width: 600px){
    right: 20px;
  }
`

export const Content = styled.div`
  overflow: auto;

  .modalOn {
    animation-name: modalOn;
    animation-duration: .3s;
  }

  @keyframes modalOn {
    from{
      opacity: 0;
      transform: translateY(-85%);
    }

    to{
      opacity: 0.8;
      transform: translateY(0);
    }
  }
`;

export const StyledFormLogin = styled.form`
  input{
    position: relative;
  }

  svg{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`