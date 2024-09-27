<template>
  <section v-if="pokemons" id="pokemons">
    <div class="container">
      <div v-for="pokemon in pokemons" 
      :key="pokemon.name" >
        <article :class="pokemon.type[0].type.name">        
            <span :style="{ background: pokemon.color }">{{ pokemon.id}}</span>
            <h2 v-if="pokemon.name" class="pokemon_name" v-html="pokemon.name"></h2>
            <img :src="pokemon.image" alt="Imagem do Pokémon" v-if="pokemon.image"> 
            <ButtonLink @click="selectPokemon(pokemon.name)" 
              label="Exibir Detalhes" 
              :url="{ name: 'pokemonList', params: { name: pokemon.name } }" 
              customClass="btn-primary" />
          </article>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ButtonLink from '../components/ButtonLink.vue'

export default {
  components: {
    ButtonLink,
  },
  data() {
    return {};
  },
  computed: {
    pokemons() {
      return this.$store.getters.getPokemons;
    },
  },
  mounted() {
    this.$store.dispatch('fetchPokemons').then(() => {
     // this.loadPokemon();
      this.getSpecies();
    });
  },
  methods: {
    selectPokemon(name) {
      this.$store.dispatch('fetchPokemonDetails', name);
    },
    async getSpecies() {
      for (let pokemon of this.pokemons) {
        if (pokemon) {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`);
            pokemon.color = response.data.color.name;
          } catch (error) {
            console.error('Erro ao carregar as espécies do Pokémon:', error);
          }
        }
      }
    },
  },
};
</script>


<style scoped lang="scss">
#pokemons {
  .container {
      gap: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    .box_pokemons {
    }
    article {
      border: 1px solid #ccc;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 20px;
      h2 {
        text-transform: capitalize;
      }
      span {
        border-radius: 10px;
        width: 20%;
        padding: 2px;
      }
    }
  }
}
</style>