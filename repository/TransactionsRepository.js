const sequelizeInstance = require('./SequelizeInstance');

module.exports.getFrequentCustomer = () => {
    let query = '';
    sequelizeInstance.selectQueryInterface(query);
};