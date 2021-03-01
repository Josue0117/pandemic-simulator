<template>
  <tittle-bar tittle="Pandemic Simulator"></tittle-bar>
</template>

<script>
import TittleBar from './components/TittleBar.vue'

export default {
  name: 'App',
  components: { TittleBar },
}
</script>

<style>
body{
  margin: 0%;
  padding: 0%;
  background: #18191a;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  top: 0;
}
</style>
