<template>
  <div>
      <h1>{{book.title}}</h1>
      <p>{{book.author}}</p>
  </div>
</template>

<script>
export default {
    props: {
        book: Object
    }
  
}
</script>

<style>

</style>