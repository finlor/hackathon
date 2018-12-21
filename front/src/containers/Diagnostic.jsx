import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'reactstrap';


import './Diagnostic.scss';

class Diagnostic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      version: 0,
      url: '',
      hostSite: '',
      description: '',
      layerTypeID: '',
      share: false,
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputChangeCheckbox = this.inputChangeCheckbox.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  inputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  inputChangeCheckbox() {
    this.setState(prevState => ({
      share: prevState.share,
    }));
  }

  sendForm(event) {
    event.preventDefault();
  }

  render() {
    const {
      name,
      version,
      url,
      hostSite,
      description,
      share,
    } = this.state;

    return (
      <div className="AddLayer">
        <div className="content_add_layer">
          <Row>
            <h2 className="text_title">
              Evaluez l'émission de CO2 de votre entreprise
            </h2>
          </Row>
          <form onSubmit={this.sendForm}>
            <Row>
              <Col sm="6">
                <ul className="liste_input">
                  <li className="item_input">
                    <label className="label_input" htmlFor="hostSite">
                      <p>Nom de l'entreprise</p>
                      <input name="hostSite" id="hostSite" onChange={this.inputChange} value={hostSite} type="text" />
                    </label>
                  </li>
                  <li className="item_input">
                    <p>Quelle est la taille de votre entreprise ?</p>
                    <select name="categories" id="categories" onChange={this.inputChange}>
                      <option>0 à 3 salariés</option>
                      <option>4 à 10 salariés</option>
                      <option>11 à 30 salariés </option>
                      <option>Plus de 30 salariés</option>
                    </select>
                  </li>
                  <li className="item_input">
                    <p>A quelle fréquence renouvelez-vous votre parc automobile ?</p>
                    <select name="categories" id="categories" onChange={this.inputChange}>
                      <option>0 ou 1 ans</option>
                      <option>2 à 5 ans</option>
                      <option>6 à 15 ans</option>
                      <option>Plus de 16 ans</option>
                    </select>
                  </li>
                  <li className="item_input">
                    <p>Category</p>
                    <select name="categories" id="categories" onChange={this.inputChange}>
                      <option>test</option>
                      <option>dsrg</option>
                    </select>
                  </li>
                </ul>
              </Col>
              <Col sm="6">
                <ul className="liste_input">
                  <li className="item_input">
                    <p>Quel est votre secteur d’activités ?</p>
                    <select name="categories" id="categories" onChange={this.inputChange}>
                      <option>Agroalimentaire</option>
                      <option>Imprimerie</option>
                      <option>Banque</option>
                      <option>Electronique</option>
                      <option>Industrie</option>
                      <option>Imformatique</option>
                      <option>Service</option>
                      <option>Transport</option>
                      <option>BTP</option>
                      <option>Chimie</option>
                    </select>
                  </li>
                  <li className="item_input">
                    <p>A quelle fréquence renouvelez-vous votre équipement informatique ?</p>
                    <select name="categories" id="categories" onChange={this.inputChange}>
                      <option>Je privilégie la réparation</option>
                      <option>Tous les ans </option>
                      <option>Tous les 5 ans</option>
                      <option>Plus</option>
                    </select>
                  </li>
                  <li className="item_input">
                    <p>Combien avez-vous de téléphones portables d’entreprise ? </p>
                    <select name="categories" id="categories" onChange={this.inputChange}>
                      <option>0 ou 1 ans</option>
                      <option>2 à 5 ans</option>
                      <option>6 à 15 ans</option>
                      <option>Plus de 16 ans</option>
                    </select>
                  </li>
                  <li className="item_input">
                    <p>Category</p>
                    <select name="categories" id="categories" onChange={this.inputChange}>
                      <option>test</option>
                      <option>dsrg</option>
                    </select>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className='endPage'>
              <Col xs="6" className="text_align_center">
                <NavLink to="/pagefirst">
                  <button className="button_submit" type="button">
                    return
                  </button>
                </NavLink>
              </Col>
              <Col xs="6" className="text_align_center">
                <NavLink to="/bilan">
                  <button className="button_submit" type="button">
                    Valider
                </button>
                </NavLink>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}

export default Diagnostic;

