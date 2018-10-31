const models = require('../models');

module.exports.getAllOrders = () => {
    return models.Order.findAll();
};

module.exports.getAllTransaction = () =>{
    return models.Order.findAllTransaction().getAllTransaction();
};