require('dotenv/config');

module.exports = {
    // dialect: 'mysql',
    // host: '192.168.99.100',
    // username: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DATABASE,
    // dialectOptions: {
    //     connectTimeout: 60000      
    // }
    dialect: 'postgres',
    host: '192.168.99.100',
    username: "postgres",
    password: "20wiser20",
    database: "wiserchallenge",
    define: {
        timestamps: true,
        underscored: true
    }
};