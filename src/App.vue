<template>
  <div class="container">
    <tittle-bar tittle="Pandemic Simulator"></tittle-bar>
    <grid-form tittle="Please enter your desired 2-D grid size"></grid-form>
  </div>
</template>

<script>
import TittleBar from './components/TittleBar.vue'
import GridForm from './components/GridForm.vue'

export default {
  name: 'App',
  components: { TittleBar , GridForm },
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

div.container{
  position: absolute;
  width: 70%;
  left: 15%;
}
</style>
