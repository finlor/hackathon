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
              <img src="http://jpfventures.com/wp-content/uploads/2015/03/facebook-5-256.png" alt="Facebook" width="14%" />
            </a>
            <a href="https://twitter.com">
              <img src="http://www.ago-formation.fr/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/twitter.svg" alt="Twitter" width="11%" />
            </a>
            <a href="https://www.linkedin.com">
              <img src="http://www.ago-formation.fr/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/linkedin.svg" alt="Linkedin" width="11%" />
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