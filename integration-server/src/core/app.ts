import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import routes from '../routes';
import mongoose from 'mongoose';
import { DB_URL } from '../utils/global-variable';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();

        this.config();

        this.app.use(routes);
    }

    private config() {
        // 开启 cors
        this.app.use(cors());
        // 支持 application/json 类型 发送数据
        this.app.use(json());
        // 支持 application/x-www-form-urlencoded 发送数据
        this.app.use(urlencoded({
            extended: false
        }));
        // 支持日志中间件
        this.app.use(morgan('dev'));
    }

    private setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect(DB_URL)
    }
}

export default new App().app;