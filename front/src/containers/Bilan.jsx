import React, { Component } from 'react';
import './Bilan.scss';
import { NavLink } from 'react-router-dom';

class Bilan extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='Bilan'>
        <div className='entreprise'>
          <h1 className='title'>Votre bilan</h1>
          <div className='fiche_salarier'>
            <p>Nom : EDF</p>
            <p>Secteur d'activité : Production énergétique</p>
            <p>Nombre de salirié : 5421</p>
            <p>Renouvelement équipement : fort</p>
            <p>Bilan carbone : 50 tCO2eq par salarié</p>
          </div>
        </div>
        <div className='conseil_perso'>
          <h2 className='title'>Conseils personnalisés</h2>
        </div>
        <div className='valid'>
          <NavLink to="/conseil">
            <button className="button_submit" type="button">
              Allez plus loin
                </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Bilan;