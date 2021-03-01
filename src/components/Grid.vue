<template>
    <div>
        <header>New Simulation</header>
        <section>
            {{ height }} , {{ width }}
        </section>
    </div>
</template>

<script>
export default {
    props: [ 'height' , 'width'],

}
</script>

<style scoped>
    div{
        position: absolute;
        top: 127.81px;
        width: 53%;
        left: 47%;
        height: 450px;
        border-radius: 15px;
        border: solid 1px #48464e;
    }

    header{
        padding: 5px;
        background: #05c03d;
        border-radius:15px 15px 0px 0px;
        border: solid 1px #00fa0c;
        font-weight: bold;
    }
</style>