// router.js
import { createRouter, createWebHistory } from 'vue-router';
import FormView from '../views/Form.vue';

const routes = [
  {
    path: '/',
    
  },
  {
    path: '/form',
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
