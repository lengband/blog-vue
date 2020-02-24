import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/styles/index.scss'
import { addScript } from './lib/utils'
import '@/components'

Vue.config.productionTip = false
addScript('//at.alicdn.com/t/font_1652447_mg4kdjbfhok.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
