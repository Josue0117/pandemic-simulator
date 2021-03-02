<template>
    <section>
        <header>New Simulation</header>
        <table id="grid">
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
export default {
    props: [ 'height' , 'width' , 'pointType' , 'simulationState' ],
    data() {
        return{
            grid: [],
            // TO DO: Delete temp variables.
            tempHeight: 6,
            tempWidth: 6,
        };
    },
    methods: {
        // TO DO: move to helper.
        updateGrid( point , changeType ) {
            const idX = (point.id).indexOf('x');
            const x = (point.id).substring(idX+1);
            const idY = (point.id).indexOf('y');
            const y = (point.id).substring(idY+1,idX);
            this.grid[y][x] = changeType;
            console.log(y+','+x);
            console.log(this.grid);
        },
        // TO DO: move to helper.
        changeCell( point , changeType ) {
            point.setAttribute('class',changeType);
            const style = document.createAttribute('style');
            if( changeType === 'inmune' ) {
                style.value = 'border: solid 1px #00fa0c; background: #05c03d6b;'
            } else {
                style.value = 'border: solid 1px #fa0000; background: #c005056b;'
            }
            point.setAttributeNode(style);
            this.updateGrid( point , changeType );
        },
        setPoint( id , pointType ) {
            const point = document.getElementById(id);
            if( point.className === 'unselected' ) {
                this.changeCell( point , pointType );
            } else if( point.className === pointType ) {
                point.setAttribute('class','unselected');
                point.removeAttribute('style');
            }
        }
    },
    mounted: function() {
        const table = document.getElementById("grid");

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
        // TO DO: Delte.
        console.log(this.height+' '+this.width);
    },
    updated: function() {
        if(this.simulationState === 'launched') {
            // TO DO: Delete.
            console.log('Simulation launched');
            // TO DO: move to a helper.
            for(let i=0; i<this.tempHeight; i++) {
                const row = [];
                for(let j=0; j<this.tempWidth; j++) {
                    row.push('null');
                }
                this.grid.push(row);
            }
            // TO DO: delete.
            console.log(this.grid)
            // Note: keep on this file.
            this.$emit( 'change-simulation-state' , 'inProgres');
        }
    },
    /*
    updated: function() {
        const table = document.getElementById("grid");
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

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
        console.log(this.height+' '+this.width);
    },*/
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