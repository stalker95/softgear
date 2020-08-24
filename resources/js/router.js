import Vue from 'vue';
import Router from 'vue-router';

import Welcome from './views/Welcome.vue';
import Categories from './views/Categories.vue';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Welcome',
		component: Welcome
	},
	{
		path: '/categories',
		name: 'Categories',
		component: Categories
	}
];

const router = new Router({
	routes: routes,
	linkActiveClass: 'active'
});

export default router;

