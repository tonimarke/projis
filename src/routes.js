import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.put('/users/:user_id', UserController.update);
routes.delete('/users/:user_id', UserController.delete);

export default routes;
