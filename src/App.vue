<template>
  <div class="container">
    <tittle-bar tittle="Pandemic Simulator"></tittle-bar>
    <grid-form @create-new-grid="createCustomGrid" tittle="Please enter your desired 2-D grid size"></grid-form>
    <grid :height="height" :width="width"></grid>
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
      console.log(this.height + " " + this.width);
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
</style>
