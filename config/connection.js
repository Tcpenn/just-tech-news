//import sequelize constructor to the library
const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize('just_tech_news_db', 'root', '264169Ty!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;