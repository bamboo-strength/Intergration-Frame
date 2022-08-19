import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

router.route('/getUser').get(UserController.getUser);

export default router;