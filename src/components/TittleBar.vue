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
        margin-top: 10px;
        padding: 15px;
        border-radius: 15px;
        background-color: #242327;
    }
</style>