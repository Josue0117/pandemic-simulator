<template>
    <section>
        <button @click="newSimulation">New simulation</button>
    </section>
</template>

<script>
export default {
    methods: {
        newSimulation() {
            this.$emit( 'new-simulation' );
        }
    }
}
</script>

<style scoped>
    section{
        position: absolute;
        top: 130px;
        width: 45%;
        height: 450px;
        border-radius: 15px;
        background: #242327;
        border: solid 1px #48464e;
    }

    button{
        position: absolute;
        top: 45%;
        left: 33%;
        height: 10%;
        width: 33%;
    }
</style>