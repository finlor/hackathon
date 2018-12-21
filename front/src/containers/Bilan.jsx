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
      <div className='entourage'>
          <h1 className='title'>Votre bilan</h1>
        <div className='entreprise'>
          <div className='fiche_salarier'>
              <p>Nom : EDF</p>
            <p>Secteur d'activité : Production énergétique</p>
              <p>Nombre de saliriés : 154 845</p>
              <p>Renouvelement équipement : Si nécessaire </p>
            <p>Bilan carbone : 42 ppm par salarié</p>
          </div>
          <div>
              <img className='imageBilan' src='./images/index.jpeg' alt='image'/>
          </div>
        </div>
        <hr/>
        <div className='conseil_perso'>
          <h2 className='title_second'>Conseils personnalisés</h2>

          <div className='conseil_liste'>
              <NavLink to='/achat' className='groopCard'>
              <img className={"conseil"} src={"./images/purchase.jpg"} />
              <div className='hoverImg'>
                  <p>Achat</p>
                <p>Gain carbone 9700/j</p>
                <p>Coût : 427541€</p>
              </div>
            </NavLink>
              <NavLink to='/achat' className='groopCard'>
            <img className={"conseil"} src={"./images/use.jpeg"} />
            <div>
              <div className='hoverImg'>
                <p>Utilisation</p>
                <p>Gain carbone 500/j</p>
                <p>Coût : 4520€</p>
              </div>
            </div>
            </NavLink>
              <NavLink to='/achat' className='groopCard'>
            <img className={"conseil"} src={"./images/reuse.jpeg"} />
            <div>
              <div className='hoverImg'>
                <p>Réemploi</p>
                <p>Gain carbone 1500/j</p>
                <p>Coût : 0€</p>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
        <div className='valid'>
          <NavLink to="/conseil">
            <button className="button_submit" type="button">
              Allez plus loin ...
                </button>
          </NavLink>
        </div>
        </div>
      </div>
    );
  }
}

export default Bilan;