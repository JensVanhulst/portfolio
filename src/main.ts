import Vue from 'vue';
import VuePageTransition from 'vue-page-transition';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
