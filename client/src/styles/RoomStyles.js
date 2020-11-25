import styled from 'styled-components';

export const Header = styled.header `
font-family: 'Noto Sans TC', sans-serif;
color: #274428;
font-size: 50px;
display: flex;
justify-content: center;
padding-top: 40px;
`;

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

 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const RoomCard = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  background-color: #EBEBEB;
  color: #274428;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  border: 2px solid #274428;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  &:hover {
    transform: scale(1.03);
  }
`

export const RoomInfo = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
`

export const RoomList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const Hr = styled.hr`
  height: 2px;
  color: #274428;
  background-color: #274428;
`