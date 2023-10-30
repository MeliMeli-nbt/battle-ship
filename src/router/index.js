import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import("../views/Form.vue")
    },
	{
		path: '/testrouter1',
		name: 'TestRouter1',
		component: () => import("../views/TestRouter.vue")
	},
    {
      path: '/testrouter2',
      name: 'TestRouter2',
      component: () => import("../views/TestRouter2.vue")
    }
  ],
});

export default router;

