const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:pw@localhost:5432/postgres');

module.exports = sequelize;