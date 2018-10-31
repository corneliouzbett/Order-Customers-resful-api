import * as sequelize from "sequelize";

const Sequelize = require('../models/index');
const sequelizeInstance = Sequelize.getSequelizeInstance;
module.exports.selectQueryInterface = (selectQuery) => {
    return sequelizeInstance.query(selectQuery, {type: sequelize.QueryTypes.SELECT});
};