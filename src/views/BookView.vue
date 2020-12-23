<template>
  <section id="book-view">
    <router-link id="back-link" v-bind:to="'/'">←</router-link>
      <Book id="book" 
        v-bind:book="currentBook"
        v-bind:isLarge="large"
      />
      <div class="details">
        <h2>{{ currentBook.title }}</h2>
        <h3>By {{ currentBook.author }}</h3>
        <p>{{ currentBook.plot }}</p>
        <div class="info">
          <p><strong>Audience:</strong> {{ currentBook.audience }}</p>
          <p><strong>First published:</strong> {{ currentBook.year }}</p>
          <p><strong>Pages:</strong> {{ currentBook.pages }}</p>
          <p><strong>Publisher:</strong> {{ currentBook.publisher }}</p>
        </div>
        <button>Oh, I want to read it!</button>
      </div>
  </section>
</template>

<script>
import Book from '../components/Book'

export default {
    components: { Book },

    data(){ return {
      large: true
    }},

    computed: {
      currentBook(){
      return this.$root.getBook(this.$route.params.id)
      }
    }
}
</script>

<style scoped>
  #book-view{
   background-color: #222;
   height: 100vh;

   display: grid;
   grid-template-columns: 15% 35% 35% 15%;
   grid-auto-rows: 5rem;
   gap: 1rem;

   padding: 3rem 10rem;
  }
  
  #back-link{
    grid-row: span 1;
    grid-column: span 4;
    
    background-color: rgb(134, 134, 134);
    color: black;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    font-family: sans-serif;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #back-link:hover{
    background-color: plum;
  }

  .details-wrapper{
    max-width: 650px;
    margin: auto;
    margin-top: 15vh;

    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1rem;
  }

  #book{
    grid-row: span 4;
    grid-column: span 2;
  }
  #book > h1{
    font-size: 5rem;
  }

  .details{
    grid-row: span 4;
    grid-column: 3 / span 2;

    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .details > h3{
    font-size: 1rem;
    font-weight: 200;
  }
  .details p{
    font-size: 0.7rem;
    font-weight: 200;
  }

  .info{
    background-color: rgb(50, 50, 50);
    padding: 0.6rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
  }

  button{
    border: none;
    outline: none;
    border-radius: 0.3rem;
    padding: 1rem;
  }
  button:hover{
    background-color: rgb(134, 134, 134);
    color: white;
  }
  button:active{
    background-color: plum;
  }

</style>