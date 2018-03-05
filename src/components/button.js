import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button =({className,onClick,icon,btnName})=>{

		return(
			<button className={className} onClick={onClick}>
				<i className={icon}></i> { btnName }
			</button>
			
		)
	}

Button.propTypes = {
className: PropTypes.string.isRequired,
onClick: PropTypes.func,
btnName:PropTypes.string.isRequired,
};

export default Button;