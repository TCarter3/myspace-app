import React from "react";
import { Container, Header, Button, Icon, Card, Image, } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

class Home extends React.Component {
    state = { accounts: [], };

    componentDidMount() {
        axios.get('/api/accounts')
          .then( res => this.setState({ accounts: res.data, }))
      }
      
      sample = () => {
        const { accounts, } = this.state;
    
        if (accounts.length) {
          const index = Math.floor(Math.random() * accounts.length);
          return accounts[index];
        } else {
          return null;
        }
      }
      render() {
        const account = this.sample();
        if (account) {
          return (
              <div>
              <Container textAlign="center">
              <StyleLogo as='h3'>myspace 2.0</StyleLogo>
              <StyleHeaders as='h3'>find friends!</StyleHeaders>
              </Container>
             <StyleContainer>
              <Card key={account.id}>
                <Image src={account.avatar} />
                <Card.Content>
                  <Card.Header>
                    { account.first_name }
                  </Card.Header>
                  <Card.Description>
                    { account.bio }
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button color="red" icon basic>
                    <Icon name="thumbs down" />
                  </Button>
                  <Button color="green" icon basic>
                    <Icon name="thumbs up" />
                  </Button>
                </Card.Content>
              </Card>
              <Link to="/friends">
                <Button color="blue">
                  Friends
                </Button>
              </Link>
            </StyleContainer>
            </div>
          );
        } else {
          return <Header style={{color: "white"}} textAlign="center">That's it, you're friends with everyone who exists.. Your mother must be proud!</Header>
        }
      }
    };

    
const StyleContainer = styled(Container)`
    padding-top: 25px;
    text-align: center;
    
`;
const StyleHeader = styled(Header)`
    font-family: 'Titan One', cursive, ;
    font-size: 6rem;
    color: white;
    fill: black 50px ;
`;
const StyleLogo = styled(Header)`
    font-family: 'Knewave', cursive;
    font-size: 6rem;
    color: white;
    fill: black 50px ;
`;
const StyleHeaders = styled(Header)`
    font-family: 'Titan One', cursive, ;
    font-size: 2rem;
    color: white;
    
`;

export default Home;