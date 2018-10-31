const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const chalk = require('chalk');

const env = process.env.NODE_ENV || 'production';
const config = require('../../../../config/config')[env];
console.log(chalk.bold.rgb(10, 100, 200)('server running in production ENVIRONMENT!'));

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {dialect: config.dialect,
    logging: console.log, operatorsAliases: false});

// Load each model file
const models = Object.assign({}, ...fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .map((file) => {
        const model = require(path.join(__dirname, file));
        console.log(chalk.bold.rgb(120,200,10)("Table :"+model.name+" Created successfully"));
        return { [model.name]: model.init(sequelize) }; })
);

// Load model associations
for (const model of Object.keys(models)) {
    typeof models[model].associate === 'function' && models[model].associate(models);
}

models.sequelize = sequelize;

module.exports = models;