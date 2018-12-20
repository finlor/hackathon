import React, { Component } from 'react';
import './Home.scss';
import { Link } from "react-router-dom";



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 86400 * 353 * 1017884
    };
  }
  componentDidMount() {
    let timer = setInterval(() => this.setState({
      time: this.state.time + 1017884
    }), 1000);
    console.log("start")
  };

  render() {
    return (
      <div className="home">
        <div className="titretransparent">
          <div className="intermediaire">
            <h1>EMISSIONS MONDIALES DE CO2</h1>
            <h2>DEPUIS LE 1<sup>ER</sup> JANVIER 2018 </h2>
            <h2>{this.state.time} kg</h2>
            <div className="agirlink">
              <Link className="linkcolor" to='/pagefirst'>Comment Agir...</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;