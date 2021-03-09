<template>
    <section>
        <header>New Simulation</header>
        <table id="gridTable">
            <tr>
                <td id="y0x0" class="unselected" @click="setPoint('y0x0',pointType)"></td>
                <td id="y0x1" class="unselected" @click="setPoint('y0x1',pointType)"></td>
                <td id="y0x2" class="unselected" @click="setPoint('y0x2',pointType)"></td>
                <td id="y0x3" class="unselected" @click="setPoint('y0x3',pointType)"></td>
                <td id="y0x4" class="unselected" @click="setPoint('y0x4',pointType)"></td>
                <td id="y0x5" class="unselected" @click="setPoint('y0x5',pointType)"></td>
            </tr>
            <tr>
                <td id="y1x0" class="unselected" @click="setPoint('y1x0',pointType)"></td>
                <td id="y1x1" class="unselected" @click="setPoint('y1x1',pointType)"></td>
                <td id="y1x2" class="unselected" @click="setPoint('y1x2',pointType)"></td>
                <td id="y1x3" class="unselected" @click="setPoint('y1x3',pointType)"></td>
                <td id="y1x4" class="unselected" @click="setPoint('y1x4',pointType)"></td>
                <td id="y1x5" class="unselected" @click="setPoint('y1x5',pointType)"></td>
            </tr>
            <tr>
                <td id="y2x0" class="unselected" @click="setPoint('y2x0',pointType)"></td>
                <td id="y2x1" class="unselected" @click="setPoint('y2x1',pointType)"></td>
                <td id="y2x2" class="unselected" @click="setPoint('y2x2',pointType)"></td>
                <td id="y2x3" class="unselected" @click="setPoint('y2x3',pointType)"></td>
                <td id="y2x4" class="unselected" @click="setPoint('y2x4',pointType)"></td>
                <td id="y2x5" class="unselected" @click="setPoint('y2x5',pointType)"></td>
            </tr>
            <tr>
                <td id="y3x0" class="unselected" @click="setPoint('y3x0',pointType)"></td>
                <td id="y3x1" class="unselected" @click="setPoint('y3x1',pointType)"></td>
                <td id="y3x2" class="unselected" @click="setPoint('y3x2',pointType)"></td>
                <td id="y3x3" class="unselected" @click="setPoint('y3x3',pointType)"></td>
                <td id="y3x4" class="unselected" @click="setPoint('y3x4',pointType)"></td>
                <td id="y3x5" class="unselected" @click="setPoint('y3x5',pointType)"></td>
            </tr>
            <tr>
                <td id="y4x0" class="unselected" @click="setPoint('y4x0',pointType)"></td>
                <td id="y4x1" class="unselected" @click="setPoint('y4x1',pointType)"></td>
                <td id="y4x2" class="unselected" @click="setPoint('y4x2',pointType)"></td>
                <td id="y4x3" class="unselected" @click="setPoint('y4x3',pointType)"></td>
                <td id="y4x4" class="unselected" @click="setPoint('y4x4',pointType)"></td>
                <td id="y4x5" class="unselected" @click="setPoint('y4x5',pointType)"></td>
            </tr>
            <tr>
                <td id="y5x0" class="unselected" @click="setPoint('y5x0',pointType)"></td>
                <td id="y5x1" class="unselected" @click="setPoint('y5x1',pointType)"></td>
                <td id="y5x2" class="unselected" @click="setPoint('y5x2',pointType)"></td>
                <td id="y5x3" class="unselected" @click="setPoint('y5x3',pointType)"></td>
                <td id="y5x4" class="unselected" @click="setPoint('y5x4',pointType)"></td>
                <td id="y5x5" class="unselected" @click="setPoint('y5x5',pointType)"></td>
            </tr>
        </table>
    </section>
</template>

<script>
import helper from '../helper.js'

export default {
    props: [ 'height' , 'width' , 'pointType' , 'simulationState' , 'gridCreated' ],
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
                console.log('in progrs')
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
                    console.log( this.pointsUpdated )
                } 
                if( !this.pointsUpdated ){
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
        const table = document.getElementById("gridTable");

        for(let i=0; i<this.height; i++){
            var newRow = document.createElement('tr');
            for(let j=0; j<this.width; j++){
                var newTd = document.createElement('td');
                newTd.setAttribute('id','id'+i+','+j);
                newTd.setAttribute('class','grid');
                newRow.appendChild(newTd);
            }
            table.appendChild(newRow);
        }
        helper.createGrid( this.height , this.width , this.grid );  
    },
    updated: function() {
        if( !this.gridCreated ){
            console.log(this.pointType)
            this.createTable();
            helper.createGrid( this.height , this.width , this.grid );
            this.$emit( 'change-grid-state' );
        }
        if( this.simulationState === 'launched'){
            this.runSimulation();
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