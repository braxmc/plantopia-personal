import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

`

export const Button = styled.button`
  width: 40vw;
  font-family: 'Noto Sans TC', sans-serif;
  background: #274428;
  color: white;
  font-size: 30px;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: auto;
  cursor: pointer;

 &:hover {
  color: #274428;
  background: white;
 }
`;

export const FormInput = styled.input`
  width: 40vw;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
`

export const DropDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-bottom: 10px;
`

export const FormHr = styled.hr`
  height: 2px;
  color: #274428;
  background-color: #274428;
  margin: 0;
  padding: 0;
`