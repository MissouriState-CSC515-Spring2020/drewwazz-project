// routes.js

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Fender from './components/Fender.vue';
import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/Fender/:id', component: Fender, name: 'Fender' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;