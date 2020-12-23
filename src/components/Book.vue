<template>
  <article v-bind:style="cssVar">
      <div class="bordered">
        <h2 v-bind:class="{large: isLarge}">{{book.title}}</h2>
        <p v-bind:class="{large: isLarge}">{{book.author}}</p>
      </div>
  </article>
</template>

<script>
export default {
    props: {
        book: Object,
        isLarge: String
    },

    computed: {
        cssVar() {
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
    }
    h2{
        font-size: 0.8rem;
    }
    p{
        font-size: 0.6rem;
        font-weight: 400;
    }
    .large{
        color: black;
    }
    h2.large{
        font-size: 1.6rem;
    }
    p.large{
        font-size: 1rem;
    }
</style>