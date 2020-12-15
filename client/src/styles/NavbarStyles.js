import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Right = styled.div`

`

export const Left = styled.div`

`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #274428;
  padding: 2px 0;
`

export const Img = styled.img`
  height: 55px;
  padding-left: 25px;
`

export const NavLink = styled(Link)`
  color: #FFFFFF;
  padding-right: 40px;
  font-size: 20px;

  &:hover {
    color: #EBEBEB;
  }

`