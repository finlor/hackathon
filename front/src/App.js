import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import NavBar from './contenaires/NavBar';
import PageFirst from './contenaires/PageFirst';

import Home from "./contenaires/Home";
import Footer from './contenaires/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/"  component={Home} />
           <Route path="/pagefirst" component={PageFirst} />
            
          </Switch>
          <Footer/>
      </div>
    );
  }
}



export default App;
