<template>
  <div id="app">
    <router-link 
      v-for="book in books"
      v-bind:key="book.id"
      to="/"
    >
      {{ book.color }}
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {

  computed: {
    books(){
      return this.$root.books
    }
  }
}
</script>

<style>

</style>
