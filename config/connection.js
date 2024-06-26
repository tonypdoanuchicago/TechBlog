// config/connection.js

const Sequelize = require('sequelize');
require('dotenv').config();

/*
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );
*/

    const sequelize = new Sequelize('challenge_14_db', 'root', 'Swabi1234', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
