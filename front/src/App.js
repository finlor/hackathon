import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import NavBar from './containers/NavBar';
import PageFirst from './containers/PageFirst';
import Home from "./containers/Home";
import Footer from './containers/Footer';
import Advices from './containers/Advices'

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
          <Route path="/conseil" component={Advices} />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default App;
