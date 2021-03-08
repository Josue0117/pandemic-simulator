<template>
    <div class="row">
        <cell 
            v-for="oneCell in cells" 
            :key="oneCell">
        </cell>
    </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
    components: { Cell },
    data() {
        return{
            cells: ['apple', 'banana', 'orange'],
        };
    },
}
</script>

<style scoped>
    .row{
        width: 100%;
    }
</style>