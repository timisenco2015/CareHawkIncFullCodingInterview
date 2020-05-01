//require('dotenv').config('./app');
const Sequelize = require('sequelize');

// setting up sqlite and creating database file
module.exports = new Sequelize(
{
    dialect: 'sqlite',
    storage: './sqlDatabase/database.sqlite'
});
