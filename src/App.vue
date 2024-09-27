<template>
  <nav>
    <router-link to="/">Página Inicial</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
*,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;  
  background-color: #3498db;
}

h2 {
  text-transform: capitalize;
  font-size: 20px;
}

p {
  font-size: 18px;
  text-transform: capitalize;
}

img {
  max-width: 100%;
}

nav {
  padding: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
}
  .normal {
    background-color: #a8a878;
    box-shadow: 0 0 20px #a8a878;
    color: #fff;
  }

  .fire {
    background-color: #f08030;
    box-shadow: 0 0 20px #f08030;
    color: #fff;
  }

  .water {
    background-color: #6890f0;
    box-shadow: 0 0 20px #6890f0;
    color: #fff;
  }

  .electric {
    background-color: #f8d030;
    box-shadow: 0 0 20px #f8d030;
    color: #fff;
  }

  .grass {
    background-color: #78c850;
    box-shadow: 0 0 20px #78c850;
    color: #fff;
  }

  .ice {
    background-color: #98d8d8;
    box-shadow: 0 0 20px #98d8d8;

    color: #fff;
  }

  .ground {
    background-color: #e0c068;
    box-shadow: 0 0 20px #e0c068;
    color: #fff;
  }

  .flying {
    background-color: #a890f0;
    box-shadow: 0 0 20px #a890f0;
    color: #fff;
  }

  .ghost {
    background-color: #705898;
    box-shadow: 0 0 20px #705898;
    color: #fff;
  }

  .rock {
    background-color: #b8a038;
    box-shadow: 0 0 20px #b8a038;
    color: #fff;
  }

  .fighting {
    background-color: #c03028;
    box-shadow: 0 0 20px #c03028;
    color: #fff;
  }

  .poison {
    background-color: #a040a0;
    box-shadow: 0 0 20px #a040a0;
    color: #fff;
  }

  .psychic {
    background-color: #f85888;
    box-shadow: 0 0 20px #f85888;
    color: #fff;
  }

  .bug {
    background-color: #a8b820;
    box-shadow: 0 0 20px #a8b820;
    color: #fff;
  }

  .dark {
    background-color: #705848;
    box-shadow: 0 0 20px #705848;
    color: #fff;
  }

  .steel {
    background-color: #b8b8d0;
    box-shadow: 0 0 20px #b8b8d0;
    color: #fff;
  }

  .fragon {
    background-color: #7038f8;
    box-shadow: 0 0 20px #7038f8;
    color: #fff;
  }
</style>
