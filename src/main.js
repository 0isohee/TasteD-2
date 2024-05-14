import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  vuetify,
  router, 
  render: h => h(App)
}).$mount('#app')
