import React, {useState, useEffect}  from 'react';
import { RoutineConsumer } from '../../providers/RoutineProvider';
import RoutineForm from './RoutineForm';

import Moment from 'react-moment';

import { RoutineWrap, Routines, ButtonWrap, Button } from '../../styles/PlantPageElements'
import { FormHeader, FormHr, Center } from '../../styles/RoomStyles'
import { Modal } from 'semantic-ui-react'

const Routine = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  const [close, setClose] = useState(false)

  useEffect (() => {
    props.getRoutines(props.plant_id, props.id)
  }, [props.routine])

  const editView = () => {
    return (
      <>
        <RoutineForm 
        {...props}
        toggleEdit={setToggleEdit}
        />
      </>
    )
  }

  if (!props.routines) return null
  return (
    <>
      <ul>
        
        {
          <RoutineWrap>
          <Routines>Time:
             <Moment format='H:MM A'>{props.routine_time}</Moment>
          </Routines>
          <Routines>
            Action: {props.action} -
            Sunday: {props.sunday ? 'true' : 'false'}
          </Routines>
          <Routines>
            Monday: {props.monday ? 'true' : 'false'} -
            Tuesday: {props.tuesday ? 'true' : 'false'}
          </Routines>
          <Routines>
            Wednesday: {props.wednesday ? 'true' : 'false'} -
            Thursday: {props.thursday ? 'true' : 'false'} 
          </Routines>
          <Routines>
          Friday: {props.friday ? 'true' : 'false'} -
          Saturday: {props.saturday ? 'true' : 'false'}
          </Routines>
          </RoutineWrap>
        }
        <Modal
          trigger={<Button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close' : 'Edit'}</Button>}
          toggleEdit={setToggleEdit}
          open={toggleEdit}
          onClose={setClose}
        >
          <FormHeader>Edit Routine</FormHeader>
          <FormHr />
          <Modal.Content>{editView()}</Modal.Content>
        </Modal>   
            <Button onClick={() => props.deleteRoutine(props.plant_id, props.id)}>Delete</Button>
      </ul>
    </>
  )
}

const ConnectedRoutinePage = (props) => (
  <RoutineConsumer>
    {
      value => (
        <Routine 
          {...props}
          {...value}
        />
      )
    }
  </RoutineConsumer>
)

export default ConnectedRoutinePage;