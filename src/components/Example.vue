<template>
    <section id="example">
        <div class="container">
            <h1>Webpack</h1>
            <p>Webpack message: {{ message }}</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            message: null
        }
    },
    created() {
        this.message = this.$store.getters.getMessage
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        color: red;
    }
</style>