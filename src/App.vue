<template>
  <div class="container">
    <tittle-bar tittle="Pandemic Simulator"></tittle-bar>
    <grid-form @create-new-grid="createCustomGrid" tittle="Please enter your desired 2-D grid size"></grid-form>
    <img v-if="height == 0 && width ==0" src="./assets/virus3.jpg">
    <grid v-else :height="height" :width="width"></grid>
  </div>
</template>

<script>
import TittleBar from './components/TittleBar.vue'
import GridForm from './components/GridForm.vue'
import Grid from './components/Grid.vue'

export default {
  name: 'App',
  components: { TittleBar , GridForm , Grid },
  data() {
    return{
      height: 0,
      width:  0,
    };
  },
  methods: {
    createCustomGrid( inputHeight , inputWidth ) {
      this.height = inputHeight;
      this.width  = inputWidth;
    }
  },
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

img{
  position: absolute;
  top: 127.81px;
  width: 53%;
  left: 47%;
  height: 450px;
  border-radius: 15px;
}

td{
  border: solid 1px #48464e;
  border-radius: 5px;
  background: #242327;
  height: 30px;
}
</style>
