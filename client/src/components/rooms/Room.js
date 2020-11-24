import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import { RoomConsumer } from '../../providers/RoomProvider';

import { RoomDiv, RoomInfo } from '../../styles/RoomStyles'


const Room = (props) => {
  return (
    <Link to={`/rooms/${props.id}`}>
      <RoomDiv>
        <RoomInfo>Room- {props.name}</RoomInfo>
        <RoomInfo>Sun- {props.sun_amount}</RoomInfo>
      </RoomDiv>
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