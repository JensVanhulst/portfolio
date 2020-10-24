import Vue from 'vue';
import SequentialEntrance from 'vue-sequential-entrance';
import VuePageTransition from 'vue-page-transition';
import Heading from '@/components/Heading.vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import 'vue-sequential-entrance/vue-sequential-entrance.css';

Vue.use(VueMeta);
Vue.use(SequentialEntrance);
Vue.use(VuePageTransition);
Vue.component('heading', Heading);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount('#app');
