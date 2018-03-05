import React, { Component } from 'react';
import ItemsSection from './components/cardsMovies/ItemsSection.js'
import TwoMovies from './components/TwoMoviesForRow/TwoMovies'
import MyPokemons from './components/MyPokemons/MyPokemons'



class App extends Component {
  render() {
    return (
      <div className="App">
        
      	<MyPokemons/>
        {/*<ItemsSection/>
        <TwoMovies/>*/}

      </div>
    );
  }
}

export default App;
