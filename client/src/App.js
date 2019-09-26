import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Friends from "./components/Friends";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import { Switch, Route, } from "react-router-dom";


function App() {
  return (
    <>
    <NavBar />
    <FetchUser>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/friends" component={Friends} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register}/>
      <Route  component={NoMatch} />
    </Switch>
    </FetchUser>
    </>
  );
}

export default App;
