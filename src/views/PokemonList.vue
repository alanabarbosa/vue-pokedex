<template>
    <div class="pokemon-details" 
    v-if="pokemon"
    :class="pokemon.type[0].type.name ">
        <div class="container">
            <h2>{{ pokemon.name }}</h2>
            
            <div class="grid-1">
                <div class="box_abilities">
                <p><strong>Abilities: </strong></p>
                <div class="abilities" 
                     v-for="(item) in pokemon.abilities" 
                     :key="item.ability.name">
                    <p>{{ item.ability.name }}</p>
                </div>               
            </div>
            <div class="box_info">
                <p><strong>Height:</strong> {{ pokemon.height / 10 }} m</p> 
                <p><strong>Weight:</strong> {{ pokemon.weight / 10 }} kg</p>
            </div> 
            <div class="box_type">
                <strong>Type:</strong> 
                <p v-for="type in pokemon.type" :key="type">
                    {{ type.type.name }}
                </p>
            </div>
            </div>

            <div v-if="pokemon.image">
                <img :src="pokemon.image" alt="Imagem do Pokémon" />
            </div> 

            <div class="box_stats">         
                <p><strong>Estatísticas: </strong></p>
                <div class="stats" 
                     v-for="(stats, index) in pokemon.stats" 
                     :key="index">
                    <p><strong>{{ stats.stat.name }}:</strong></p>
                    <div class="stat-bar">
                        <div class="stat-bar-inner" 
                             :style="{ width: stats.base_stat + '%', backgroundColor: 'red' }"></div>
                    </div>
                    <p>{{ stats.base_stat }}</p>
                </div>        
            </div>  

                
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    computed: {
        pokemon() {
            return this.$store.getters.getSelectedPokemon;
        },
        pokemonSpecies() {
            return this.$store.getters.getPokemonSpecies;
        },
    },
    methods: {
        ...mapActions(['fetchPokemonDetails', 'fetchPokemonSpecies']),

        selectPokemon(name) {
            this.fetchPokemonDetails(name).then(() => {
                if (this.pokemon) {
                    this.fetchPokemonSpecies(this.pokemon.id);
                }
            });
        },
        
        calculatePercentage(baseStat) {
            console.log(baseStat)
            const maxStat = 255; 
            return (baseStat / maxStat) * 100;
        }
    },
};
</script>

<style scoped lang="scss">
.pokemon-details {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
        h2 {
            grid-column: 1 / -1;
            font-size: 35px;
            padding: 20px 0;
        }
        .grid-1 {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        .box_stats {
            display: flex;
            flex-direction: column;
            text-align: left;
            .abilities,
            .stats,
            .info {
                display: flex;
                gap: 20px;
            }

            .stat-bar {
                width: 100%;
                background-color: #e0e0e0;
                height: 10px;
                margin: 5px 0;
                border-radius: 5px;
                overflow: hidden;

                .stat-bar-inner {
                    height: 100%;
                    transition: width 0.3s ease-in-out;
                }
            }
        }
    }
}
</style>
