import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	/* explore */
	{
		path: '/juegos',
		name: 'Juegos',
		component: () => import('../views/explore/Juegos.vue'),
	},
	{
		path: '/consolas',
		name: 'Consolas',
		component: () => import('../views/explore/Consolas.vue'),
	},
	/* games */
	{
		path: '/playstation-5',
		name: 'PS5',
		component: () => import('../views/games/PS5.vue'),
	},
	{
		path: '/playstation-4',
		name: 'PS4',
		component: () => import('../views/games/PS4.vue'),
	},
	{
		path: '/nintendo-switch',
		name: 'Switch',
		component: () => import('../views/games/Switch.vue'),
	},
	/* news */
	{
		path: '/twitch-llego-a-nintendo-switch',
		name: 'NewsOne',
		component: () => import('../views/news/NewsOne.vue'),
	},
	{
		path: '/juegos-gratis-ps-plus-diciembre',
		name: 'NewsTwo',
		component: () => import('../views/news/NewsTwo.vue'),
	},
	/* shopping cart */
	{
		path: '/finalizar-compra',
		name: 'Cart',
		component: () => import('../views/Cart.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
