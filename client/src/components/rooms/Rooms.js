import React, {useState, useEffect} from 'react';

import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm'
import Room from  './Room';

import  { Header } from '../../styles/SharedElements'
import { Button } from '../../styles/RoomStyles'


const Rooms = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getRooms()
  }, [])

  const listRooms = () => {
    if (props.rooms.length !== 0) {
      return (
        <div className = "roomcont">
            { props.rooms.map( r =>
          <Room {...r} />
              )}
        </div>
      )
    } else {
    }
  }
  // if(!props.rooms) return null
  return (
    <>
    <div>
      <Button onClick={() => setToggleForm(!toggleForm)}>
        {toggleForm ? <div>Exit</div> : <div>Add Room</div>}
      </Button>
      {toggleForm ? <RoomForm addRoom={props.addRoom} toggle={setToggleForm} /> : ''}
     <div>
     <Header>Your Rooms</Header>
     </div>
      <div>Number of Rooms: {props.rooms.length}</div>
    </div>
      {listRooms()}
      
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