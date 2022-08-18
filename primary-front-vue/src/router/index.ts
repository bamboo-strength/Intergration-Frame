import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

Vue.use(Router);

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/portal/dashboard'
  },
  {
    path: '/redirect',
    component: () => import('@/layout/layout.vue'),
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/msun',
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: 'external',
        name: 'msun-external',
        component: () => import(/* webpackChunkName: "external" */ '@/views/external/external.vue')
      }
    ]
  },
  {
    path: '/portal/:path(.*)',
    name: 'portal',
    meta: { hidden: false },
    component: () => import('@/layout/layout.vue')
  }
];

export const staticRoutes: RouteConfig[] = [
  {
    path: '/portal',
    children: [
      { path: 'math', name: 'math', meta: { title: '首页', reuse: true, affix: true, icon: 'home-page' } },
      { path: 'dashboard', name: 'dashboard', meta: { title: '附属页', reuse: true, affix: false, icon: 'workbench' } }
    ]
  },
  {
    path: '/code',
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: 'editor',
        name: 'code-editor',
        component: () => import(/* webpackChunkName: 'code-editor' */ '@/views/code-editor/code-editor.vue'),
        meta: {
          title: '编辑器',
          reuse: true,
          affix: false,
          icon: 'user-light'
        }
      }
    ]
  }
];
