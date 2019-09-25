import React from "react";
import Bush from "../images/Bush.jpg";
import { Link, } from "react-router-dom";
import { Container, Header, Image, Button, } from "semantic-ui-react";
import styled from "styled-components";

const NoMatch = () => (
    <>
    <StyleContainer>
        <StyleHeader as="h1">WHOA! Hold up there partner...</StyleHeader>
        <StyleHeader as="h1">This page don't exist!</StyleHeader>
    </StyleContainer>
    <br/>
    <br/>
    <div style={{display: "flex", justifyContent: "center"}}>
    <StyleImage src={Bush} alt="cowboy" />
    </div>
    <br/>
    <StyleContainer>
    <StyleHeader as="h1">You go on back home now, ya hear?</StyleHeader>
    <Link to="/">
    <Button inverted>Home</Button>
    </Link>
    </StyleContainer>
    </>
);

const StyleImage = styled(Image)`
    width: 225px;
    height: 300px;
    align-self: center;
`;

const StyleContainer = styled(Container)`
    padding-top: 25px;
    text-align: center;
    
`;

const StyleHeader = styled(Header)`
    font-family: 'Titan One', cursive;
    font-size: 3rem;
    color: white;

`;

export default NoMatch;