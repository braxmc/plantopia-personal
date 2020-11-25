import React, {useState, useEffect} from 'react';

import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm'
import Room from  './Room';

import { Button, RoomList, Header, Center } from '../../styles/RoomStyles'


const Rooms = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getRooms()
  }, [])

  const listRooms = () => {
    if (props.rooms.length !== 0) {
      return (
        <RoomList>
            { props.rooms.map( r =>
          <Room {...r} />
              )}
        </RoomList>
      )
    }
  }
  // if(!props.rooms) return null
  return (
    <>
    <div>
      <Header>Your Rooms</Header>
      <Center>
        <Button onClick={() => setToggleForm(!toggleForm)}>
          {toggleForm ? <div>Exit</div> : <div>Add Room</div>}
        </Button>
      </Center>
      {toggleForm ? <RoomForm addRoom={props.addRoom} toggle={setToggleForm} /> : ''}
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