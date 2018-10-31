const orderService = require('../service/order.service');
const models = require('../models');
const chalk = require('chalk');
const log = console.log;

exports.createOrder = (req, res) => {
    console.log("Data : ",req.body.order_date+"  :: "+req.body.quantity_ordered);
    models.Order.create({ id: req.body.id, order_date: req.body.order_date, customer_id: req.body.customer_id})
        .then(order => {
            res.status(200).send(order);
            log(chalk.blue("success:  created order with ID :: "+req.body.id));
        });
};

exports.getAllOrders = (request, response) =>{
    orderService.getAllOrders()
        .then( orders => {
        response.send(orders);
        log(chalk.blue.bold("success : Get all orders"));
    })
};

exports.getOrderById = (req, res) => {
    models.Order.findById(req.params.id)
        .then(order => {
        res.send(order);
        log(chalk.blue("success:  Retrieve order with ID :: "+req.body.id));
    })
};

exports.updateOrder = (req, res) => {
    models.Order.update( {order_date: req.body.order_date, customer_id: req.body.customer_id }, {where: {id: req.params.id}})
        .then((order) => {
            res.status(200).send("success :  updated successfully");
            log(chalk.blue("success:  updated successfully order with ID :: "+req.params.id));
        });
};

exports.deleteOrder = (req, res) => {
    models.Order.destroy({ where: {id: req.params.id}})
        .then(() => {
        res.status(200).send("success: deleted successfully");
        log(chalk.blue("success:  deleted successfully a order with ID :: "+req.params.id));
    });
};

exports.getOrderItemDetails = () =>{

};
