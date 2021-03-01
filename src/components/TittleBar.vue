<template>
    <header>
        <h2>{{ tittle }}</h2>
    </header>
</template>

<script>
export default {
    props: ['tittle']
}
</script>

<style scoped>
    header {
        position: absolute;
        padding: 15px;
        width: 70%;
        right: 15%;
        top: 10px;
        border-radius: 15px;
        background-color: #242327;
    }
</style>