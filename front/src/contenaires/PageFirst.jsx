import React, { Component } from 'react';
import "./PageFirst.scss";

class PageFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="PageFirst">
        <div className='image'>
          <img className='image_fond' src='http://www.galerie-imagine.fr/images/image-de-la-nature_1.jpg' alt='image' />
        </div>
        <div className='lien_vers_page'>
          <div className='element_link'>
            <p>
              diag
            </p>
          </div>
          <div className='element_link'>
            <p>
              conseil
            </p>
          </div>
          <div className='element_link'>
            <p>
              market
            </p>
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
          <h2>titre</h2>
 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium iste commodi officia tenetur quae maiores nesciunt provident. Dolores, nemo libero. Minima vitae odit repellat fugit corrupti fuga perferendis necessitatibus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium iste commodi officia tenetur quae maiores nesciunt provident. Dolores, nemo libero. Minima vitae odit repellat fugit corrupti fuga perferendis necessitatibus!

        </div>
      </div>
    );
  }
}

export default PageFirst;