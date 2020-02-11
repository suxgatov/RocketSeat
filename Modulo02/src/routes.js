import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    nome: 'Gustavo Corradi',
    email: 'gcorradiranzani@hotmail.com',
    password_hash: '12345',
    provider: false
  });
  return res.json(user);
});

export default routes;
