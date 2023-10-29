import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'TestRouter',
			component: () => import("../views/TestRouter.vue")
		},
				{
			path: '/testrouter',
			name: 'TestRouter2',
			component: () => import("../views/TestRouter2.vue")
		}
	],
});

export default router;
