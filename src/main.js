import Vue from 'vue'
import EasyGoTop from 'easy-go-top'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import '../src/styles/index.scss'
import '@/components'
import './lib/request'
import './lib/filters'
import './lib/directive'

Vue.use(EasyGoTop)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
