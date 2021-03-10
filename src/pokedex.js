// Almacenar el arreglo de pokemones
import axios from 'axios';
const POKEDEX_CONTAINER = document.getElementById("pokedex");

class Pokedex {
    constructor(pokemones = []){
        this.pokemones = pokemones;
    }
    
    buildPokemonCard(pokemon){
        const pokeContainer = document.createElement("div");
        const pokeImage = document.createElement("img");
        const pokeBody = document.createElement("div");
        const pokeTitle = document.createElement("h4");
        const pokeModalToggle = document.createElement("button");

        pokeContainer.classList.add("card", "custom-card");
        if(pokemones.types.length > 1){
            pokeContainer.style.backgroundImage = `linear-gradient(45deg, ${pokemon.types
                .map((type) => `var(--${type})`)
                .join(", ")})`
        }
        pokeContainer.style.backgroundColor = `var(--${pokemon.types[0]})`;
        pokeImage.classList.add("card-img-top");
        pokeBody.classList.add(
            "card-body",
            "d-flex",
            "flex-column",
            "align-items-center"
        );
        pokeTitle.classList.add("card-title");
        pokeModalToogle.classList.add("btn", "btn-secundary");

        pokeImage.src = pokemon.art_url;
        pokeImage.alt = `${pokemon.name} Image`;
        pokeTitle.innerHTML = `${pokemon.name} <span class="badge badge-dark">${pokemon.pkdx_id}</span>`;
        pokeModalToggle.textContent = SHOW_MORE;

        pokeModalToggle.setAttribute("data-id-pokemon", pokemon._id);
        pokeModalToggle.setAttribute("data-toggle", "modal");
        pokeModalToggle.setAttribute("data-target", "#pokeDetailInformacion");

        pokeBody.appendChild(pokeTitle);
        pokeBody.appendChild(pokeModalToggle);
        pokeContainer.appendChild(pokeImage);
        pokeContainer.appendChild(pokeBody);
        return pokeContainer;
    }
    renderPokemonsAsCards(){
        let pokemonObjects = [];
        this.pokemones.map((pokemon) =>{

            // const url = pokemon.url;
            const { url }  = pokemon;
            

            axios.get(url)
                .then( response => pokemonObjects.push( response.data))
                .catch( error => console.log(error));
        
    //    this.buildPokemonCard(pokemon)
    });
        console.log(pokemonObjects);
        POKEDEX_CONTAINER.innerHTML = "";
        pokemonCards.map((pokemon) => POKEDEX_CONTAINER.appendChild(pokemon));
    }
      
    }    


export default Pokedex;