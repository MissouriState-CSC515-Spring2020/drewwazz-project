// routes.js

import Home from './components/Home.vue';
import Fender from './components/fender.vue';
import Gibson from './components/gibson.vue';
import About from './components/About.vue';
import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/fender', component: Fender, name: 'fender' },
    { path: '/gibson', component: Gibson, name: 'gibson' },
    { path: '/about/:id', component: About, name: 'about' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;