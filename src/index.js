import './styles/main.scss';
// importamos los estilos de la carpeta styles

import Pokedex from './pokedex';
import axios from 'axios';
'use strict';

// Traer todos los pokemones
const init = () => {
    // TODO: Consultar API

    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
        .then(response => {
            const pokemonesAPI = response.data.results;
            const pokedex = new Pokedex(pokemonesAPI);
          //  debugger;
            pokedex.renderPokemonsAsCards();
        })
        .catch(function (error) {
            // handled error
            alert('no funciono  ):');
            console.log(error);
        });
        

    

};
 
// Renderizar cada pokemon

// por pokemon vamos a activar un modal para visualizarlos

init();