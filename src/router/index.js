import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import("../views/Form.vue")
    },
    {
      path: '/setup',
      name: 'ScreenSetUp',
      component: () => import("../views/ScreenSetUp.vue")
    },
    {
      path: '/playgame',
      name: 'ScreenPlayGame',
      component: () => import("../views/ScreenPlayGame.vue")
    },
    {
      path: '/testrouter2',
      name: 'TestRouter2',
      component: () => import("../views/TestRouter2.vue")
    }
  ],
});

export default router;

