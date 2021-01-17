import styled from 'styled-components'

export const AboutWrap = styled.div`
  background: #EBEBEB;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.header `
font-family: 'Noto Sans TC', sans-serif;
color: #274428;
font-size: 60px;
display: flex;
justify-content: center;
padding: 60px 0;
`;

export const AboutCard = styled.div`
  border: 2px solid #274428;
  height: 300px;
  width: 800px;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const AboutCardG = styled.div`
  border: 2px solid #274428;
  height: 300px;
  width: 800px;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #274428;
`

export const Images = styled.img`
  height: 250px;
  width: 300px;
  border-radius: 10px;
`

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
  color: #274428;
  font-size: 35px;
  font-family: 'Noto Sans TC', sans-serif;
`

export const CardTitleW = styled.h3`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 35px;
  font-family: 'Noto Sans TC', sans-serif;
`

export const CardInfo = styled.p`
  width: 250px;
  font-size: 18px;
  color: #274428;
  font-family: 'Noto Sans TC', sans-serif;
  padding-left: 30px;
`

export const CardInfoW = styled.p`
  width: 250px;
  font-size: 18px;
  color: White;
  font-family: 'Noto Sans TC', sans-serif;
  padding-left: 30px;
`

export const Button = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  background: white;
  color: #274428;
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: 75px;
  width: 200px;
  margin-left: 10px;
  cursor: pointer;

 &:hover {
  color: #274428;
  background: #EBEBEB;
 }
`;