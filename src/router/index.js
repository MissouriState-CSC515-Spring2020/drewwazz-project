import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Fender from '../components/fender.vue';
import Gibson from '../components/gibson.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter);

const routes = [
{
	path: '/',
	name: 'Home',
	component: Home,
	meta: {
		title: 'Home'
	}
},
{
	path: '/fender',
	name: 'fender',
	component: Fender,
	meta: {
		title: 'Fender'
	}
},
{
	path: '/gibson',
	name: 'gibson',
	component: Gibson,
	meta: {
		title: 'Gibson'
	}
},
{
	path: '/Contact',
	name: 'Contact',
	component: Contact,
	meta: {
		title: 'Contact'
	}
},
{
	path: '/About',
	name: 'About',
	component: About,
	meta: {
		title: 'About'
	}
},
];


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
	// Use next tick to handle router history correctly
	// see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
	Vue.nextTick(() => {
		document.title = to.meta.title || 'Drews Guitar Emporium';
	});
});

export default router;