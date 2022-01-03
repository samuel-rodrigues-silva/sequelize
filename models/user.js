const sequelize = require('../db');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = User