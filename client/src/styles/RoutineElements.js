import styled from 'styled-components'

export const Info = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const RoutineButton = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "white" : "#274428"};
color: ${props => props.primary ? "#274428" : "white"};
font-size: 1.3em;
margin: 10px;
padding: 0.25em 1em;
border: 2px solid #274428;
border-radius: 10px;
width: 8em;
align-items: center;
display: flex;
align-self: center;
justify-content: center;

 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const RoutineWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Routines = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #274428;
  font-size: 17px;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`

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
width: 7em;
margin: 15px 10px;

 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;