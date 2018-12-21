import React from 'react';
import "./Advices.scss";
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Advices extends React.Component {
  render() {
    return (
      <Container className="advices">
        <Row>
          <Col><h1>Nos Conseils</h1></Col>
        </Row>
        <div className="menusAdvice">
          <Row>
            <Col className="Colonne" xs="12" lg="4">
              <Link className='link' to='/achat</Link>'>
                <img className={"conception"} src={"./images/conception.jpeg"} />
              </Link>
              <div className='hoverAdvicesImg policetitre concep'>
                <p>CONCEPTION</p>
              </div>
            </Col>
            <Col className="Colonne" xs="12" lg="8">
              <Row>
                <Col className="Colonne" xs="12" lg="8" >
                  <Link className='link' to='/achat'>
                    <img className={"purchase"} src={"./images/purchase.jpg"} />
                  </Link>
                  <div className='Img policetitre achat'>
                    <p>ACHAT</p>
                  </div>
                </Col>
                <Col className="Colonne" xs="12" lg="4" >
                  <Link className='link' to='/achat'>
                    <img className={"use"} src={"./images/use.jpeg"} />
                  </Link>
                  <div className='Img policetitre uti'>
                    <p>UTILISATION</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="Colonne" xs="12" lg="4" >
                  <Link className='link' to='/achat</Link>'>
                    <img className={"reuse"} src={"./images/reuse.jpeg"} />
                  </Link>
                  <div className='Img policetitre reut'>
                    <p>REUTILISATION</p>
                  </div>
                </Col>
                <Col className="Colonne" xs="12" lg="8" >
                  <Link className='link' to='/achat</Link>'>
                    <img className={"destruction"} src={"./images/destruction.jpg"} />
                  </Link>
                  <div className='Img policetitre dest'>
                    <p>DESTRUCTION</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Advices;
