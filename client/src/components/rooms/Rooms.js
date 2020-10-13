import React, {useState, useEffect} from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm'

const Rooms = (props) => {

  useEffect(() => {
    props.getRooms()
  }, [])

  const listRooms = () => {
    if (props.rooms.length !== 0) {
      return (
        <ul>
            { props.rooms.map( r =>
          <li>
            {r.name}
          </li>
              )}
        </ul>
      )
    } else {
      return ( <h1>No Rooms</h1> )
    }
  }
  // if(!props.rooms) return null
  return (
    <>
      {listRooms()}
      <RoomForm addRoom={props.addRoom}/>
    </>
  )
}

const ConnectedRooms = (props) => (
  <RoomConsumer>
    {
      value => (
        <Rooms 
          {...props}
          {...value}
        />
      )
    }
  </RoomConsumer>
)

export default ConnectedRooms;