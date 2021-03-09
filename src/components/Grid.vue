<template>
    <section>
        <header>New Simulation</header>
        <table id="gridTable">
        </table>
    </section>
</template>

<script>
import helper from '../helper.js'

export default {
    props: [ 'height' , 'width' , 'pointType' , 'simulationState' ],
    data() {
        return{
            grid: [],
            pointsUpdated: false,
        };
    },
    methods: {
        setPoint( id , pointType ) {
            const point = document.getElementById(id);
            if( point.className === 'unselected' ) {
                helper.updateGrid( point , pointType , 'add' , this.grid );
                helper.updateTableStyle( point , pointType , 'add' );
                this.pointsUpdated = true;
            } else if( point.className === pointType ) {
                helper.updateGrid( point , pointType , 'remove' , this.grid );
                helper.updateTableStyle( point , pointType , 'remove' );
                this.pointsUpdated = true;
            }
        },
        runSimulation() {            
            let interval = setInterval( () => {
                this.pointsUpdated = false;
                let infectedIds = [];
                for( let i=0; i<this.height; i++ ) {
                    for( let j=0; j<this.width; j++ ) {
                        if( this.grid[i][j] === 'infected' ){
                            infectedIds.push( { 'i':i , 'j':j } );
                        }
                    }
                }
                if( infectedIds ) {
                    infectedIds.forEach(v => {
                        const positionCellUp = 'y'+(v.i-1)+'x'+(v.j);
                        const positionCellDown  = 'y'+(v.i+1)+'x'+(v.j);
                        const positionCellLeft  = 'y'+(v.i)+'x'+(v.j-1);
                        const positionCellRigth = 'y'+(v.i)+'x'+(v.j+1);
                        if( v.i-1 > -1 && this.grid[v.i-1][v.j] == positionCellUp ){
                            this.setPoint( this.grid[v.i-1][v.j] , 'infected' );
                        }
                        if( v.i+1 < this.height && this.grid[v.i+1][v.j] == positionCellDown ){
                            this.setPoint( this.grid[v.i+1][v.j] , 'infected' );
                        }
                        if( v.j-1 > -1 && this.grid[v.i][v.j-1] == positionCellLeft ){
                            this.setPoint( this.grid[v.i][v.j-1] , 'infected' );
                        }
                        if( v.j+1 < this.width && this.grid[v.i][v.j+1] == positionCellRigth ){
                            this.setPoint( this.grid[v.i][v.j+1] , 'infected' );
                        }
                    });
                } 
                if( !this.pointsUpdated ){
                    console.log(this.simulationState )
                    clearInterval( interval );
                }
            }, 2000);
        },
        // TO DO: MOVE  TO HELPER
        createTable() {
            const table = document.getElementById('gridTable');
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }

            for(let i=0; i<this.height; i++){
                var newRow = document.createElement('tr');
                for(let j=0; j<this.width; j++){
                    var newTd = document.createElement('td');
                    newTd.setAttribute('id','y'+i+'x'+j);
                    newTd.setAttribute('class','unselected');
                    newTd.onclick = () => this.setPoint('y'+i+'x'+j,this.pointType);
                    newRow.appendChild(newTd);
                }
                table.appendChild(newRow);
            }
        },
    },
    mounted: function() {
        this.createTable();
        helper.createGrid( this.height , this.width , this.grid );
    },
    updated: function() {
        if( this.simulationState === 'launched'){
            console.log(this.simulationState)
            this.runSimulation();
            this.$emit( 'change-simulation-state' , 'ended' );
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