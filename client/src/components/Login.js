import React from "react";
import { Form, Container, Header, Segment, Button, } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import styled from "styled-components";
import { AuthConsumer, } from "../providers/AuthProvider";

class Login extends React.Component {
    state = { email: "", password: "", };

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, } = this.state;
        this.props.auth.handleLogin({ email, password, }, this.props.history);
    };


    render() {
        const { email, password } = this.state;

        return(
            <>
            <Container>
                <StyleContainer>
                    <StyleHeader as="h1">login</StyleHeader>
                </StyleContainer>
                <br/>
                <br/>

            <Form onSubmit={this.handleSubmit}>
                <Header style={{color: "white"}} as="h3">email:</Header>
                <Form.Input
                name="email"
                placeholder="email"
                autoFocus
                required
                type="email"
                value={email}
                onChange={this.handleChange}
                 />
                 <Header style={{color: "white"}} as="h3">password:</Header>
                <Form.Input
                name="password"
                placeholder="password"
                autoFocus
                type="password"
                required
                value={password}
                onChange={this.handleChange}
                 />

            <Segment textAlign='center' basic>
                <Button primary inverted type='submit'>Submit</Button>
            </Segment>

            </Form>
            </Container>
            </>
        );
    };
};

export default class ConnectedLogin extends React.Component {
    render() {
      return (
        <AuthConsumer>
          { auth => <Login {...this.props} auth={auth} />}
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
