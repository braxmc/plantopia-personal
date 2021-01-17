import React from 'react';

import { AboutWrap, Header, AboutCard, AboutCardG, Images, CardDiv, CardTitle, CardTitleW, CardInfo, CardInfoW, Button } from '../../styles/AboutElements'

import Image from '../../images/calander.jpg'
import Image1 from '../../images/water.png'
import Image2 from '../../images/happy.jpg'

const About = () => {

  return (
    <AboutWrap>
      <Header>Plantopia</Header>
      <AboutCard>
        <CardDiv>
          <CardTitle>Routines</CardTitle>
          <CardInfo>
            Create routines for even the most needy plants to make sure they can stay healthy and growing!
          </CardInfo>
        </CardDiv>
        <Images src={Image} />
      </AboutCard>
      <AboutCardG>
        <Images src={Image1} />
        <CardDiv>
          <CardTitleW>Plant Management</CardTitleW>
          <CardInfoW>
            Add all of your rooms, and the plants inside to keep track of them!
          </CardInfoW>
        </CardDiv>
      </AboutCardG>
      <AboutCard>
        <CardDiv>
          <CardTitle>Happy Plants</CardTitle>
          <CardInfo>With our plant managment system you are sure to have nothing but happy plants!</CardInfo>
        </CardDiv>
        <Images src={Image2} />
      </AboutCard>
      <AboutCardG>
        <CardDiv>
          <Button>Click Here</Button>
        </CardDiv>
        <CardDiv>
          <CardTitleW>Sign Up</CardTitleW>
          <CardInfoW>Create a free account and change you and your plants lives today!</CardInfoW>
        </CardDiv>
      </AboutCardG>
    </AboutWrap>
  )
}

export default About;