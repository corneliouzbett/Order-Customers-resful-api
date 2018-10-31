const orderService = require('../service/order.service');
const chalk = require('chalk');
const log = console.log;

exports.createOrder = (req, res) => {
    console.log("Data : ",req.body.order_date+"  :: "+req.body.quantity_ordered);
    orderService.createorder(req.body.id,req.body.order_date,req.body.quantity_ordered)
        .then(order => {
            res.status(200).send(order);
            log(chalk.blue("success:  created order with ID :: "+req.body.id));
        });
};

exports.getAllOrders = (request, response) =>{
    orderService.getAllOrders().then( orders => {
        response.send(orders);
        log(chalk.blue.bold("success : Get all orders"));
    })
};

exports.getOrderById = (req, res) => {
    orderService.getOrderById(req.params.id).then(order => {
        res.send(order);
        log(chalk.blue("success:  Retrieve order with ID :: "+req.body.id));
    })
};

exports.updateOrder = (req, res) => {
    orderService.updateOrder( req.params.id, req.body.id,req.body.order_date, req.body.quantity_ordered)
        .then((order) => {
        res.status(200).send("success");
        log(chalk.blue("success:  updated successfully a order with ID :: "+req.body.id));
    });
};

exports.deleteOrder = (req, res) => {
    orderService.deleteOrder(req.params.id).then(() => {
        res.status(200).send("success");
        log(chalk.blue("success:  deleted successfully a order with ID :: "+req.params.id));
    });
};
