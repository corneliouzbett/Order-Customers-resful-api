const SequelizeInstance = require('./SequelizeInstance');

module.exports.getCustomerOrderDetails = () => {
    let query = 'SELECT Orders.id as Order_id, order_date, customer_id, customer_name,phone_number FROM Orders, ' +
        'Customers where Orders.customer_id = Customers.id;';
    return SequelizeInstance.selectQueryInterface(query);
};

module.exports.getAllRecords = () => {
    let query = 'SELECT Transactions.id as #,customer_name, phone_number,Orders.id as OrderId, order_date, Items.id as ItemId,' +
        ' item_name, unit_cost, quantity_ordered, (quantity_ordered * unit_cost) as Total FROM Orders, Items,' +
        ' Transactions, Customers where Orders.customer_id = Customers.id && Items.id = Transactions.item_id' +
        ' && Orders.id = Transactions.order_id;';
    return SequelizeInstance.selectQueryInterface(query);
};