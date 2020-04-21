import Sequelize from 'sequelize';

import User from './../models/User';
import databaseConfig from '../config/database';

const models = [ User ];

class Database {
    constructor() {
        this.init();
    }

    init() {
        // Cria a conexão com o banco de dados de acordo com o arquivo de config
        this.connection = new Sequelize(databaseConfig);

        // Faz o bind dos models para estabelecer a conexão
        models
            .map(model => model.init(this.connection));
    }
}

export default new Database();