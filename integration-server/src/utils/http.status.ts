import { STATUS_ERROR, STATUS_SUCCESS } from "./global-variable";

export default class HttpStatus {
    static success(data: any, message?: any) {
        return {
            code: STATUS_SUCCESS,
            data,
            message
        }
    }

    static error(message: any) {
        return {
            code: STATUS_ERROR,
            message
        }
    }
}