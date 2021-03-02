<template>
    <section>
        <div>
            <input 
                id="initialPts" 
                name="pointsToSet" 
                type="radio" 
                value="initial" 
                v-model="pointsToSet"
                @change="changePointToSet"
            />
            <label for="initialPts">Set initial infection points</label>
        </div>
        <div>
            <input 
                id="inmunePts" 
                name="pointsToSet" 
                type="radio" 
                value="inmune" 
                v-model="pointsToSet"
                @change="changePointToSet"
            />
            <label for="inmunePts">Set inmune points</label>
        </div>
        <div>
            <button @click="startSimulation">Simulate Pandemic</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return{
            pointsToSet: null,
        };
    },
    methods: {
        changePointToSet(){
            this.$emit( 'change-pnt-to-set' , this.pointsToSet );
        },
        startSimulation() {
            this.$emit( 'start-simulation' );
        }
    }
}
</script>

<style scoped>
section{
    padding: 60px;
    text-align: left;
    color: #a9a6b4;
    width: 42%;
}

div{
    margin-top: 10px;
}
</style>