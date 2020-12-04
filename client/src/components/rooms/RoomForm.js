import React, {useState, useEffect} from 'react';

import {AuthConsumer} from '../../providers/AuthProvider'

import { Wrapper, Form, Button, FormInput } from '../../styles/RoomFormStyles'



const RoomForm = (props) => {
  const [name, setName] = useState("");
  const [sun, setSun] = useState("");

  useEffect(() => {
    if (props.room) {
      setName(props.room.name)
      setSun(props.room.sun)
    }
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSunChange = (e) => {
    setSun(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.room) {
      props.updateRoom(props.room.id, {name: name, sun: sun, user_id: props.user.id})
      props.toggleEdit(false)
    } else {
      props.addRoom({ name, sun, user_id: props.user.id})
      props.toggle(false)
    }
  }
 
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Room Name"
          placeholder="Room Name"
          name="name"
          required
          onChange={handleNameChange}
          value={name}
        />
        <FormInput
          label="Room's Sun Amount"
          placeholder="Does this room get sun?"
          name="sun"
          required
          onChange={handleSunChange}
          value={sun}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  )
}

const ConnectedRoomForm = (props) => (
  <AuthConsumer>
    { value => <RoomForm {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedRoomForm;