const Sequelize = require('../models/index');

module.exports.selectQueryInterface = (selectQuery) => {
    return Sequelize.getSequelizeInstance.query(selectQuery,
        {type: Sequelize.getSequelizeInstance.QueryTypes.SELECT});
};