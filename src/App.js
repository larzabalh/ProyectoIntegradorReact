import React, { Component } from 'react';
import ItemsSection from './components/cardsMovies/ItemsSection'
import TwoMovies from './components/TwoMoviesForRow/TwoMovies'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        

        <ItemsSection type="list"/>
        <TwoMovies type="two"/>

      </div>
    );
  }
}

export default App;
