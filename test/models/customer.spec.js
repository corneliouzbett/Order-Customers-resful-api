const { expect } = require('chai');

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const CustomerModel = require('../../models/customer');
const models = require('../../models');

describe('customer model', () => {
    const Customer = CustomerModel(sequelize, dataTypes);
    const customer = new Customer();

    checkModelName(Customer)('Customer');

    context('properties', () => {
        [
            'customer_name',
            'phone_number'
        ].forEach(checkPropertyExists(customer))
    });

    context('associations', () => {
        const Order = require('../../models/order');

        before(() => {
            Customer.associate({ Order })
        });

        it('defined a hasMany association with Order', () => {
            expect(models.Customer.hasMany).should.be.have.calledWith(Order);
        })
    });
});