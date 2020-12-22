<template>
  <article v-bind:style="cssVars">
      <div class="bordered">
        <h2>{{book.title}}</h2>
        <p>{{book.author}}</p>
      </div>
  </article>
</template>

<script>
export default {
    props: {
        book: Object
    },

    computed: {
        cssVars() {
            return {
                "--bg-color": this.book.color
            }
        }
    }
  
}
</script>

<style scoped>
    article {
        background-color: var(--bg-color);
        height: 100%;
        padding-left: 0.5rem;
    }
    .bordered{
        height: 100%;
        padding: 1rem 0.5rem;
        border-left: 2px solid rgba(0, 0, 0, 0.397);
        
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    h2, p {
        color: white;
        text-decoration: none;
    }
    h2{
        font-size: 0.8rem;
    }
    p{
        font-size: 0.6rem;
    }
</style>