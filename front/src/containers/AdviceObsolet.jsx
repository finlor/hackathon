import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './AdviceObsolet.scss';

class AdviceObsolet extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="adviceobsolet">
        <Container>
          <Row className="articletotal">
            <Col className="image" sm={3}>

            </Col>
            <Col className="article" sm={9}>
              <h1 className="titre">Revente du matériel obsolète sur notre MarketPlace</h1>
              <p className="paragraphe">Si votre entreprise ne souhaite pas réutiliser son matériel considéré comme obsolète, il est vivement encouragé de revendre votre matériel auprès d’une PME. Il s’agit d’une solution avantageuse pour celles-ci, notamment pour les start-up dont un grand nombre possède un budget annuel plus ou moins limité.
    <br/>
    Considéré comme créateur de valeur pour les CCI, celles-ci permettent aux PME de profiter d’avantages fiscaux et aux start-up de prix attractifs.
    <br />
    À travers notre Marketplace, vous pourrez bénéficier de notre réseau d’entreprises et ainsi faciliter vos démarches de reconditionnement.
</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdviceObsolet;