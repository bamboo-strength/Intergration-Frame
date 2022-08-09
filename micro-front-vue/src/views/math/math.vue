<template>
  <div class="ms-body__main">
    Math
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Math extends Vue {
  created() {
    console.log('math update');
  }
}
</script>
