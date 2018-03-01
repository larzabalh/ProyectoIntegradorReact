import React, { Component } from 'react';
import Button from './button';

import './App.css';

//No funciona el onClick del boton

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Button className="btn btn-info" onClick={()=>this.saludar()} btnName="AGREGAR A LA LISTA"/>

      </div>
    );
  }
}

export default App;
