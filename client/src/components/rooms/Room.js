import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import { RoomConsumer } from '../../providers/RoomProvider';

import { RoomCard, RoomInfo, RoomInfo1 } from '../../styles/RoomStyles'


const Room = (props) => {
  return (
    <Link to={`/rooms/${props.id}`}>
      <RoomCard>
        <RoomInfo>{props.name}</RoomInfo>
        <RoomInfo1>Sunlight? {props.sun_amount}</RoomInfo1>
      </RoomCard>
    </Link>
    )
  }


const ConnectedRoom = (props) => (
  <RoomConsumer>
    {
      value => (
        <Room 
          {...props}
          {...value}
        />
      )
    }
  </RoomConsumer>
)

export default ConnectedRoom;