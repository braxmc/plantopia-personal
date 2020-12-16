import React, { useState, useEffect } from 'react';

import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import Plant from './Plant'

import { Button, Row, Center } from '../../styles/PlantsStyles'
import { FormHeader, FormHr } from '../../styles/RoomStyles'
import { Modal } from 'semantic-ui-react'



const Plants = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  const [close, setClose] = useState(false)


  useEffect(() => {
    props.getPlants(props.room_id)
  }, [props.room_id])

  const listPlants = () => {
    if (props.plants.length !== 0) {
      return (
        <Row>
          { props.plants.map( p =>
            <Plant {...p} />
          )}
        </Row>
      )
    } else {
    }
  }
  // if(!props.rooms) return null
  return (
    <>
    <Center>
      <Modal
        trigger={<Button onClick={() => setToggleForm(!toggleForm)}>Add Plant</Button>}
        toggle={setToggleForm}
        open={toggleForm}
        onClose={setClose}
      >
        <FormHeader>Add Plant</FormHeader>
        <FormHr />
        <Modal.Content>
          <PlantForm addPlant={ props.addPlant} room_id={props.room_id} toggleForm={setToggleForm} />
        </Modal.Content>
      </Modal>
    </Center>
      {listPlants()}
    </>
  )
}

const ConnectedPlants = (props) => (
  <PlantConsumer>
    {
      value => (
        <Plants
          {...props}
          {...value}
        />
      )
    }
  </PlantConsumer>
)

export default ConnectedPlants;