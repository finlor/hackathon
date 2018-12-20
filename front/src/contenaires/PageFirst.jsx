import React, { Component } from 'react';
import "./PageFirst.scss";
import { Link } from "react-router-dom";


class PageFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="PageFirst">
        <div className='image'>
          <img className='image_fond' src='./images/Couverture.jpg' alt='image' />
        </div>
        <div className='lien_vers_page'>
          <div className='element_link'>
            <img className='logo' src='./images/writing.png' alt='image' />
            <h5>Diagnostic</h5>

            <p className='paraTaille'>
              Notre outil d’évaluation vous renseigne sur votre émission de CO2 à travers vos outils numérique.
            </p>
            <Link className='link' to='/diagnostic'>
              Go
            </Link>
          </div>
          <div className='element_link'>
            <img className='logo' src='./images/line-chart.png' alt='image' />
            <h5>Conseils</h5>
            <p className='paraTaille'>
              Nos différents conseils pour vous accompagner dans votre diminution d’émission de CO2 sont réunis à travers différentes thématiques.

            </p>
            <Link className='link' to='/conseil'>
              Go
            </Link>
          </div>
          <div className='element_link'>
            <img className='logo' src='./images/mobile-shopping.png' alt='image' />
            <h5> Market place</h5>
            <p className='paraTaille'>
              Nous mettons à votre disposition un lieu pour revendre votre matériel obsolète et ainsi nous aider à diminuer l’émission de CO2 ensemble.
            </p>
            <Link className='link' to='/marketplace'>
              Go
            </Link>
          </div>
        </div>
        <div className='actualitées'>
          <div className='actualitées_item'>
            <h2>titre</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium iste commodi officia tenetur quae maiores nesciunt provident. Dolores, nemo libero. Minima vitae odit repellat fugit corrupti fuga perferendis necessitatibus!
          </div>
          <div className='actualitées_item'>
            <h2>titre</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium iste commodi officia tenetur quae maiores nesciunt provident. Dolores, nemo libero. Minima vitae odit repellat fugit corrupti fuga perferendis necessitatibus!

          </div>
        </div>
        <div className='il_parle_de_nous'>
          <h2>Les sites web spécialisés dans le futur numérique</h2>
          <div>
            <img className='' src='' alt='image' />
            <div>
              <p>"J'ai créé un parcours du e-commerçant"</p>
              <p> Article dans "journal des entreprises" - Juin 2018</p>
            </div>
          </div>
          <div>
            <h2>Les sites web spécialisés dans le futur numérique</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium iste commodi officia tenetur quae maiores nesciunt provident. Dolores, nemo libero. Minima vitae odit repellat fugit corrupti fuga perferendis necessitatibus!
            </div>
        </div>
      </div>
    );
  }
}

export default PageFirst;