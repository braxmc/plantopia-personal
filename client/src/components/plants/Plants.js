import React, { useState, useEffect } from 'react';

import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import Plant from './Plant'

import { Button } from '../../styles/PlantsStyles'



const Plants = (props) => {
  const [toggleForm, setToggleForm] = useState(false)


  useEffect(() => {
    props.getPlants(props.room_id)
  }, [props.room_id])

  const listPlants = () => {
    if (props.plants.length !== 0) {
      return (
        <div>
          { props.plants.map( p =>
            <Plant {...p} />
          )}
        </div>
      )
    } else {
    }
  }
  // if(!props.rooms) return null
  return (
    <>
    <div className='plantpicture'>
      <Button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? 'Exit' : 'Add Plant'}</Button>
    </div>
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