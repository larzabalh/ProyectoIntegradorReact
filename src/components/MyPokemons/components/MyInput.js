import React, { Component } from 'react'

const MyInput =({value,onChange}) =>{
  

    return (
      <input value={value} type=""  onChange={onChange} className="style" />
    )
  }

export default MyInput