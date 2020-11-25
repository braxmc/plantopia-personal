import React, {useState, useEffect} from 'react';

import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm'
import Room from  './Room';

import { Modal } from 'semantic-ui-react'

import { Button, RoomList, Header, Center } from '../../styles/RoomStyles'


const Rooms = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  const [open, setOpen] = useState(true)
  const [close, setClose] = useState(false)

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
          <Modal
            trigger={<Button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? 'Exit' : 'Add Room'}</Button>}
            toggle={setToggleForm}
            open={toggleForm}
            onClose={setClose}
          >
            <Modal.Header>Add Plant</Modal.Header>
            <Modal.Content>
              <RoomForm addRoom={props.addRoom} toggle={setToggleForm} />
            </Modal.Content>
          </Modal>
        </Center>
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