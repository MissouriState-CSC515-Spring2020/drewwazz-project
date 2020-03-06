import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
//import wb from "./registerServiceWorker";
import 'bootstrap';

import routes from './routes';
//import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(VueRouter);

//Vue.prototype.$workbox = wb;

const router = new VueRouter({mode: 'history', routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
