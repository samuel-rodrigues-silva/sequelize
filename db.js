const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'samuel', '211220123a!', { dialect: 'mysql', host: 'localhost' })

module.exports = sequelize