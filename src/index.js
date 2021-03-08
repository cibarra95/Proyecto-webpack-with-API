import './styles/main.scss';
// importamos los estilos de la carpeta styles

import Pokedex from './pokedex';
import axios from 'axios';
//const request = require('request')

// Traer todos los pokemones
const init = () => {
    const pokemonesAPI = [];
    // TODO: Consultar API

    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
        .then(function (response){
            //handle success
            console.log(response);
        })
        .catch(function (error) {
            // handled error
            console.log(error);
        });
        

    const pokemons = new Pokedex(pokemonesAPI);
    console.log(pokemons);
};
 
// Renderizar cada pokemon

// por pokemon vamos a activar un modal para visualizarlos

init();