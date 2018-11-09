const sequelizeInstance = require('./SequelizeInstance');

module.exports.getFrequentCustomer = () => {
    let query = 'SELECT t.customer_id, customer_name, COUNT(customer_id) as num_of_transactions from (SELECT distinct Orders.id as order_id, Customers.id as customer_id, customer_name FROM Orders, Customers where Orders.customer_id = Customers.id) as t group by t.customer_id order by t.customer_id desc limit 1';
    return sequelizeInstance.selectQueryInterface(query);
};