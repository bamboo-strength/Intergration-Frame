import { RouteConfig } from 'vue-router';

export const constantRoutes: RouteConfig[] = [
  {
    path: '/portal/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
  },
  {
    path: '/portal/math',
    name: 'math',
    component: () => import(/* webpackChunkName: "math" */ '@/views/math/math.vue')
  }
];
