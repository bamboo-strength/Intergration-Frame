import '@/assets/font/iconfont.css';
import '@/assets/font/iconfont.js';
import store from '@/store/index';
import '@/styles/_index.less';
import '@/styles/_theme.less';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import Vue from 'vue';
import filters from '@/filters';
import Directives from '@/directives';
import Components from '@/components';
import Router from 'vue-router';
import { createRoute } from './router/route';
import App from './App.vue';

Vue.use(Antd);

Vue.use(Directives);

Vue.use(Components);

Vue.use(filters);

let appInstance: any = null;

const render = (props?: any) => {
  Vue.use(Router);
  const router = createRoute(props);
  appInstance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
};

if ((window as any).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props: any) {
  console.log('micro Vue app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  props.onGlobalStateChange((state: any) => {
    console.log(Vue)
    console.log(state);
  });

  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
  console.log('micro Vue app unmount');
  appInstance.$destroy();
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log('update props');
}
