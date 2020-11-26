import React, {useState, useEffect} from 'react';

import {AuthConsumer} from '../../providers/AuthProvider'

import Dropzone from 'react-dropzone'

import { UserWrap, ButtonWrap, Button, Name, ImgWrap, Img, Center, Header, Hr } from '../../styles/ProfileStyle'
import { Modal } from 'semantic-ui-react';
import { Wrapper, Form, FormInput } from '../../styles/RoomFormStyles'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const Profile = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState('')

  const [toggleEdit, setToggleEdit] = useState(false)

  const [close, setClose] = useState(false)

  useEffect(() => {
    const { auth: { user: { first_name, last_name, email, }, }, } = props;
    setFirstName(first_name)
    setLastName(last_name)
    setEmail(email)
    setFile(file)
  }, [props.auth.user])

 const handleFileChange = (e) => {
   setFile(e.target.value)
 }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.auth.updateUser(props.auth.user.id, { firstName, lastName, email, file })
    setToggleEdit(!toggleEdit)
    setFirstName('')
    setLastName('')
    setEmail('')
    setFile('')
  }

  const onDrop = (files) => {
    setFile(files[0])
  }
  
  const profileView = () => {
    const {auth: { user }, } = props;
    return (
      <UserWrap>
        <ImgWrap>
          <Img src={user.image || 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'} />
        </ImgWrap>
        <Name>
          {props.auth.user.first_name}, {props.auth.user.last_name}
        </Name>
      </UserWrap>
    )
  }

  const editView = () => {
    const {auth: { user } } = props;
    
    return (
      <Wrapper>
        <Form onSubmit={handleSubmit} toggleEdit={setToggleEdit}>
        <Center>
          <Dropzone
            onDrop={onDrop}
            multiple={false}
            onChange={handleFileChange}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </Center>
        <FormInput 
          label='First Name'
          name='firstName'
          value={firstName}
          required
          onChange={handleFirstNameChange}
        />
        <FormInput 
          label='Last Name'
          name='lastName'
          value={lastName}
          required
          onChange={handleLastNameChange}
        />
        <FormInput 
          label='Email'
          name='email'
          value={email}
          required
          onChange={handleEmailChange}
        />
        <Center>
          <Button type='submit'>update</Button>
        </Center>
      </Form>
      </Wrapper>
    )
  }



  return (
    <ButtonWrap>
      {toggleEdit ? editView() : profileView()}
      <Modal
        trigger={<Button onClick={() => setToggleEdit(!toggleEdit)}>
        {toggleEdit ? 'Exit' : 'Edit'}</Button>}
        toggle={setToggleEdit}
        open={toggleEdit}
        onClose={setClose}
      >
        <Header>Edit Profile</Header>
        <Hr />
        <Modal.Content>
          {editView()}
        </Modal.Content>
      </Modal>
    </ButtonWrap>
  )
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}



const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;
