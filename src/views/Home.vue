<template>
  <div id="home">
    <h1>{{books.length}} Classic Children's books</h1>
    <div id="library">  
      <router-link 
        v-for="book in books"
        v-bind:key="book.id"
        v-bind:to="'/books/' + book.id"
      >
        <Book v-bind:book="book"/>
      </router-link>
    </div>
  </div>
</template>

<script>
    import Book from '../components/Book'

    export default {
    components: {Book},

    computed: {
        books(){
        return this.$root.books
        }
    }
}
</script>

<style>
  #home{
    max-width: 600px;
    margin: auto;
    margin-top: 15vh;
  }

  #library{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-auto-rows: 180px;
    gap: 1rem;
  }
  router-link > *{
    text-decoration: none;
  }
</style>