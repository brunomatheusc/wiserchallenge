import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Cria uma sessão para autenticar o usuário
routes.post('/session', SessionController.store);

// Cria um novo usuário
routes.post('/user', UserController.store);

routes.use(authMiddleware);

// Atualiza os dados do usuário
// routes.put('/user', UserController.update);

// Retorna os dados do usuário
routes.get('/user', UserController.index);


routes.get('/', (req, res) => res.send('Hello api'));

export default routes;