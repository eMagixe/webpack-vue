import './js/common'
import './css/main.css'
import './scss/main.scss'

window.Vue = require('vue')

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
    el: '#app'
})