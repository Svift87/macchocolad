import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import '../node_modules/normalize.css/'
import './css/style.less'
import '../node_modules/swiper/css/swiper.css'
import animate from 'animate.css'
import FortAwesome from '@fortawesome/fontawesome-free/css/all.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
