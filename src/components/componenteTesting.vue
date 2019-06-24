<template>
    <div>
        <h1>Count: {{ contador }}</h1>
        <!--incluir esta etiqueta de jest como atributo html nos permite usar el boton en testing-->
        <button @click="contador++" jest="increment-button">+1</button>
    </div>
</template>

<script>
    export default {
        name: "componenteTesting",
        data() {
            return {
                contador : 0
            }
        }
    }
</script>

<style scoped>

</style>
