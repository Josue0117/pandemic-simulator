<template id="this">
    <section>
        <p>{{ tittle }}</p>
        <form @submit.prevent="createGrid">
            <div class="form-control" :class="{invalid: invalidHeight == true}">
                <label for="height">Heigth</label>
                <input id="height" name="height" type="number" v-model="height" @change="validateHeight"/>
                <p class="invalid" v-if="invalidHeight">Invalid input, just integer and less than 50 allowed</p>
            </div>
            <div class="form-control" :class="{invalid: invalidWidth == true}">
                <label for="width">Width</label>
                <input id="width" name="width" type="number" v-model="width" @change="validateWidth"/>
                <p class="invalid" v-if="invalidWidth">Invalid input, just integer and less than 50 allowed</p>
            </div>
            <div>
                <button>Create Grid</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    props: ['tittle'],
    data() {
        return{
            height: 0,
            width: 0,
            invalidHeight: false,
            invalidWidth: false,
        };
    },
    methods: {
        createGrid() {
            if( this.height == 0 || this.width == 0 ){
                alert('Height or width inputs empty!');
            } else {
                console.log('Height: '+ this.height + ', Width: ' + this.width);
                this.$emit( 'create-new-grid' , this.height , this.width );
            }
        },
        validateHeight() {
            if( this.height > 50 || !(this.height%1 == 0) || this.height < 0 ) {
                this.invalidHeight = true;
                this.height = 0;
            } else {
                this.invalidHeight = false;
            }
        },
        validateWidth() {
            if( this.width > 50 || !(this.width%1 == 0) || this.width < 0 ) {
                this.invalidWidth = true;
                this.width = 0;
            } else {
                this.invalidWidth = false;
            }
        },
    }
}
</script>

<style scoped>
    section{
        width: 45%;
        left: 15%;
        margin-top: 20px;
        border-radius: 15px;
        background: #242327;
        border: solid 1px #48464e;
    }

    form{
        color: #a9a6b4;
        text-align: right;
        padding-bottom: 20px;
    }

    div{
        margin-top: 10px;
    }

    input{
        background: #18191a;
        border: solid 1px #48464e;
        border-radius: 5px;
        margin-right: 100px;
        margin-left: 30px;
        color: white;
    }

    p.invalid{
        margin-right: 100px;
        color: red;
        font-size: 12px;
    }

    .form-control.invalid input{
        border-color: red;
    }

    .form-control.invalid label{
        color: red;
    }
</style>