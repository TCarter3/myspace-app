import React from "react";
import { Container, Header, Icon, Card, Image, } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";
import { Navbar, Nav, Form, FormControl, Button, } from "react-bootstrap";
import UserNav from "./UserNav";


class Home extends React.Component {
    state = { accounts: [], };

    weLike = (id) => {
      const { accounts, } = this.state;
      axios.put(`/api/accounts/${id}`)
        .then( () => this.setState({ accounts: accounts.filter( a => a.id !== id ), }) )
    }


    weDislike = (id) => {
      const { accounts, } = this.state;
      this.setState({ accounts: accounts.filter( a => a.id !== id ), });
    }

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
        const account  = this.sample();
        const { accounts, } = this.state;
        if (account) {
          return (
              <div>
              <Container textAlign="center">
              <StyleLogo as='h3'>m y s p a c e  2.0</StyleLogo>
              <StyleHeaders as='h3'>f i n d &nbsp;  f r i e n d s !</StyleHeaders>
              </Container>
              <br/>
              <Container>
                <UserNav  />
              {/* <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Discover</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/friends">My Friends</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar> */}
              <Card.Group columns={2} itemsPerRow={4}>
              { accounts.map( account =>
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
                  <Button variant="danger" icon basic onClick={() => this.weDislike(account.id)}>
                    <Icon name="thumbs down" />
                  </Button>
                  <Button variant="success" icon basic onClick={() => this.weLike(account.id)}>
                    <Icon name="thumbs up" />
                  </Button>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
        </Container>
            </div>
          );
        } else {
          return <Header style={{color: "white"}} textAlign="center">That's it, you're friends with everyone who exists.. Your mother must be proud!</Header>
        }
      }
    };

    
const CenterContainer = styled(Container)`
    align-items: center !important;
`;
const StyleContainer = styled(Container)`
    padding-top: 25px;
    text-align: center !important;
`;
const StyleHeader = styled(Header)`
    font-family: 'Big Shoulders Text', cursive;
    font-size: 6rem;
    color: white;
    fill: black 50px ;
`;
const StyleLogo = styled(Header)`
    font-family: 'Big Shoulders Text', cursive;
    font-size: 6rem;
    color: white;
    fill: black 50px ;
`;
const StyleHeaders = styled(Header)`
    font-family: 'Big Shoulders Text', cursive;
    font-size: 2rem;
    color: white;
`;

export default Home;