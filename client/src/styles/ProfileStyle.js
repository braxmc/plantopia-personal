import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25vw;
  background: #EBEBEB;
`

export const Name = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 30px;
  padding-bottom: 10px;
`

export const ButtonWrap = styled.div`
  width: 25vw;
  background: #EBEBEB;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding-top: 10px;
  border: 2px solid #000;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 250px;
`




// font-family: 'Noto Sans TC', sans-serif;
// text-decoration: none;
// display: flex;
// flex-direction: row;
// text-align: center;
// justify-content: center;