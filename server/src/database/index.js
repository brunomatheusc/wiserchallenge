import mysql from 'mysql';

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
    }
}

export default new Database().connection.connect();