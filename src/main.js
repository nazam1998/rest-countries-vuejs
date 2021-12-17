import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faLongArrowAltLeft,
  faMoon as faSolidMoon,
} from '@fortawesome/free-solid-svg-icons'
import {
  faMoon
} from '@fortawesome/free-regular-svg-icons'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import JwPagination from 'jw-vue-pagination';
import store from './store'

library.add(faMoon, faSearch, faLongArrowAltLeft, faSolidMoon)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('jw-pagination', JwPagination);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')