<template>
  <div class="ms-body__main">
    <a-row>
      <a-col :span="6">
        <a-input v-model="vInput" placeholder="标签重置测试"></a-input>
      </a-col>
    </a-row>
    <a-row>
      <a-button type="primary" class="ant-button-margin">检 测</a-button>
      <a-button type="primary" class="ant-button-margin">创 建</a-button>
      <a-button type="primary" class="ant-button-margin">查 询</a-button>
    </a-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Dashboard extends Vue {
  vInput: any = null;
  created() { }
}
</script>
<style lang="less" scoped>
.ant-button-margin {
  margin-right: 8px;
}
</style>
