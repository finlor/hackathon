import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import NavBar from './contenaires/NavBar';

import Home from "./contenaires/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/"  component={Home} />
          </Switch>
      </div>
    );
  }
}



export default App;
