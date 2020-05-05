import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import moment from 'moment';
import './registerServiceWorker';
import 'bootstrap';

import routes from './routes';

Vue.config.productionTip = false;

Vue.filter('formatDate', function (value) {
  if (!value) return ''
  return moment(value.toString()).format('MM/DD/YYYY hh:mm')
})

Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
