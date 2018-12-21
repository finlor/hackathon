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
import MarketPlace from './containers/MarketPlace';
import AdviceObsolet from './containers/AdviceObsolet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/pagefirst" component={PageFirst} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/marketplace" component={MarketPlace} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/conseil" component={Advices} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/Diagnostic" component={Diagnostic} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/bilan" component={Bilan} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/achat" component={AdviceAchat} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/article" component={AdviceObsolet} />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default App;
