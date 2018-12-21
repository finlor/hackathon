import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

import './MarketPlace.scss';
import {Card, CardImg, CardImgOverlay, CardTitle, Col, Container, Row} from "reactstrap";

class MarketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [{
        "id": 1,
        "image": "./images/ml350.jpg",
        "titre": "HPE ML350 G5",
        "texte": " Intel Xeon 2660 2.8Ghz - 32Go RAM - 3 disques SAS 15k tr/min 500Go - Mis en service en Mars 2014",
        "Prix": "1229.99€ HT"
      }, {
        "id": 2,
        "image": "./images/dl360.jpg",
        "titre": " HPE DL360 G6",
        "texte": "Intel Xeon 2210 2.6Ghz - 16Go RAM - 3 disques SAS 15k tr/min 300Go - Mis en service en Juin 2015",
        "Prix": "1679.99€ HT"
      }, {
        "id": 3,
        "image": "./images/rx2530.jpg",
        "titre": " Fujitsu rx2530 m4",
        "texte": " Intel Xeon 4110 2.4Ghz - 64Go RAM - 3 disques SAS 15k tr/min 900Go - Mis en service en Juin 2017",
        "Prix": "1929.99€ HT"
      }, {
        "id": 4,
        "image": "./images/t320.jpg",
        "titre": " Dell PowerEdge T320",
        "texte": "Intel Xeon 2110 2.8Ghz - 16Go RAM - 3 disques SAS 15k tr/min 300Go - Mis en service en Décembre 2012",
        "Prix": "849.99€ HT"
      }]

    }
  }

  render() {
    return (
        <div className='MarketPlace'>
          <div className="backgroundNews">
              <h1>Market Place</h1>
            <Card inverse>
              <Container fluid>
                <Row className="newsRow">
                  {this.state.news.map(carteNews => {
                        return (
                            <Col key={carteNews.id} className="hit" lg={4}>
                              <NavLink to={`/newszoom/`} className="linkNav">
                                <div className="div-wrapper">
                                  <CardImg width="100%" src={carteNews.image} alt="img1"/>
                                  <CardImgOverlay>
                                    <div className="backimg">
                                      <CardTitle><h2>{carteNews.titre}</h2></CardTitle>
                                    </div>
                                  </CardImgOverlay>
                                </div>
                              </NavLink>
                            </Col>
                        )
                      }
                  )}
                </Row>
              </Container>
            </Card>
          </div>
        </div>
    );
  }
}

export default MarketPlace;
