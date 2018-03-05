import React, { Component } from 'react'
import axios from 'axios';
import MyInput from './components/MyInput.js';
import Button from '../button.js';
import MyItems from './components/MyItems';
import Image from '../image';


// Ejemplo llamado GET


class MyPokemons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      items: [],
      contador: 100,
      total_items:0,
      loading:false,
      imgPokemon:null,
    }
  }

  componentWillMount(){
    console.log('el componente sera montado')
}

componentDidMount(){
  //aca se ejecutan las llamadas AXIOS!
    console.log('el componente fue montado')
}

componentWillReceiveProps(newProps){
  //Si en un componente padre, cambian las props de un componente hijo
/*this.setState({
prop: newProps.prop
});*/
console.log('el componente recibe nuevas propiedaddes')
}

shouldComponentUpdate(writing, newState){
  console.log('anterior: ',this.state.inputValue)
  console.log('nuevo: ',newState)
  return (
        writing.prop != this.state.inputValue 
    )
};

componentWillUnmount(){
  console.log('el componente sera montado')
//Es llamado justo antes de que el componente sea removido del DOM,
};

  writing = e => {
    this.setState({
    inputValue: e.target.value,
    contador: this.state.contador -1,
})
}

  click = e => {
    axios.get('https://pokeapi.co/api/v2/pokemon/charmander').then(response => {
        console.log(response)
      })
    const { items, inputValue } = this.state//destructurar
    if(items.indexOf(inputValue)===-1){

      this.setState({
        items: [...this.state.items, inputValue],
        inputValue: '',
        contador : 100,
        total_items: this.state.total_items +1,
        loading:true,
        imgPokemon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf69aPwB6S_-n6ytth55u5XE58wJoXs0J_M_QqqXf3f3-170s',
      })
    }
    else{alert('el item ya esta cargado')}
     
      
    
  }

  vaciar = e => {

  if (window.confirm('esta seguro de vaciar?')){
      this.setState({
        items: [],
        total_items:0,
        contador : 100,
        })
      }
  }


  enter = e => {
    if (e.keyCode === 13) {
       /* alert('enter')*/
           this.click()
        }
      }


  render() {
    return (
      <div>
           <MyInput verdura="tomate" value={this.state.inputValue}  onChange={this.writing} onKeyUp={this.enter} />
           <p>CONTADOR: {this.state.contador}</p>
           <Button className="btn btn-primary" btnName="AGREGAR" onClick={this.click}/>
           <Button className="btn btn-danger" btnName="VACIAR" onClick={this.vaciar}/>
           <p>{this.state.total_items>0? `${this.state.total_items} Items en total`:""}</p>
           {!this.state.loading? <div>BUSCANDO POKEMON</div>:<Image src={this.state.imgPokemon} />}
           <MyItems array={this.state.items}/>
      </div>
    )
  }
}

export default MyPokemons