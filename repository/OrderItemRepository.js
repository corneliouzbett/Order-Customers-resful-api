const SequelizeInstance = require('./SequelizeInstance');

module.exports.getOrderItemDetails = () =>{
    let query = '';
    return SequelizeInstance.selectQueryInterface(query);
};