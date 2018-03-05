import React, { Component } from 'react'


const MyItems = ({array}) => {
	return (
	    	<ol>
	         {array.map((item,index) =>
	            <li key={index}>{item} </li>
	         )}
	       </ol>
    	)
}
export default MyItems;
