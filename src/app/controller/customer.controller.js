const customerService = require( '../service/customer.service');
const Customer = require('../repository/model/customer.model');

exports.findAll = (req, res) => {
    customerService.getAllCustomers().then(customer => {
        res.status(200).send(customer);
    })
};

exports.create = (req, res) => {
    Customer.create({
        id: req.body.id,
        customer_name: req.body.customer_name,
        phone_number: req.body.phone_number})
        .then(customer => {res.status(200).send("customer created successfully")})
        .catch((err) => res.send(err));
};

exports.findById = (req, res) => {
    customerService.findById(req.params.id)
        .then(customer => {res.send(customer)})
        .catch(err => res.send(err));
};

exports.update = (req, res) => {
    customerService.update(req.params.id, req.body.id, req.body.customer_name, req.body.phone_number)
        .then((customer) => {res.status(200).send("updated successfully a customer with id = "+ customer)})
        .catch( err => res.send(err));
};

exports.destroy = (req, res) => {
    customerService.destroy(req.params.id)
        .then(() => {res.status(200).send('deleted successfully a customer with id = '+ req.params.id)})
        .catch((err) => res.send(err));
};