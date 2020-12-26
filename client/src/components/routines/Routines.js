import React, {useState, useEffect} from 'react';
import { RoutineConsumer } from '../../providers/RoutineProvider';
import Routine from './Routine';
import RoutineForm from './RoutineForm';

import { Modal } from 'semantic-ui-react'
import { RoutineButton, Info, Border } from '../../styles/RoutineElements';
import { FormHeader, FormHr, Center } from '../../styles/RoomStyles'

const Routines = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  const [close, setClose] = useState(false)

  useEffect(() => {
    props.getRoutines(props.plant_id)
  }, [props.plant_id])

  const listRoutines = () => {
    if (props.routines.length !== 0) {
      return (
        <>
          { props.routines.map( r =>
            <Routine {...r} />
          )}
        </>
      )
    } else {
      return (
        <Border>
          <Info>No Specs Added</Info>
        </Border>
      )
    }
  } 

  return (
    <>
      <Center>
        <Modal
          trigger={<RoutineButton onClick={() => setToggleForm(!toggleForm)}>Add routine</RoutineButton>}
          toggle={setToggleForm}
          open={toggleForm}
          onClose={setClose}         
        >
          <FormHeader>Add Routine</FormHeader>
          <FormHr />
          <Modal.Content>
            <RoutineForm addRoutine={props.addRoutine} plant_id={props.plant_id} toggleForm={setToggleForm} />
          </Modal.Content>
        </Modal>
      </Center>
      {listRoutines()}
    </>
  )
}

const ConnectedRoutines = (props) => (
  <RoutineConsumer>
    {
      value => (
        <Routines 
          {...props}
          {...value}
        />
      )
    }
  </RoutineConsumer>
)

export default ConnectedRoutines;