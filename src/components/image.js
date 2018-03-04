import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component{



	render(){

		return(
			
			<div>

			<img src={this.props.src} className={this.props.className} alt={this.props.alt}/>

			</div>

			
		)
	}
}

Image.propTypes = {
src: PropTypes.string.isRequired,

};
export default Image;