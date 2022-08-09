const components: any = {};

export default {
  install(Vue: any) {
    Object.keys(components).length && Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  }
};
