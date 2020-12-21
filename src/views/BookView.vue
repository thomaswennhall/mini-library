<template>
  <section>
    <router-link v-bind:to="'/'">go back</router-link>
    <Book v-bind:book="currentBook"/>
  </section>
</template>

<script>
import Book from '../components/Book'

export default {
    components: { Book },

    computed: {
        currentBook(){
        return this.$root.getBook(this.$route.params.id)
        }
    }
}
</script>

<style>

</style>