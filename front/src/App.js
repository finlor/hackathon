import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import NavBar from './containers/NavBar';
import PageFirst from './contenaires/PageFirst';

import Home from "./containers/Home";
import Footer from './contenaires/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pagefirst" component={PageFirst} />
          <Route path="/marketplace" component={PageFirst} />
          <Route path="/diagnostic" component={PageFirst} />
          <Route path="/conseil" component={PageFirst} />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default App;
