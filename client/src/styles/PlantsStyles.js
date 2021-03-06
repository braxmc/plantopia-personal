import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  background: #274428;
  color: white;
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: 2em;
  width: 8em;
  margin-bottom: 10px;
  cursor: pointer;

 &:hover {
  color: #274428;
  background: white;
 }
`;

export const PlantWrap = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  background-color: #EBEBEB;
  color: #274428;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid #274428;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  &:hover {
    transform: scale(1.03);
  }
`

export const PlantInfo = styled.p`
  color: #274428;
  font-size: 20px;
`

export const Img = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 10px;
`

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 20px;
`

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 15px;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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