const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('gestao', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
