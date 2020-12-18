import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Books from './assets/books.json'

Vue.config.productionTip = false

new Vue({
  data(){ return {
    books: Books.books
  }},

  router,
  render: h => h(App)
}).$mount('#app')
