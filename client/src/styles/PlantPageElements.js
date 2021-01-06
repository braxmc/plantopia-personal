import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const PlantWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;

  height: 100%;
  min-height: 100vh;
  width: auto;
  background-color: #EBEBEB;

  @media screen and (max-width: 1100px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 900px) {
    order: 2;
    flex-direction: column;
    align-items: center;
  }
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

export const PlantInfo = styled.div`
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 900px) {
    order: 2;
    align-self: center;
  }
   `;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  order: 3;
`;

export const InfoTitle = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 50px;
  display: flex;
  justify-content: center;
  margin: 0;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const InfoTitle1 = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 50px;
  display: none;
  justify-content: center;
  margin: 0;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

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

export const Info1 = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #274428;
  font-size: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 ;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`

export const Image = styled.img`
  align-self: center;
  order: 2;
  height: 450px;
  width: 450px;
  border-radius: 20px;
  margin-top: 50px;

  @media screen and (max-width: 1100px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 900px) {
    order: 1;
    align-self: center;
    padding-bottom: 10px;
  }
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  order: 2;

  @media screen and (max-width: 900px) {
    padding-bottom: 5px;
  }
`

export const RoutinesWrap1 = styled.div`
  display: flex;
  justify-content: center;
`

export const RightWrap = styled.div`
  order: 2;

  @media screen and (max-width: 900px) {
    order: 1;
  }
`

export const LeftWrap = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    order: 2;
  }
`

export const Line = styled.hr`
  width: 350px;
  height: 2px;
  color: #274428;
  background: #274428;
  border-radius: 40%;
  margin-left: 45px;

  @media screen and (max-width: 900px) {
    width: 450px;
    margin-left: 0;
  }
`

export const Line1 = styled.hr`
  width: 450px;
  height: 2px;
  color: #274428;
  background: #274428;
  border-radius: 40%;
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`

export const BackLink = styled(Link)`
  color: #274428;
  text-decoration: underline;
  font-size: 10px;
`

export const LinkWrap = styled.div`
  display: flex;
  background-color: #EBEBEB;
  justify-content: flex-start;
  padding-left: 2px;
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