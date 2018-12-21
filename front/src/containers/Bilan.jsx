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
            <p>Nombre de salirié : 5421</p>
            <p>Renouvelement équipement : fort</p>
            <p>Bilan carbone : 50 tCO2eq par salarié</p>
          </div>
          <div>
              <img className='imageBilan' src='./images/index.jpeg' alt='image'/>
          </div>
        </div>
        <div className='conseil_perso'>
          <h2 className='title_second'>Conseils personnalisés</h2>

          <div className='conseil_liste'>
            <NavLink to='/conseil' className='groopCard'>
              <img className={"conseil"} src={"./images/purchase.jpg"} />
              <div className='hoverImg'>
                <p>Geste</p>
                <p>Gain carbone 9700/j</p>
              </div>
            </NavLink>
            <NavLink to='/conseil' className='groopCard'>
            <img className={"conseil"} src={"./images/use.jpeg"} />
            <div>
              <div className='hoverImg'>
                <p>Geste</p>
                <p>Gain carbone 500/j</p>
              </div>
            </div>
            </NavLink>
            <NavLink to='/conseil' className='groopCard'>
            <img className={"conseil"} src={"./images/reuse.jpeg"} />
            <div>
              <div className='hoverImg'>
                <p>Geste</p>
                <p>Gain carbone 1500/j</p>
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