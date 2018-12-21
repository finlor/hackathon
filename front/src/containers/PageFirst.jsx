import React, { Component } from 'react';
import "./PageFirst.scss";
import { Link } from "react-router-dom";


class PageFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 86400 * 353 * 1017884
    };
  }


  componentDidMount() {
    fetch('http://192.168.1.94:8000/category/1')
      .then(res => res.json())
      .then(data => console.log('la', data))
  }

  render() {
    return (
      <div className="PageFirst">
        <div className='image'>
          <p className='phrase_accroche'>"Un bel avenir pour demain"</p>
          
        </div>
        <div className='element_link_avant'>
          <h2>Article de presse</h2>
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
        </div>
        <div className='avant_actualitées'>
        <div className='fond_fond'>
          <h2>Article de presse</h2>
          <div className='actualitées'>
            <div className='actualitées_item'>
              <h4>La société s’empare de la sobriété numérique</h4>
              <a href='https://www.greenit.fr/2018/10/02/societe-sempare-de-sobriete-numerique/
'>
                <img className='image_actu' src='./images/Capture d’écran 2018-12-20 à 16.58.25.png' alt='image' />
              </a>
              <div >
                <a  href="https://www.facebook.com/">
                  <img className='logo_share' src="http://jpfventures.com/wp-content/uploads/2015/03/facebook-5-256.png" alt="Facebook" width="6%" />
                </a>
                <a  href="https://twitter.com">
                  <img className='logo_share' src="http://www.ago-formation.fr/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/twitter.svg" alt="Twitter" width="5%" />
                </a>
                <a  href="https://www.linkedin.com">
                  <img className='logo_share' src="http://www.ago-formation.fr/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/linkedin.svg" alt="Linkedin" width="5%" />
                </a>
              </div>
              </div>
            <div className='actualitées_item'>
              <h4>Un numérique de plus en plus vorace en énergie</h4>
              <a href='https://theshiftproject.org/article/pour-une-sobriete-numerique-rapport-shift/

'>
                <img className='image_actu' src='./images/Capture d’écran 2018-12-20 à 16.57.17.png' alt='image' />
              </a> 
              <div >
                <a href="https://www.facebook.com/">
                  <img className='logo_share' src="http://jpfventures.com/wp-content/uploads/2015/03/facebook-5-256.png" alt="Facebook" width="6%" />
                </a>
                <a href="https://twitter.com">
                  <img className='logo_share' src="http://www.ago-formation.fr/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/twitter.svg" alt="Twitter" width="5%" />
                </a>
                <a href="https://www.linkedin.com">
                  <img className='logo_share' src="http://www.ago-formation.fr/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/linkedin.svg" alt="Linkedin" width="5%" />
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='avant_il_parle_de_nous'>
          <h2>Ils parlent de nous ...</h2>
          <div className='il_parle_de_nous'>
            
            <div>
              
              <div className='il_parle_display'>
                
                <img className='image_il_parle' src='./images/Logo-Journal-des-Entreprises-600-400.jpg' alt='image' />
                <h3 className='h3_marge'>Les sites web spécialisés dans le futur numérique</h3>
                <div className='texte_parle_de_nous'>
                  <p>"E-commerce  : solution open source vs solutions de propriétaires"</p>
                  <p> Article dans "journal du net" - Juin 2018</p>
                </div>
              </div>
            </div>
            <div>
              
              <div className='il_parle_display'>
                
                <img className='image_il_parle' src='./images/JDN.png' alt='image' />
                <h3 className='h3_marge'>BtoGreen : Diminuer son bilan d’émission de CO2 avec un diagnostic complet et des conseils personnalisés</h3>
                <div className='texte_parle_de_nous'>
                  <p>"J'ai créé un parcours du e-commerçant"</p>
                  <p> Article dans "journal des entreprises" - Juin 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFirst;