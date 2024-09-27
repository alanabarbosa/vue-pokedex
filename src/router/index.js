import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../views/PokemonView.vue';
import PokemonList from '../views/PokemonList.vue';

const routes = [  
  {
    path: '/',
    name: 'pokemon',
    component: Pokemon,
  },
  {
    path: '/pokemon/:name',
    name: 'pokemonList',
    component: PokemonList,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
