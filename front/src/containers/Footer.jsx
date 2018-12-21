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
        <div className='Footer_display'>
          <div className='element_footer'>
            <ul>
              <li>Aide</li>
              <li>Documentations</li>
            </ul>
          </div>
          <div className='element_footer'>
            <ul>
              <li>A propos</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='element_footer'>
            <a href="https://www.facebook.com/">
              <img width="11%" className='logo_shar_footer' src="../../images/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com">
              <img width="11%" className='logo_shar_footer' src="../../images/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img  width="11%" className='logo_shar_footer' src="../../images/linkedin.svg" alt="Linkedin" />
            </a>
          </div>
        </div>
        <div className="signature">
          <p className="footerby">
            Made with
            <img src="https://www.freeiconspng.com/uploads/heart-png-26.png" alt="Heart" width="3%" />
            by Mojito Team
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;