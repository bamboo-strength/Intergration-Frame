import Router from 'vue-router';
import { constantRoutes } from './index';

const createRoute = (props: any) => {
  return new Router({
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }
      return { x: 0, y: 0 };
    },
    base: (window as any).__POWERED_BY_QIANKUN__ ? props.baseUrl : process.env.VUE_APP_BASE_URL,
    mode: props && props.mode ? props.mode : 'hash',
    routes: [...constantRoutes]
  });
}

export {
  createRoute
}
