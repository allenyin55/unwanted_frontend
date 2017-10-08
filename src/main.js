// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vue-awesome/icons'
import App from './App'
import router from './router'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import Icon from 'vue-awesome/components/Icon'
import VueFractionGrid from 'vue-fraction-grid'
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'

const endpoint = `https://326ee7f8.ngrok.io`

export const SocketInstance = socketio(endpoint)

Vue.config.productionTip = false
Vue.use(AnimatedVue)
Vue.use(VueFractionGrid)
Vue.use(VueSocketIO, SocketInstance)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
