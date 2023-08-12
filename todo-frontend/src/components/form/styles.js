import styled from "styled-components";

export const FormContainer= styled.form`
 display: flex;
 align-self: center;
 justify-content: center;
 padding: 5px 0 px;
 @media (max-width:420px) {
    flex-direction: column;
    
 }

`

export const Input =styled.input`
display: flex;
width: 100%;
padding: 8px;
border: 1px solid;
border-radius: 8px;

:focus{
    border:  3px solid red;
    outline: none;
}
`

export const Button = styled.button`
  background: #ef7366;
  border-radius: 18px;
  border: 2px solid #ef7366;
  color: white;
  margin-left: 1rem;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  @media (max-width: 420px) {
    margin-top:10px ;
    margin-left: 0;
    width: 100%;
  }
`;