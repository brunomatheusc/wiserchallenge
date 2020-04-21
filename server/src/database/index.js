import Sequelize from 'sequelize';

import User from './../models/User';
import databaseConfig from '../config/database';

const models = [ User ];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        this.connection.authenticate()
        .then(() => {
            console.log("Conectado com sucesso");
        })
        .catch((error) => {
            console.log("Erro ao conectar");
            console.log(error);
        });
    }
}

export default new Database();