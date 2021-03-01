<template>
    <section>
        <header>New Simulation</header>
        <table id="grid">
        </table>
    </section>
</template>

<script>
export default {
    props: [ 'height' , 'width'],
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
    },
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