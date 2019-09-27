import React from "react";
import { Header, Card, Image, Divider, Container, } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";
import UserNav from "./UserNav";

class Friends extends React.Component {
    state = { accounts: [], };
  
    componentDidMount() {
      axios.get('/api/friends')
        .then( res => this.setState({ accounts: res.data, }) );
    }
  
    render() {
      const { accounts, } = this.state;
      return (
          <>
          <StyleHeader as="h1">
              f r i e n d s:
          </StyleHeader>
          <br/>
          <Container>
            <UserNav />
        <Card.Group itemsPerRow={4}>
          { accounts.map( account =>
            <Card key={account.id}>
              <Image src={account.avatar} />
              <Card.Content>
                <Divider />
                <Card.Header>
                  { account.first_name }
                </Card.Header>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
        </Container>
        </>
      )
    }
  }

const StyleHeader = styled(Header)`
    font-family: 'Big Shoulders Text', cursive;
    font-size: 6rem;
    color: white;
    text-align: center;
`;

export default Friends;