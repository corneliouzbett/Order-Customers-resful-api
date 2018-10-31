const customerService = require('../service/customer.service');
const customerModel = require('../models');

exports.getAllCustomers = (req, res) => {
    return customerService.getAllCustomers()
        .then(customer => {
            res.status(200).send(customer)
        })
        .catch((err) => res.send(err));
};

exports.getCustomerById = (req, res) => {
    console.log("customerID: ", req.params.customer_id);
    customerService.getCustomerById(req.params.customer_id)
        .then(customer => {
            res.send(customer)
        })
        .catch(err => res.send(err));
};

exports.create = (req, res) => {
    customerModel.Customer.create({
        id: req.body.id,
        customer_name: req.body.customer_name,
        phone_number: req.body.phone_number
    })
        .then(customer => {
            res.status(200).send("customer created successfully")
        })
        .catch((err) => res.send(err));
};

exports.update = (req, res) => {
    customerModel.Customer.update({
        customer_id: req.body.id, customer_name: req.body.customer_name,
        phone_number: req.body.phone_number
    }, {where: {id: req.params.customer_id}})
        .then((customer) => {
            res.status(200).send("updated successfully a customer with id = " + req.params.customer_id)
        })
        .catch(err => res.send(err));
};

exports.destroy = (req, res) => {
    customerModel.Customer.destroy({where: {customer_id: req.params.customer_id}})
        .then(() => {
            res.status(200).send('deleted successfully a customer with id = ' + req.params.customer_id)
        })
        .catch((err) => res.send(err));
};