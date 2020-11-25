import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import { RoomConsumer } from '../../providers/RoomProvider';

import { RoomCard, RoomInfo } from '../../styles/RoomStyles'


const Room = (props) => {
  return (
    <Link to={`/rooms/${props.id}`}>
      <RoomCard>
        <RoomInfo>{props.name}</RoomInfo>
        <RoomInfo>{props.sun_amount}</RoomInfo>
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