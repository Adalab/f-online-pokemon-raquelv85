import React, { Component } from 'react';
import './App.css';
import ListCard from './components/ListCard';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataTemp: [],
      dataFilter: [],
      filter: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);

  }



  componentDidMount() {

    var retrievedObject = localStorage.getItem('pokemons');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    if (this.getLocalStorage() === null) {
      this.apiFetch();
    } else {
      this.getLocalStorage();
    }
  }

  apiFetch() {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    let arrayPokemons = [];

    for (let i = 1; i < 26; i++) {
      fetch(url + i).then((response) => response.json()).then((pokemons) => {
        this.saveLocalStorage(pokemons, arrayPokemons, i)
      });

    }
  }

  saveLocalStorage(pokemon, arrayPokemons, i) {

    arrayPokemons[i] = pokemon
    localStorage.setItem('pokemons', JSON.stringify(arrayPokemons));
  }

  getLocalStorage() {
    console.log("entra en get")

    const getArrayPokemons = localStorage.getItem('pokemons');

    this.setState({
      dataTemp: JSON.parse(getArrayPokemons)
    })

    return getArrayPokemons;
  }

  handleInputChange(event) {

    const value = event.target.value;
    console.log(value)
    const getPokemons = this.state.dataTemp;

    const arrayFilter = getPokemons.filter((pokemon) => {
      if (pokemon != null) {
        return pokemon.name.includes(value.toLowerCase());
      }
    });

    this.setState({
      dataFilter: arrayFilter,
      filter: true
    })

  }


  render() {
    const { dataTemp, dataFilter, filter } = this.state;
    return (
      <div className="App">
        <Filter onChangeInput={this.handleInputChange}></Filter>
        {
          filter ? (
            <ListCard pokemons={dataFilter}></ListCard>
          ) : (
              <ListCard pokemons={dataTemp}></ListCard>
            )
        }
      </div>
    );
  }
}

export default App;
