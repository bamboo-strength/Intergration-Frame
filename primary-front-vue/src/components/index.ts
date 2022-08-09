import AceEditor from './ace-editor/ace-editor.vue';

const components: any = {
  'ace-editor': AceEditor
};

export default {
  install(Vue: any) {
    Object.keys(components).length && Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  }
};
