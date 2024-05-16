import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import { createPinia } from "pinia";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const pinia = createPinia();
Vue.use(pinia);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
