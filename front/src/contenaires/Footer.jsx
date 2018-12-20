import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='Footer'>
        <div className='element_footer'>
          <p>Facebook</p>
        </div>
        <div className='element_footer'>
          <p>Instagram</p>
        </div>
        <div className='element_footer'>
          <p>facebook</p>
        </div>
      </div>
    );
  }
}

export default Footer;