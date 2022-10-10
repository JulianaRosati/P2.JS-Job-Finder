const Sequelize = require('sequelize');

const seqelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = seqelize;