import axios from './services/pokemonService';

const state = {
  pokemons: [],
  idPokemon: null,
  selectedPokemon: null,
  pokemonSpecies: null, // Para armazenar a espécie do Pokémon
};

const mutations = {
  setPokemons(state, pokemons) {
    state.pokemons = pokemons;
  },
  setSelectedPokemon(state, pokemon) {
    state.selectedPokemon = pokemon;
  },
  setIdPokemon(state, id) {
    state.idPokemon = id;
  },
  setPokemonSpecies(state, species) {
    state.pokemonSpecies = species;
  },
};

const actions = {
  async fetchPokemons({ commit }) {
    try {
      const response = await axios.get('pokemon?limit=50&offset=0');
      const pokemons = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const detailsResponse = await axios.get(pokemon.url);
          console.log(detailsResponse)
          const formattedId = detailsResponse.data.id.toString().padStart(3, '0');   
          return {
            name: pokemon.name,
            id: detailsResponse.data.id,
            image: `/pokemons/${formattedId}.png`,
            type: detailsResponse.data.types
          };
        })
      );
      commit('setPokemons', pokemons);
    } catch (error) {
      console.error('Erro:', error);
    }
  },

  async fetchPokemonDetails({ commit, dispatch }, name) {
    try {
      const response = await axios.get(`pokemon/${name}`);
      const formattedId = response.data.id.toString().padStart(3, '0');
      console.log(response.data)
      const selectedPokemon = {
        name: response.data.name,
        id: response.data.id,
        image: `/pokemons/${formattedId}.png`,
        type: response.data.types,
        abilities: response.data.abilities,
        height: response.data.height,
        weight: response.data.weight,
        stats: response.data.stats
      };
  
      commit('setSelectedPokemon', selectedPokemon);
      commit('setIdPokemon', response.data.id);
      await dispatch('fetchPokemonSpecies'); // Chama a ação para buscar a espécie do Pokémon
    } catch (error) {
      console.error('Erro ao buscar detalhes do pokemon', error);
    }
  },
  

  async fetchPokemonSpecies({ commit, state }) {
    try {
      if (state.idPokemon) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${state.idPokemon}/`);
        commit('setPokemonSpecies', response.data);
      } else {
        console.error('ID do Pokémon não definido.');
      }
    } catch (error) {
      console.error('Erro ao buscar espécies do Pokémon:', error);
    }
  },
};

const getters = {
  getPokemons: (state) => state.pokemons,
  getSelectedPokemon: (state) => state.selectedPokemon,
  getPokemonSpecies: (state) => state.pokemonSpecies, // Getter para a espécie do Pokémon
};

export default {
  state,
  mutations,
  actions,
  getters,
};
