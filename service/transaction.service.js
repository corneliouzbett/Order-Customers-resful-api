const models = require('../models');

module.exports.getAllTransaction = () =>{
    return models.Transaction.findAll();
};