import React from 'react';

import {HomeWrap, Header, Label, Button, ButtonWrap} from '../../styles/HomeElements'

import {Link} from "react-router-dom"

const Home = () => (
<HomeWrap>
      <Header>Plantopia</Header>
      <Label>Never mismanage your plants again.</Label>
      <ButtonWrap>
        <Link to='/login'>
        <Button>LOGIN</Button>
        </Link>
        <Link to='/register'>
        <Button>SIGN UP</Button>
        </Link>
      </ButtonWrap>
</HomeWrap>
)

export default Home; 