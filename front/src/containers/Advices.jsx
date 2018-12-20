import React from 'react';
import "./Advices.scss";
import { Container, Row, Col } from 'reactstrap';

class Advices extends React.Component {
    render() {
        return (
            <Container className={"advices"}>
                <Row>
                    <Col><h1>Nos Conseils</h1></Col>
                </Row>
                <Row>
                    <Col lg="4"><img className={"conception"} src={"./images/conception.jpeg"}/></Col>
                    <Col lg="8">
                        <Row>
                            <Col lg="8" ><img className={"purchase"} src={"./images/purchase.jpg"}/> </Col>
                            <Col lg="4" ><img className={"use"} src={"./images/use.jpeg"}/> </Col>
                        </Row>
                        <Row>
                            <Col lg="4" ><img className={"reuse"} src={"./images/reuse.jpeg"}/> </Col>
                            <Col lg="8" ><img className={"destruction"} src={"./images/destruction.jpg"}/> </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Advices;
