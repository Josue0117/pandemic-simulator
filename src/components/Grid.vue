<template>
    <section>
        <header>New Simulation</header>
        <row
            v-for="oneRow in rows" 
            :key="oneRow">
        </row>
    </section>
</template>

<script>
import Row from './Row.vue'

export default {
    components: { Row },
    props: [ 'height' , 'width' , 'pointType' , 'simulationState' , 'gridCreated' ],
    data() {
        return{
            rows: ['apple', 'banana', 'orange'],
            grid: [],
        };
    },
    methods: {
        // TO DO: move to a helper.
        createGrid(){
            for(let i=0; i<this.height; i++) {
                const row = [];
                for(let j=0; j<this.width; j++) {
                    row.push('y'+i+'x'+j);
                }
                this.grid.push(row);
            }
            console.log(this.grid)
        },
        setGridStyle() {
            const divs = document.getElementsByClassName('cell');
            const width = 100 / this.width;
            divs.array.forEach(element => {
                element.style.width = '30%;'
            });
            console.log(width);
        },
    },
    updated: function() {
        if( this.gridCreated ){
            this.createGrid();
            this.setGridStyle();
        }
    },
}
</script>

<style scoped>
    section{
        position: absolute;
        top: 127.81px;
        width: 53%;
        left: 47%;
        height: 450px;
        border-radius: 15px;
        border: solid 1px #48464e;
    }

    header{
        height: 5%;
        background: #05c03d;
        border-radius:15px 15px 0px 0px;
        border: solid 1px #00fa0c;
        font-weight: bold;
    }

    table{
        width: 100%;
        height: 95%;
    }
</style>