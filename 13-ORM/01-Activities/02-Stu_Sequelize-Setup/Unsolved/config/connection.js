const Sequelize = require('sequelize');
//config() puts dotenv files contents into process.env
require('dotenv').config();

const sequelize = new Sequelize(
  //sequelize is able to connect to database because login credentials are stored in .env file
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
);
console.log(process.env);
console.log('test');
module.exports = sequelize;
