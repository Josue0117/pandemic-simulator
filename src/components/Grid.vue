<template>
    <section>
        <header>New Simulation</header>
        <table id="grid">
            <tr>
                <td id="id01" class="unselected" @click="setPoint('id01',pointType)"></td>
                <td id="id02" class="unselected" @click="setPoint('id02',pointType)"></td>
                <td id="id03" class="unselected" @click="setPoint('id03',pointType)"></td>
                <td id="id04" class="unselected" @click="setPoint('id04',pointType)"></td>
                <td id="id05" class="unselected" @click="setPoint('id05',pointType)"></td>
                <td id="id06" class="unselected" @click="setPoint('id06',pointType)"></td>
            </tr>
            <tr>
                <td id="id11" class="unselected" @click="setPoint('id11',pointType)"></td>
                <td id="id12" class="unselected" @click="setPoint('id12',pointType)"></td>
                <td id="id13" class="unselected" @click="setPoint('id13',pointType)"></td>
                <td id="id14" class="unselected" @click="setPoint('id14',pointType)"></td>
                <td id="id15" class="unselected" @click="setPoint('id15',pointType)"></td>
                <td id="id16" class="unselected" @click="setPoint('id16',pointType)"></td>
            </tr>
            <tr>
                <td id="id21" class="unselected" @click="setPoint('id21',pointType)"></td>
                <td id="id22" class="unselected" @click="setPoint('id22',pointType)"></td>
                <td id="id23" class="unselected" @click="setPoint('id23',pointType)"></td>
                <td id="id24" class="unselected" @click="setPoint('id24',pointType)"></td>
                <td id="id25" class="unselected" @click="setPoint('id25',pointType)"></td>
                <td id="id26" class="unselected" @click="setPoint('id26',pointType)"></td>
            </tr>
            <tr>
                <td id="id31" class="unselected" @click="setPoint('id31',pointType)"></td>
                <td id="id32" class="unselected" @click="setPoint('id32',pointType)"></td>
                <td id="id33" class="unselected" @click="setPoint('id33',pointType)"></td>
                <td id="id34" class="unselected" @click="setPoint('id34',pointType)"></td>
                <td id="id35" class="unselected" @click="setPoint('id35',pointType)"></td>
                <td id="id36" class="unselected" @click="setPoint('id36',pointType)"></td>
            </tr>
            <tr>
                <td id="id41" class="unselected" @click="setPoint('id41',pointType)"></td>
                <td id="id42" class="unselected" @click="setPoint('id42',pointType)"></td>
                <td id="id43" class="unselected" @click="setPoint('id43',pointType)"></td>
                <td id="id44" class="unselected" @click="setPoint('id44',pointType)"></td>
                <td id="id45" class="unselected" @click="setPoint('id45',pointType)"></td>
                <td id="id46" class="unselected" @click="setPoint('id46',pointType)"></td>
            </tr>
            <tr>
                <td id="id51" class="unselected" @click="setPoint('id51',pointType)"></td>
                <td id="id52" class="unselected" @click="setPoint('id52',pointType)"></td>
                <td id="id53" class="unselected" @click="setPoint('id53',pointType)"></td>
                <td id="id54" class="unselected" @click="setPoint('id54',pointType)"></td>
                <td id="id55" class="unselected" @click="setPoint('id55',pointType)"></td>
                <td id="id56" class="unselected" @click="setPoint('id56',pointType)"></td>
            </tr>
        </table>
    </section>
</template>

<script>
export default {
    props: [ 'height' , 'width' , 'pointType' ],
    methods: {
        changeCell( point , changeType ) {
            point.setAttribute('class',changeType);
            const style = document.createAttribute('style');
            if( changeType === 'inmune' ) {
                style.value = 'border: solid 1px #00fa0c; background: #05c03d6b;'
            } else {
                style.value = 'border: solid 1px #fa0000; background: #c005056b;'
            }
            point.setAttributeNode(style);
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
        console.log(this.height+' '+this.width);
    },/*
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