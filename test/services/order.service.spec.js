const chai = require('chai');
const expect = chai.expect;
const orderService = require('../../service/order.service');

describe('Order Service', () => {
    it('should return a list of order', () => {
        expect(orderService.getAllOrders()).to.be.array;
    });

    it('should return a list of transactions', () => {
        expect(orderService.getAllTransaction()).to.be.array;
    });
});