<template>
  <div id="home">
    <router-link 
      v-for="book in books"
      v-bind:key="book.id"
      v-bind:to="'/books/' + book.id"
    >
      <Book v-bind:value="book"/>
    </router-link>
  </div>
</template>

<script>
    import Book from '../components/Book'

    export default {
    components: { Book },

    computed: {
        books(){
        return this.$root.books
        }
    }
}
</script>

<style>

</style>