import { AppStateActions } from './AppStateActions';

export default {
  install(Vue: any) {
    Vue.prototype.$actions = new AppStateActions();
  }
}
