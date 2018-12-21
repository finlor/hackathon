import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Col, Container, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import './Newszoom.scss';

class Newszoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anounce: [{
        "id": 1,
        "image": "../images/ml350.jpg",
        "titre": "HPE ML350 G5",
        "texte": "Intel Xeon 2660 2.8Ghz - 32Go RAM - 3 disques SAS 15k tr/min 500Go - Mis en service en Mars 2014",
        "Prix": "1229.99€ HT"
      }]
    }
  }

  render() {
    return (
        <div className='MarketPlace'>
          <Container>

            {this.state.anounce.map(carteAnounce => {
                  return (
                      <Row className="anounceRow">
                          <Col sm={6}>
                            <img src={carteAnounce.image} alt="img1" className="zob"/>
                            <p className="textPrice"><strong>Prix : {carteAnounce.Prix}</strong></p>
                          </Col>
                          <Col sm={6}>
                            <p className="textAnounce">{carteAnounce.texte}</p>
                          </Col>
                      </Row>
                  )
                }
            )}

          </Container>
          <Container>
            <Row>
              <Col sm={12} className="zob">
          <button type="button" className="buttonVendor">Contactez le vendeur</button>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Newszoom;