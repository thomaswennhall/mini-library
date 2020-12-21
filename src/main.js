import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BooksData from './assets/books.json'

Vue.config.productionTip = false

new Vue({
  data(){ return {
    books: BooksData.books
  }},

  methods: {
    getBook(id){
      return this.books.find(book => book.id == id)
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
