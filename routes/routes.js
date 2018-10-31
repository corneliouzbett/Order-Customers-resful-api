const customerController = require('../controllers/customer.controller');
const itemController = require('../controllers/item.controller');
const ordersController = require('../controllers/order.controller');
const transactionController = require('../controllers/transaction.controller');

module.exports = (app) => {
    // customers
    app.get('/api/customers', customerController.getAllCustomers);
    app.post('/api/customers', customerController.create);
    app.get('/api/customers/:customer_id', customerController.getCustomerById);
    app.put('/api/customers/:customer_id', customerController.update);
    app.delete('/api/customers/:customer_id', customerController.destroy);
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
    // transactions routes
    app.get('/api/transactions', transactionController.findAllTransaction);
    app.post('/api/transactions', transactionController.createTransaction);
    app.get('/api/transactions/:id', transactionController.findTransactionById);
    app.put('/api/transactions/:id', transactionController.updateTransaction);
    app.delete('/api/transactions/:id', transactionController.deleteTransaction);
};