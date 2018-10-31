const customerModel = require( "../repository/model/customer.model");

exports.getAllCustomers = () => {
    return customerModel.findAll();
};

exports.findById = (id) => {
    return customerModel.findById(id);
};

exports.deleteCustomer = (id) => {
    return customerModel.destroy({where: {id: id}});
};