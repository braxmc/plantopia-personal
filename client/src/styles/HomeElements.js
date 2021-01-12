import styled from 'styled-components'

import bg from '../images/plant-bg.jpg'

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Header = styled.header `
font-family: 'Noto Sans TC', sans-serif;
color: #274428;
font-size: 70px;
display: flex;
justify-content: center;
padding-bottom: 40px;
`;

export const Label = styled.label `
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 10px;
  font-weight: bold;
  color: #274428;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`

export const Button = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  background: #274428;
  color: white;
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: 2em;
  width: 7em;
  margin-left: 10px;
  cursor: pointer;
 &:hover {
  color: #274428;
  background: white;
 }
`;

