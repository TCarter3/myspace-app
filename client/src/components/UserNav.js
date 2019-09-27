import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Navbar, Nav, Dropdown, Form, FormControl, Button, OverlayTrigger, } from "react-bootstrap";

class UserNav extends React.Component {

    render() {
        const renderTooltipDiscover = props => (
            <h5
              {...props}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Discover new friends!
            </h5>
          );

          const renderTooltipFriends = props => (
            <h5
              {...props}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              See all of your current friends!
            </h5>
          );

          const renderTooltipPost = props => (
            <h5
              {...props}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Make a post for your friends to see!
            </h5>
          );
        return(

    <Navbar bg="dark" variant="dark">
        <OverlayTrigger
    placement="top-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipDiscover}>
    <Navbar.Brand href="/">Discover</Navbar.Brand> 
  </OverlayTrigger>
  <OverlayTrigger
    placement="top-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipFriends}>
        <Navbar.Brand href="/friends">Friends</Navbar.Brand> 
  </OverlayTrigger>
  <OverlayTrigger
    placement="top-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipPost}>
        <Navbar.Brand href="#">Post</Navbar.Brand>
  </OverlayTrigger>
        <Nav className="mr-auto">
            <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
                <DropdownButton inverted id="dropdown-basic-button" title="Username">
                    <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
                </DropdownButton>
    </Navbar>
        );
    };
    

};

export default UserNav;
