import debounce from './debounce';

const directives: any = {
  debounce
};

export default {
  install(Vue: any) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    })
  }
};
