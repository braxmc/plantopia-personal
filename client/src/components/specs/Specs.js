import React, { useState, useEffect } from 'react';
import { SpecConsumer } from '../../providers/SpecProvider';
import Spec from './Spec';
import SpecForm from './SpecForm';

import { SpecButton, Info } from '../../styles/SpecElements';
import { FormHeader, FormHr, Center } from '../../styles/RoomStyles'
import { Modal } from 'semantic-ui-react'

const Specs = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  const [close, setClose] = useState(false)

  useEffect(() => {
    props.getSpecs(props.plant_id)
  }, [props.plant_id])

  const listSpecs = () => {
    if (props.specs.length !== 0) {
      return (
        <ul>
          { props.specs.map( s =>
            <Spec {...s} /> 
          )}
        </ul>
      )
    } else {
      return (<Info>No Specs</Info>)
    }
  }

  return (
    <>
      <Center>
        <Modal
          trigger={<SpecButton onClick={() => setToggleForm(!toggleForm)}>Add specs</SpecButton>}
          toggle={setToggleForm}
          open={toggleForm}
          onClose={setClose}
        >
          <FormHeader>Add Specification's</FormHeader>
          <FormHr />
          <Modal.Content>
            <SpecForm addSpec={props.addSpec} plant_id={props.plant_id} toggleForm={setToggleForm} />
          </Modal.Content>
        </Modal>
      </Center>
      {listSpecs()}
    </>
  )
}

const ConnectedSpecs = (props) => (
  <SpecConsumer>
    {
      value => (
        <Specs
          {...props}
          {...value}
        />
      )
    }
  </SpecConsumer>
)

export default ConnectedSpecs;