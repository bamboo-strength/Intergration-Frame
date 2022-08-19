import { USER_SQL } from '../db/sql';
import postgreClient from '../db/postgre.client';

export default class UserService {
    static getUser = async (queryParams: any) => {
        try {
            const result = await postgreClient.query(USER_SQL.getUser);
            return Promise.resolve(result.rows);
        } catch (error: any) {
            return Promise.reject(error.message);
        }
    }

    static insertUser = async () => {
        
    }
 }