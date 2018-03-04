import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../../image.js';
import Button from '../../button';



class MovieBox extends Component {

  render() {
    

    return (
          

            <div className="w3-card-4 col-lg-3 bloqueTwoMovies">
              <header className="w3-container w3-light-grey">
                <h3>{this.props.title}</h3>
              </header>
              <div className="w3-container">
                <Image src={this.props.src} className="w3-left w3-circle imgTwoMovies" alt="Avatar"/>
                <p className="fontTwoMovies">{this.props.descripcion}</p>
              </div>
              <Button className="btn btn-info btnMovieTwoMovies" btnName="AGREGAR A LA LISTA" icon="far fa-heart"/>
            </div>

        );
  }
}

export default MovieBox;