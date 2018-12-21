import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import NavBar from './containers/NavBar';
import PageFirst from './containers/PageFirst';
import Diagnostic from './containers/Diagnostic';
import Bilan from './containers/Bilan';
import Home from "./containers/Home";
import Footer from './containers/Footer';
import Advices from './containers/Advices';
import AdviceAchat from './containers/AdviceAchat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pagefirst" component={PageFirst} />
          <Route path="/marketplace" component={PageFirst} />
          <Route path="/conseil" component={Advices} />
          <Route path="/achat" component={AdviceAchat} />
          <Route path="/Diagnostic" component={Diagnostic} />
          <Route path="/bilan" component={Bilan} />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default App;
