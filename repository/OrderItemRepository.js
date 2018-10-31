const SequelizeInstance = require('./SequelizeInstance');

module.exports.getCustomerOrderDetails = () =>{
    let query = 'SELECT Orders.id as Order_id, order_date, customer_id, customer_name,phone_number FROM Orders, ' +
        'Customers where Orders.customer_id = Customers.id;';
    return SequelizeInstance.selectQueryInterface(query);
};