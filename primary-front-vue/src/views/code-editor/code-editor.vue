<template src="./code-editor.html"></template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class CodeEditor extends Vue {
  mounted() {
    const app = new Vue({
      data: {
        tabName: 1212
      },
      created() {
        console.log(this.tabName)
      }
    }).$mount('#code');
  }
}
</script>
<style lang="less" scoped>
.code-editor__main {
  height: 100%;
  width: 100%;
}
</style>
