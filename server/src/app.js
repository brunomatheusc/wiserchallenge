import 'dotenv/config';

import express from 'express';
import routes from './routes';
import cors from 'cors';
import * as db from './database';

class App {
    constructor() {
        this.server = express();

        this.server.use(express.json());
        this.server.use(cors());

        this.routes();
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;