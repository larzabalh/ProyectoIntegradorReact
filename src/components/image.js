import React, { Component } from 'react'
import PropTypes from 'prop-types';


const Image = ({src,className,alt}) => {
	
		return(
			
			<div>

			<img src={src} className={className} alt={alt}/>

			</div>

			
		)
	}

Image.propTypes = {
src: PropTypes.string.isRequired,

};
export default Image;