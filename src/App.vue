<template>
  <div class="container">
    <tittle-bar tittle="Pandemic Simulator"></tittle-bar>
    <grid-form @create-new-grid="createCustomGrid" tittle="Please enter your desired 2-D grid size"></grid-form>
    <!---<img v-if="height == 0 && width == 0" src="./assets/virus3.jpg">
    <grid v-else :height="height" :width="width"></grid> 
    <pandemic-points @change-pnt-to-set="changePointToSet" v-if="height != 0 && width != 0"></pandemic-points> --->
    <grid 
      :height="height" 
      :width="width" 
      :pointType="pointType" 
      :simulationState="simulationState" 
      @change-simulation-state="changeSimulationState">
    </grid> 
    <pandemic-points 
      @change-pnt-to-set="changePointToSet" 
      @startSimulation="launchSimulation">
    </pandemic-points>
  </div>
</template>

<script>
import TittleBar from './components/TittleBar.vue'
import GridForm from './components/GridForm.vue'
import Grid from './components/Grid.vue'
import PandemicPoints from './components/PandemicPoints.vue'

export default {
  name: 'App',
  components: { TittleBar , GridForm , Grid , PandemicPoints },
  data() {
    return{
      height: 0,
      width:  0,
      pointType: null,
      simulationState: 'unlaunched',
    };
  },
  methods: {
    createCustomGrid( inputHeight , inputWidth ) {
      this.height = inputHeight;
      this.width  = inputWidth;
    },
    changeSimulationState( newState ) {
      this.simulationState = newState;
    },
    changePointToSet( pointType ) {
      this.pointType = pointType; 
      console.log(this.pointType);
    },
    launchSimulation() {
      this.simulationState = 'launched';
    },
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



button{
  height: 30px;
  background: #0553a0;
  border: solid 1px #2e83e4;
  border-radius: 5px;
  margin-right: 100px;
  color: white;
}

td{
  border: solid 1px #48464e;
  border-radius: 5px;
  background: #242327;
  height: 30px;
}
</style>
