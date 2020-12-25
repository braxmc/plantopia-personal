import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";

import { Form, BgWrapper, Header, ButtonWrapper, FormInput, Button, Img, HomeBg } from '../../styles/FormElements';

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.handleLogin({ email, password }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <BgWrapper>
        <Header>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            autoFocus
            required         
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <FormInput
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <ButtonWrapper>
            <Button primary type='submit'>Submit</Button>
          </ButtonWrapper>
        </Form>
      </BgWrapper>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}