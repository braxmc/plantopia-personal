import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 35vw;
  max-width: 350px;
  min-width: 200px;
  background: #EBEBEB;
`

export const Name = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 30px;
  padding-top: 10px;

  @media screen and (max-width: 1050px) {
    font-size: 25px;
  }
`

export const Wrap = styled.div`
  /* width: 25vw;
  max-width: 350px; */
  height: 100vh;
  min-width: 200px;
  display: flex;
  flex-direction: row;

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
  margin-left: 10px;

 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const Img = styled.img`
  border: 2px solid #000;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  width: 225px;
  height: 225px;

  @media screen and (max-width: 1050px) {
    width: 175px;
    height: 175px;
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const Header = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 30px;
  padding: 15px 0;
  background-color: #EBEBEB;
`

export const Hr = styled.hr`
  height: 2px;
  color: #274428;
  background-color: #274428;
  margin: 0;
  padding: 0;
`

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`

export const RoomWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #274428;
  width: 100vw;
`