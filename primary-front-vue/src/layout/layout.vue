<template src="./layout.html"></template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { start } from 'qiankun';
import ReuseTab from '@/components/reuse-tab/reuse-tab.vue';
import layoutMenu from '@/layout/layout.js';
import IframeBox from '@/layout/iframes/iframes.js';
import { RoutesModule } from '@/store/modules/routes';
import { IframesModule } from '@/store/modules/iframes';
import { ReuseTabModule } from '@/store/modules/reuse-tab';
import { LayoutModule } from '@/store/modules/layout';

@Component({
  components: {
    ReuseTab,
    layoutMenu,
    IframeBox
  }
})
export default class Layout extends Vue {
  collapsed: boolean = false;

  // 面包屑集合
  breadCrumbList: any[] = [];

  get iframesEnable() {
    return IframesModule.IFRAMES_ENABLE;
  }

  // 菜单集合
  get getRoutes() {
    return RoutesModule.routes;
  }

  // 当前已缓存菜单信息
  get cachedViews() {
    return ReuseTabModule.cachedViews;
  }

  // route fullPath
  get getRoute() {
    return this.$route.fullPath;
  }

  get isCollapse() {
    return LayoutModule.sidebar.opened;
  }

  mounted() {
    if (!(window as any).qiankunStarted) {
      (window as any).qiankunStarted = true;
      const opt = {
        singular: true,
        fetch(url: RequestInfo, ...args: any[]) {
          return window.fetch(url, {
            ...args,
            mode: 'cors',
            credentials: 'include'
          });
        }
      };

      start(opt);
    }
  }

  // 菜单切换事件
  change(val: any) {
    this.breadCrumbList = val;
  }

  // redirect to home page
  goBackHomePage() {
    this.$router.push('/');
  }

  // login out
  logOut() {
    console.log('login out!')
  }
}
</script>

<style lang="less" scoped src="./layout.less"></style>
