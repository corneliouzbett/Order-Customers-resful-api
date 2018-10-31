const customerController = require('../app/controller/customer.controller.js');
const ordersController = require('../app/controller/order.controller');
const itemController = require('../app/controller/item.controller.js');
const transactionController = require('../app/controller/transaction.controller');

module.exports = (app) => {
    // item routes
    app.post('/api/items', itemController.createItem);
    app.get('/api/items', itemController.getAllItems);
    app.get('/api/items/:id', itemController.getItemById);
    app.put('/api/items/:id', itemController.updateItem);
    app.delete('/api/items/:id', itemController.deleteItem);
    // order routes
    app.post('/api/orders', ordersController.createOrder);
    app.get('/api/orders', ordersController.getAllOrders);
    app.get('/api/orders/:id', ordersController.getOrderById);
    app.put('/api/orders/:id', ordersController.updateOrder);
    app.delete('/api/orders/:id', ordersController.deleteOrder);
    // customer routes
    app.post('/api/customers', customerController.create);
    app.get('/api/customers', customerController.findAll);
    app.get('/api/customers/:id', customerController.findById);
    app.put('/api/customers/:id', customerController.update);
    app.delete('/api/customers/:id', customerController.destroy);
    // transactions routes
    app.get('/api/transactions', transactionController.findAllTransaction);

};
