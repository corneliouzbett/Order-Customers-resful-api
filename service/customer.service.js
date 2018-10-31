const customerModel = require('../models');

module.exports.getAllCustomers = () => {
    return customerModel.Customer.findAll();
};

module.exports.getCustomerById = (id) =>{
    return customerModel.Customer.findById(id);
};
