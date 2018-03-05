import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieBox from './components/MovieBox.js';
import './TwoMovies.css';


var movies = [
						{
						title : "Superman es lo mas",
						src :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf69aPwB6S_-n6ytth55u5XE58wJoXs0J_M_QqqXf3f3-170s",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
						{
						title : "El Hombre Naranja",
						src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAc3JpcFBwPAWEngdIMKe79otYWba2bAoQfZ4kRvRxbkANmcH13w",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
						{
						title : "Cuatro Brazos",
						src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4VihZ0CAs529Bp9ror0CYzacY_DlzQqfPDyvVJpbKecGltKY",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
						{
						title : "Superman es lo mas",
						src :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf69aPwB6S_-n6ytth55u5XE58wJoXs0J_M_QqqXf3f3-170s",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
						{
						title : "El Hombre Naranja",
						src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAc3JpcFBwPAWEngdIMKe79otYWba2bAoQfZ4kRvRxbkANmcH13w",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
						{
						title : "Cuatro Brazos",
						src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4VihZ0CAs529Bp9ror0CYzacY_DlzQqfPDyvVJpbKecGltKY",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
					]

class TwoMovies extends Component{
		
		

	render(){

		return(
				<div>

				{movies.map((movie,index)=>{
				return  <MovieBox key={index} btnName="AGREGAR A FAVORITOS" src={movie.src} title={movie.title} descripcion={movie.descripcion} icon="far fa-heart"/>

				})}
				
				</div>
			
		)
	}
}

TwoMovies.propTypes = {
/*src: PropTypes.string.isRequired,*/

};

export default TwoMovies;