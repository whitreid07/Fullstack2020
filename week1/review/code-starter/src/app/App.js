import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './App.css';
import '../assets/index.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
    };
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        const pokemonArray = data.results.map((poke) => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
            .then((response) => response.json())
        });
        return Promise.all(pokemonArray);
      })
      .then((data) => {
        this.setState({
          pokemon: data,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Grid container spacing={1}>
          {
            this.state.pokemon.map((poke) => {
              console.log(poke);
              return (
                <Grid item>
                  <Card>
                    <Typography>{poke.name}</Typography>
                    <img alt={poke.name} src={poke.sprites.front_default} />
                  </Card>
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    );
  }
}
export default App;