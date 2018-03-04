import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../button';
import Image from '../../image.js';

class MovieBox extends Component {

  render() {
    

    return (
          <div className="w3-card-4 col-xs-12 col-md-3 bloqueItemsSections">
              <header className="w3-container w3-center">
                <h1>{this.props.title}</h1>
              </header>
            <div className="w3-container w3-center">
              <Image src={this.props.src} className="img" alt="Avatar"/>
            </div>
            <div className="w3-container w3-justify">
              <p className="ItemsSection">{this.props.descripcion}</p>
            </div>
              <Button className="btn btn-info btnMovieItemsSections" btnName="AGREGAR A LA LISTA" icon="far fa-heart"/>
            </div>
        );
  }
}

export default MovieBox;