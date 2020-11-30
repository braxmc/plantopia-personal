import React, {useState} from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import { Link } from 'react-router-dom';

import { PlantWrap, PlantInfo, Img, Left, Right } from '../../styles/PlantsStyles'

const Plant = (props) => (
  <Link to={{pathname:`/rooms/${props.room_id}/plants/${props.id}`, state: {room_id: props.room_id}}}>
    <PlantWrap>
        <Left>
          <PlantInfo>Name: {props.name}</PlantInfo>
          <PlantInfo>Type: {props.species}</PlantInfo>
        </Left>
        <Right>
          <Img src={props.image || '/images/plant.svg'} />
        </Right>
    </PlantWrap>
  </Link>
)
 


export default Plant;