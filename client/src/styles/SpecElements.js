import styled from 'styled-components'

export const SpecButton = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
background: #274428;
color: white;
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
  color: #274428;
  background: white;
  cursor: pointer;
 }
`;

export const Info = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Button = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
background: #274428;
color: white;
font-size: 1.3em;
padding: 0.25em 1em;
border: 2px solid #274428;
border-radius: 10px;
height: 2em;
width: 7em;
margin: 15px 10px;

 &:hover {
  color: #274428;
  background: white;
  cursor: pointer;
 }
`;

export const SpecsContainer = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #274428;
  font-size: 17px;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`
export const Border = styled.div`
  border: 2px solid #000;
  border-radius: 10px;
  background-color: #FFFFFF;

`

export const Center = styled.div`
  display: flex-start;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  padding-left: 20px;
`

export const CenterButton = styled.div`
  display: flex;
  justify-content: center;
`