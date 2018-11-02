const Sequelize = require('../models/index');

module.exports.selectQueryInterface = (selectQuery) => {
    return Sequelize.getSequelizeInstance.query(selectQuery,
        {type: Sequelize.getSequelizeInstance.QueryTypes.SELECT});
};

module.exports.insertQueryInterface = (insertQuery) => {
    return Sequelize.getSequelizeInstance.query(insertQuery,
        {type: Sequelize.getSequelizeInstance.QueryTypes.INSERT} );
}

module.exports.updateQueryInterface = (updateQuery) => {
    return Sequelize.getSequelizeInstance.query(updateQuery,
        {type: Sequelize.getSequelizeInstance.QueryTypes.UPDATE} );
}

module.exports.deleteQueryInterface = (deleteQuery) => {
    return Sequelize.getSequelizeInstance.query(deleteQuery,
        {type: Sequelize.getSequelizeInstance.QueryTypes.DELETE} );
}