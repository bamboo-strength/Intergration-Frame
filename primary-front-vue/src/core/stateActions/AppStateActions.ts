import { MicroAppStateActions, initGlobalState, OnGlobalStateChangeCallback } from 'qiankun';
import { IState } from './state.interface';

/**
 * 定义全局状态，并返回通信方法
 */
export class AppStateActions {
    protected actions: MicroAppStateActions | null = null;

    // 主应用名称, 应与package.name 保持一致
    protected primaryName = 'primary-front-vue';

    /** 广播模式 */
    public mode = 'broadcast';

    constructor() {
        this._initActions();
    }

    /**
     * 初始化 qiankun 通信工具
     */
    protected _initActions() {
        const state = this.assemble(this.mode, {
            type: 'init'
        });
        this.actions = initGlobalState(state);
    }

    /**
     * 组装数据
     * @param target 
     * @param message 
     */
    private assemble(target: String, message: Record<string, any>): IState {
        return {
            receiver: target,
            sender: this.primaryName,
            time: new Date(),
            message
        }
    }

    /**
     * 消息推送
     * @param state 
     */
    public subscribe(target: String, message: Record<string, any>) {
        const state: IState = this.assemble(target, message);
        this.actions?.setGlobalState(state);
    }

    /**
     * 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
     * @param callback 
     * @param fireImmediately 
     */
    public notify(callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) {
        this.actions?.onGlobalStateChange(callback, fireImmediately);
    }

    /**
     * 移除当前应用的状态监听
     */
    public unsubscribe() {
        this.actions?.offGlobalStateChange();
    }
}
