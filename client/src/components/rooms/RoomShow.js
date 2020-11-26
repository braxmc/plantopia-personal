import React, {useEffect, useState} from 'react'
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm';
import Plants from '../plants/Plants';

import { Button, Button1, Header, Gray } from '../../styles/RoomShowElements'
import { Center, Hr} from '../../styles/RoomStyles'


const RoomShow = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    props.getRoom(props.match.params.id)
  }, [])

  const editView = () => {
    
    return (
      <>
        <RoomForm
        {...props}
        toggleEdit={setToggleEdit}
        />
      </>
    )
  }


  if (!props.room) return null
    return (
      <div>
      <Gray>
        {toggleEdit ? editView() : 
        <>
          <Header>{props.room.name}</Header>
        </>
        }
        <Center>
        <Button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Room' : 'Edit Room'}</Button>
        <Button1 onClick={() => props.deleteRoom(props.room.id)}>Delete</Button1>
        </Center>
        <Hr />
        </Gray>
        <div>
          <Plants room_id={props.room.id} />
        </div>
      </div>
    )
}

const ConnectedRoomShow = (props) => (
  <RoomConsumer>
    {
      value => (
        <RoomShow 
          {...props}
          {...value}
        />
      )
    }
  </RoomConsumer>
)

export default ConnectedRoomShow;