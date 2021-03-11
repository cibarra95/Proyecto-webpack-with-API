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
            
            // Obtenemos la lista de pokemones incompleta
            const pokemonesAPI = response.data.results;
            //Pedimos la data completa de  todos los pokemones,
            // y guardamos los objetos 'promise' en una variable
            
            let promises = pokemonesAPI.map((pokemon) =>{
                // const url = pokemon.url;
                const { url }  = pokemon;            
            return axios.get(url).then(response => response.data);
        //    this.buildPokemonCard(pokemon)
            });
            //esperamos a que todas las promesas terminen
            Promise.all(promises)
            .then(objects => {
                console.log('Pokemones detallados',objects)
               const pokedex = new Pokedex(objects)
               pokedex.renderPokemonsAsCards()
    
            })   
            
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