import { createStore } from 'vuex';
import pokemonModule from '@/pokemon.js';

const store = createStore({
  modules: {
    pokemon: pokemonModule,
  },
});

export default store;