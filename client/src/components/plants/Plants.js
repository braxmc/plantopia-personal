import React, { useState, useEffect } from 'react';

import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import Plant from './Plant'

import { Button, Row, Center } from '../../styles/PlantsStyles'



const Plants = (props) => {
  const [toggleForm, setToggleForm] = useState(false)


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
      <Button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? 'Exit' : 'Add Plant'}</Button>
    </Center>
      {
        toggleForm ? 
        <PlantForm addPlant={ props.addPlant} room_id={props.room_id} toggleForm={setToggleForm} />
        :
        <></>
      }
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