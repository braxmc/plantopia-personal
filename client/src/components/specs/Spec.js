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
    props.getSpecs(props.plant_id, props.id)
  }, [props.spec])

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
                Water: {props.water}
              </SpecsContainer>
              <SpecsContainer>
                Soil: {props.soil}
              </SpecsContainer>
              <SpecsContainer>
                Date Planted: {props.planting}             
              </SpecsContainer>
              <SpecsContainer>
                Annual: {props.annual}
              </SpecsContainer>
              <SpecsContainer>
                Sunlight: {props.sunlight}
              </SpecsContainer>
              <SpecsContainer>
                Colors: {props.colors}
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