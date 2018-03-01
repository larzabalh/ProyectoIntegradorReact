import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component{

	saludar = ()=>{
		alert('hello word')
	}

	render(){

		return(
			<button className={this.props.className} onClick={this.props.saludar}>
				{ this.props.btnName }
			</button>
			
		)
	}
}

Button.propTypes = {
className: PropTypes.string.isRequired,
onClick: PropTypes.func,
btnName:PropTypes.string.isRequired,
};

export default Button;