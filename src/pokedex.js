// Almacenar el arreglo de pokemones
import axios from 'axios';
const SHOW_MORE = "Ver mas";
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
        if(pokemon.types.length > 1){
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
        pokeModalToggle.classList.add("btn", "btn-primary");

        pokeImage.src = pokemon.sprites.front_default;
        pokeImage.alt = `${pokemon.name} Image`;
        pokeTitle.innerHTML = `${pokemon.name} <span class="badge badge-dark">${pokemon.id}</span>`;
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
        POKEDEX_CONTAINER.innerHTML = "";

        const pokemonCards = this.pokemones.map((pokemon) => this.buildPokemonCard(pokemon));
        pokemonCards.map((pokemon) => POKEDEX_CONTAINER.appendChild(pokemon));
       
    }
      
}    


export default Pokedex;