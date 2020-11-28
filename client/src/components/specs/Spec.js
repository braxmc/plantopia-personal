import React, {useState, useEffect} from 'react';
import { SpecConsumer } from '../../providers/SpecProvider';
import SpecForm from './SpecForm';

import { SpecsContainer, Button } from '../../styles/PlantPageElements';
import { Modal } from 'semantic-ui-react'
import { FormHeader, FormHr } from '../../styles/RoomStyles'

// import { Button } from '../../styles/SharedElements'

const Spec = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  const [close, setClose] = useState(false)

  useEffect(() => {
    props.getSpec(props.plant_id, props.id)
  }, [])

  const editView = () => {
    return (
      <>
        <SpecForm
          {...props}
          toggleEdit={setToggleEdit} 
 
        />
      </>
    )
  }

  if (!props.specs) return null
  return (
    <>
      <ul>
          {toggleEdit ? editView() :
            <>
              <SpecsContainer>
                Water Amount: {props.water} ||
                Ferilizer: {props.ferilizer}
              </SpecsContainer>
              <SpecsContainer>
                Sunlight: {props.sunlight } ||
                Termperature: {props.temperature}
              </SpecsContainer>
              <SpecsContainer>
                Humidity: {props.humidity} ||
                Soil: {props.soil} ||
                Size: {props.fullsize}
              </SpecsContainer>
              <SpecsContainer>
                Date Planted: {props.planting} ||
                Annual: {props.annual}
              </SpecsContainer>
              <SpecsContainer>
                Preannual: {props.perannual} ||
                Plant Growth: {props.plantgrowth}
              </SpecsContainer>
              <SpecsContainer>
                Re-Pot: {props.repot} ||
                Indoor: {props.indoor ? "✓" : "✗"} ||
                Outdoor: {props.outdoor ? "✓" : "✗"}
              </SpecsContainer>
            </>
          }
          <Modal
            trigger={<Button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close' : 'Edit'}</Button>}
            toggleEdit={setToggleEdit}
            open={toggleEdit}
            onClose={setClose}
          >
            <FormHeader>Edit Specification's</FormHeader>
            <FormHr />
            <Modal.Content>{editView()}</Modal.Content>
          </Modal>
          <Button onClick={() => props.deleteSpec(props.plant_id, props.id)}>Delete</Button>
      </ul>
    </>
  )
}

const ConnectedSpecsPage = (props) => (
  <SpecConsumer>
    {
      value => (
        <Spec
          {...props}
          {...value}
        />
      )
    }
  </SpecConsumer>
)

export default ConnectedSpecsPage;