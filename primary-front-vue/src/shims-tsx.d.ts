import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $actions: {
      // 消息推送
      subscribe(target: String, message: Record<string, any>): void;

      // 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
      notify(callback: Function, fireImmediately?: boolean): void;

      // 移除当前应用的状态监听
      unsubscribe(): void;
    }
  }
}