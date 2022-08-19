import { Request, Response } from 'express';
import HttpStatus from '../utils/http.status';
import UserService from '../service/user.service';

export default class UserController {
    static getUser = async (request: Request, response: Response) => {
        try {
            const params = await UserService.getUser(request.query);
            response.send(HttpStatus.success(params));
        } catch (error) {
            response.send(HttpStatus.error(error));
        }
    }
}
