import Vue from 'vue'
import VueFire from "vuefire"
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(VueFire)
Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
