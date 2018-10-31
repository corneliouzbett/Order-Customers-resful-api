const SequelizeMock = require('sequelize-mock');
const DBConnectionMock = new SequelizeMock();

module.exports.customerMock = DBConnectionMock.define('Customers', {
    'customer_name': 'Bett kip',
    'phone_number': 7378232325
});