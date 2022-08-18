import { Request, Response } from 'express';

export default class UserController {

    static getUser = async (request: Request, response: Response) => {
        response.send({
            id: 111
        })
    }
}
