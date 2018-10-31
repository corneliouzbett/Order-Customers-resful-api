const {expect} = require('chai');

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const OrderModel = require('../../models/order');

describe('Order', () => {
    const Order = OrderModel(sequelize, dataTypes);
    const order = new Order();

    checkModelName(Order)('Order');

    context('properties', () => {
        [
            'order_date'
        ].forEach(checkPropertyExists(order))
    });

    context('associations', () => {
        const Transaction = 'transaction';

        before(() => {
            Order.associate({Transaction})
        });

   /*     it('defined a hasOne association with Transaction', () => {
            expect(Order.belongsTo.to.have.been.calledWith(Transaction))
        })*/
    });
});