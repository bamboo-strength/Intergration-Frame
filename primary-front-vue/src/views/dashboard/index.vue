<template>
  <div class="ms-body__main"></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Dashboard extends Vue {
  microApp: any = null;

  created() { }
}
</script>
<style lang="less" scoped>
.ant-button-margin {
  margin-right: 8px;
}
</style>
