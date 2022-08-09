export interface IState {
    // 目标应用信息
    receiver: String;

    // 当前应用信息
    sender: String;

    // 发送时间
    time: Date;

    // 消息内容
    message: Record<string, any>
}