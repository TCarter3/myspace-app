import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import styled from "styled-components";
import { Button, Form, Header, Container, Segment, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', name: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Your Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  render() {
    const { email, password, passwordConfirmation, name } = this.state;
    
    return (
<Container>
      <StyleContainer>
        <StyleHeader as='h1' textAlign='center'>register</StyleHeader>
        </StyleContainer>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Username"
            required
            autoFocus
            name='name'
            value={name}
            placeholder='Username'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Container>
    )
  }
}

export default class ConnectedRegister extends React.Component {
    render() {
      return (
        <AuthConsumer>
          { auth => <Register { ...this.props } auth={auth} /> }
        </AuthConsumer>
      )
    }
  }

  const StyleContainer = styled(Container)`
    padding-top: 25px;
    text-align: center;
    
`;

  const StyleHeader = styled(Header)`
    font-family: 'Titan One', cursive,;
    font-size: 6rem;
    color: white;
    fill: black 50px ;
`;