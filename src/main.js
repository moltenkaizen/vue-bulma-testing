import Vue from 'vue'
import App from './App'

// Require the main Sass manifest file
require('./assets/sass/main.scss');

// http://dev-notes.eu/2017/07/setup-new-vue-webpack-project-with-bulma/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
