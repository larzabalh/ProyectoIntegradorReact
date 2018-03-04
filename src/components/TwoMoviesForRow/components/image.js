import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component{



	render(){

		return(
			
			<div>

			<img src={this.props.src} className="img"/>

			</div>

			
		)
	}
}

Image.propTypes = {
src: PropTypes.string.isRequired,

};
export default Image;