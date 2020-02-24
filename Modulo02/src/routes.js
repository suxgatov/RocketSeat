import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddliware from './app/middlewares/auth';

const routes = new Router();

// session
routes.post('/session', SessionController.store);
// end session

// users
routes.post('/users', UserController.store);

routes.use(authMiddliware);

routes.put('/users', UserController.update);
// end users

export default routes;
