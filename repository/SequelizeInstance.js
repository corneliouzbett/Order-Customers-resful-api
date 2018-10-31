const  Sequelize = require('../models/index');

module.exports.selectQueryInterface = (selectQuery) => {
    Sequelize.query(selectQuery, { type: sequelize.QueryTypes.SELECT});
};