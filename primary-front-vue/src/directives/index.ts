const directives: any = {};

export default {
  install(Vue: any) {
    Object.keys(directives).length && Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    })
  }
};
