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
    width: calc(100% - 4rem );
    text-align: left;
    border-collapse: collapse;
    padding: 0;

    tr{
      background-color: ${(props) => props.theme.colors.softWhite};
    }
    
    th,td {
      padding: .2rem;
      border: 2px solid ${props => props.theme.colors.darkGray};
    }
    
    tr:nth-child(even) {
        background-color: ${props => props.theme.colors.softGray};
    } 

    td:last-of-type{
      width: 50px;
    }

    td:first-of-type{
      width: 60px;
    }

    td:nth-child(2){
      width: 400px;
    }
    td:nth-child(4){
      width: 400px; 
    }
    td:nth-child(3){
      width: 400px; 
    }
    td:nth-child(5){
      width: 200px; 
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
export const StyledDiv = styled.div`
  width: calc(100% - 4rem);
  margin: 1rem 2rem;
  display: flex;
  gap: 1rem;

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;
  }
`;

export const StyledModal = styled.nav`
  position: absolute;
  right: 35px;
  top: 3rem;
`

export const Content = styled.div`
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
  position: relative;

  button{
    position: absolute;
    top: 71%;
    right: 10px;

  }
`