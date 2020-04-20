import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Retorna os dados do usuário
routes.get('/user', UserController.index);

// Cria um novo usuário
routes.post('/user', UserController.store);

// Atualiza os dados do usuário
routes.put('/user', UserController.update);

// Cria uma sessão para autenticar o usuário
routes.post('/session', SessionController.store);

routes.get('/', (req, res) => {
    return res.send('Hello api');
});

routes.get('/users', (req, res) => {
    return res.send('Hello users');
});

routes.post('/session', (req, res) => {
    console.log(req.params);

    return res.send('Session created');
});

export default routes;