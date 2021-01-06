import React, { useEffect, useState }from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm'
import Routines from '../routines/Routines';
import Specs from '../specs/Specs'

import { Modal } from 'semantic-ui-react'

import { Button } from '../../styles/SharedElements';

import { PlantWrap, PlantInfo, Info, Image, ButtonWrap, InfoTitle, RightWrap, LeftWrap, Line, InfoTitle1, Info1, Line1, BackLink, LinkWrap, Exit, ExitWrap } from '../../styles/PlantPageElements';
import { FormHeader, FormHr } from '../../styles/RoomStyles'

const PlantPage = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  const [open, setOpen] = useState(true)
  const [close, setClose] = useState(false)

  useEffect (() => {
    props.getPlant(props.location.state.room_id, props.match.params.id)
  }, [])

  const editView = (props) => {
    return (
      <>
        <PlantForm 
        {...props}
        toggleEdit={setToggleEdit}
        />
      </>
    )
  }

  if (!props.plant) return null
  return (
<>
      <LinkWrap>
        <BackLink to='/rooms/:id'>Go Back</BackLink>
      </LinkWrap>
<PlantWrap>
      <RightWrap>
        <InfoTitle1 InfoTitle>{props.plant.name}</InfoTitle1>
        <Info1>{props.plant.species}</Info1>
        <Image src={props.plant.image || '/images/plant.svg'} />
              <ButtonWrap>
                <Modal
                  trigger={<Button onClick={() => setToggleEdit(!toggleEdit)}>Edit</Button>}
                  toggleEdit={setToggleEdit}
                  open={toggleEdit}
                  onClose={setClose}
                >
                  <ExitWrap>
                    <Exit onClick={() => setToggleEdit(!toggleEdit)}>
                      ×
                    </Exit>
                  </ExitWrap>
                  <FormHeader>Edit Plant</FormHeader>
                  <FormHr/>
                  <Modal.Content>
                    <PlantForm {...props} toggleEdit={setToggleEdit}/>
                  </Modal.Content>
                </Modal>
                <Button onClick={() => props.deletePlant(props.plant.room_id, props.plant.id)}>Delete</Button>
              </ButtonWrap>
              <Line1 />
      </RightWrap>
      <LeftWrap>
        <PlantInfo>
          
          {toggleEdit ? 
            editView() 
            : 
            <>
              <InfoTitle>{props.plant.name}</InfoTitle>
              <Info>{props.plant.species}</Info>
              {/* <Info>{props.plant.colors}</Info> */}
            </>
          }

        </PlantInfo>
        <Specs plant_id={props.plant.id} />
        {/* <Line /> */}
        <Routines plant_id={props.plant.id} />
      </LeftWrap>
    </PlantWrap>
</>
  )
 
}

const ConnectedPlantPage = (props) => (
  <PlantConsumer>
    {
      value => (
        <PlantPage 
          {...props}
          {...value}
        />
      )
    }
  </PlantConsumer>
)

export default ConnectedPlantPage;