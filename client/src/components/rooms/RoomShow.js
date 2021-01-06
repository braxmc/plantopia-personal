import React, {useEffect, useState} from 'react'
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm';
import Plants from '../plants/Plants';

import { Button, Button1, Header, Gray, Exit, ExitWrap } from '../../styles/RoomShowElements'
import { Center, Hr, FormHeader, FormHr, BackLink } from '../../styles/RoomStyles'
import { Modal } from 'semantic-ui-react'


const RoomShow = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)
  
  const [close, setClose] = useState(false)

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
        <BackLink to='/profile'>Go Back</BackLink>
        <Header>{props.room.name}</Header>
        <Center>
          <Modal
            trigger={<Button onClick={() => setToggleEdit(!toggleEdit)}>Edit Room</Button>}
            toggle={setToggleEdit}
            open={toggleEdit}
            onClose={setClose}
          >
            <ExitWrap>
              <Exit onClick={() => setToggleEdit(!toggleEdit)}>
                ×
              </Exit>
            </ExitWrap>
            <FormHeader>Edit Room</FormHeader>
            <FormHr />
            <Modal.Content>
              {editView()}
            </Modal.Content>
          </Modal>
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