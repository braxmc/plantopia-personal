import React, {useState, useEffect} from 'react';
import { RoutineConsumer } from '../../providers/RoutineProvider';
import Routine from './Routine';
import RoutineForm from './RoutineForm';

import { Button } from '../../styles/SharedElements';
import { Modal } from 'semantic-ui-react'
import { RoutineButton, Info, RoutinesWrap1 } from '../../styles/PlantPageElements';
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
        <ul>
          { props.routines.map( r =>
            <Routine {...r} />
          )}
        </ul>
      )
    } else {
      return (<Info>No Routines</Info>)
    }
  } 

  return (
    <>
      <Center>
        <Modal
          trigger={<RoutineButton onClick={() => setToggleForm(!toggleForm)}>{ toggleForm ? 'Exit' : 'Add routine' }</RoutineButton>}
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