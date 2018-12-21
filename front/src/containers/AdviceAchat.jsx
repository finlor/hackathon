import React from 'react';
import "./AdviceAchat.css";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class AdviceAchat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [{ "id": 1, "image": "./images/Copie de johannes-plenio-262511-unsplash.jpg", "titre": "Prolongement garanties matériels", "texte": "Afin de s'assurer de la fiabilité du matériel il est possible de prolonger la garantie de vie du matériel et de demander à l'étendre à 10 ans afin de s'assurer de la pérennité de celuici" },
        { "id": 2, "image": "./images/Copie de kotagauni-srinivas-481125-unsplash.jpg", "titre": "Disponibilité des pièces détachées sur du long terme.", "texte": "Afin de s'assurer de pouvoir réparer le matériel le client peut demander un maintien des pièces détachés pendant une durée de 10 ans ou supérieur" },
        { "id": 3, "image": "./images/Copie de shane-aldendorff-587930-unsplash.jpg", "titre": "Comparer les bilans carbones et coûts énergétiques des produits.", "texte": "Afin de s'assurer de pouvoir réparer le matériel le client peut demander un maintien des pièces détachés pendant une durée de 10 ans ou supérieur" },
        { "id": 4, "image": "./images/cytonn-photography-604680-unsplash.jpg", "titre": "Se poser la question de la nécessité absolue ou non de changer de matériel", "texte": "Afin de s'assurer de pouvoir réparer le matériel le client peut demander un maintien des pièces détachés pendant une durée de 10 ans ou supérieur" }]
    }
  };

  render() {

    return (
      <div className='AdviceAchat'>
        <div className="backgroundNews">
          <Card inverse>
            <Container>
              <Row className="newsRow">
                {this.state.news.map(carteNews => {
                  return (
                    <Col key={carteNews.id} className="hit" lg={6}>
                      <NavLink to={`/article`} className="linkNav"><div className="div-wrapper">
                        <CardImg width="100%" src={carteNews.image} alt="img1" />
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
  };
}

export default AdviceAchat;
