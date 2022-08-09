import 'babel-polyfill';
require('es6-promise').polyfill();
import 'fetch-detector';
import 'fetch-ie8';
import '@/assets/font/iconfont.css';
import '@/assets/font/iconfont.js';
import Startup from '@/core/startup';
import i18n from '@/lang';
import store from '@/store/index';
import '@/styles/_index.less';
import '@/styles/_theme.less';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import Vue from 'vue';
import filters from '@/filters';
import Directives from '@/directives';
import Components from '@/components';
import App from './App.vue';
import { getMicro, registerApps } from '@/core/micro/util';
import stateActions from '@/core/stateActions';

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.use(Directives);

Vue.use(Components);

Vue.use(filters);

if (!window.fetch) {
  window.fetch = fetch;
}

Startup.bootstrap().then((params: any) => {
  const router = params.router;

  router.beforeEach(async(to: any, from: () => void, next: () => void) => {
    const microConf = getMicro();

    const conf = microConf.find(_item => {
      const index = _item.activeRule.indexOf('#/') > -1 ? _item.activeRule.indexOf('#/') + 2 : 0;
      const path = _item.activeRule.substring(index);
      return to.path.indexOf(path) !== -1;
    })

    if (conf) {
      next();
      return;
    }

    next();
  });

  router.afterEach((to: any) => {
    const origin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    const url = origin + process.env.VUE_APP_BASE_URL + '#' + to.path;
    history.pushState(null, String(), url);
  });

  const appInstantiate = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  });
  appInstantiate.$mount('#app');

  registerApps();

  Vue.use(stateActions);
});
