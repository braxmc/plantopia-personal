import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "white" : "#274428"};
  color: ${props => props.primary ? "#274428" : "white"};
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: 2em;
  width: 8em;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;

 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const Button1 = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  background: #274428;
  color: white;
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: 2em;
  width: 8em;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;

 &:hover {
  color: #274428;
  background: white;
 }
`;

export const Header = styled.header `
font-family: 'Noto Sans TC', sans-serif;
color: #274428;
font-size: 50px;
display: flex;
justify-content: center;
padding-top: 35px;
`;

export const Gray = styled.div`
  background-color: #EBEBEB;
`

export const Exit = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const ExitWrap = styled.div`
  display: flex;
  background-color: #EBEBEB;
`